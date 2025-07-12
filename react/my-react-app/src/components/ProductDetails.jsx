import React, { useState } from 'react';
import '../styles/product.css';           // local file above

export default function ProductDetails() {
  // mock product data
  const product = {
    title: 'Wireless Noise‑Cancelling Headphones',
    brand: 'SoundPulse',
    price: 159.99,
    rating: 4.5,
    reviews: 234,
    description:
      'Experience immersive audio with hybrid noise cancellation, 40‑hour battery life, and ultra‑soft ear cushions. Includes a 3.5 mm cable, USB‑C fast‑charging, and carrying case.',
    images: [
      '/assets/headphone‑1.jpg',
      '/assets/headphone‑2.jpg',
      '/assets/headphone‑3.jpg',
      '/assets/headphone‑4.jpg',
    ],
    colors: ['#111827', '#6b7280', '#f3f4f6'], // black, gray, white
  };

  const [mainImg, setMainImg] = useState(product.images[0]);
  const [color, setColor] = useState(product.colors[0]);

  return (
    <div className="container mx-auto px-4 py-10 font-inter">
      {/* grid */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* left: gallery */}
        <div>
          <div className="image-wrapper overflow-hidden rounded-2xl shadow-lg">
            <img
              src={mainImg}
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>

          {/* thumbnails */}
          <div className="flex gap-4 mt-4">
            {product.images.map((img) => (
              <button
                key={img}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                  mainImg === img ? 'thumb-active' : 'border-transparent'
                }`}
                onClick={() => setMainImg(img)}
              >
                <img src={img} alt="" className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* right: details */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{product.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{product.brand}</p>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2">
            <StarRating value={product.rating} />
            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
          </div>

          {/* price */}
          <div className="text-3xl font-bold text-blue-600">₹{product.price.toLocaleString('en-IN')}</div>

          {/* color picker */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Color</h4>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  className={`w-8 h-8 rounded-full border-2 focus:outline-none ${
                    color === c ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>

          {/* description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* CTA */}
          <button className="gradient-button w-full md:w-1/2 py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* helper for stars */
function StarRating({ value }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <Star key={i} />;
        if (i === full && half) return <HalfStar key={i} />;
        return <EmptyStar key={i} />;
      })}
    </div>
  );
}

const Star = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.153c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.285-3.946z" />
  </svg>
);
const HalfStar = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20">
    <defs>
      <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half)"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.153c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.285-3.946z"
    />
  </svg>
);
const EmptyStar = () => (
  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.153c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.154a1 1 0 00.95-.69l1.285-3.946z" />
  </svg>
);
