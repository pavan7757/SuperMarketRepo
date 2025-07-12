import React, { useState } from "react";
import "../styles/SellerForm.css";

const SellerForm = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    category: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
    country: "",
    shipping: ""
  });
  const [imagePreview, setImagePreview] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    const allFilled = Object.values(updatedData).every(val => val.trim() !== "");
    setIsButtonDisabled(!allFilled);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImagePreview("");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/sellers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Seller registered successfully");
        window.location.href = "ProductDetails.html";
      })
      .catch(() => alert("❌ Error submitting form"));
  };

  return (
    <>
      <div className="tabs">
        <div className="tab active">Seller information</div>
        <div className="tab">Product detail</div>
        <div className="tab">Dashboard</div>
      </div>
      <div className="main-content">
        <div className="form-image-row">
          <form className="seller-form" onSubmit={handleSubmit}>
            <h2>Tell us about your bussiness</h2>

            {[
              { label: "Set a name for your shop", name: "shopName" },
              { label: "Select product category", name: "category" },
              { label: "Pin code", name: "pincode" },
              { label: "Enter your business address", name: "address" },
              { label: "City", name: "city" },
              { label: "State", name: "state" },
              { label: "Country", name: "country" },
              { label: "Shipping option", name: "shipping", placeholder: "Self shipping or partner shipping" },
            ].map(({ label, name, placeholder = "" }) => (
              <div key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type="text"
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            ))}

            <button
              type="submit"
              className="continue-btn"
              disabled={isButtonDisabled}
              style={{
                cursor: isButtonDisabled ? "not-allowed" : "pointer",
                opacity: isButtonDisabled ? 0.7 : 1,
              }}
            >
              Continue
            </button>
          </form>

          <div
            className="image-placeholder"
            id="imagePreview"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px" }}
          >
            {imagePreview ? (
              <>
                <img
                  src={imagePreview}
                  alt="Shop"
                  style={{
                    maxWidth: "96%",
                    maxHeight: "380px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 12px rgba(4,120,87,0.13)",
                    border: "2px solid #d1fae5",
                    marginBottom: "10px",
                  }}
                />
                <span style={{ color: "#047857", fontSize: "1rem", fontWeight: "500" }}>Preview</span>
              </>
            ) : (
              <span style={{ color: "#047857", fontSize: "1.3rem", fontWeight: "600" }}>Image</span>
            )}
          </div>

          <label
            htmlFor="shopImage"
            style={{
              marginTop: "16px",
              display: "block",
              fontWeight: 500,
              color: "#047857",
              cursor: "pointer",
            }}
          >
            <span className="upload-btn">Upload Shop Image</span>
            <input type="file" id="shopImage" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
          </label>
        </div>
      </div>
    </>
  );
};

export default SellerForm;
