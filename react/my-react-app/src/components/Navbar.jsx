import React from "react";
import "../styles/navbar.css";   // custom CSS (keeps dropdown & focus styles)

function Navbar() {
  return (
    <nav className="bg-white w-full 89rem p-4 rounded-2xl shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4">

        {/* logo */}
        <div className="text-3xl font-bold text-blue-700">𝓩𝓪𝓻𝓿𝓸𝓬</div>

        {/* search bar */}
        <div className="w-full md:w-2/3 order-3 md:order-none mx-auto">
          <div className="relative max-w-3xl mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search for products, categories, or ideas..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 search-input"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* three round icon buttons */}
        <div className="flex items-center space-x-3 order-2 md:order-none">
          {/* search icon */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow gradient-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* cart icon */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 shadow gradient-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          {/* bell icon */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow gradient-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a2 2 0 11-4 0m4 0h-4" />
            </svg>
          </button>
        </div>
      </div>

      {/* category strip */}
      <div className="mt-6">
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white text-center py-2 px-4 rounded-full font-semibold shadow-md hover:from-sky-500 hover:to-blue-600 cursor-pointer transition-colors duration-300">
          <ul className="flex flex-wrap justify-center items-center gap-20">
            {/* static links */}
            <li className="inline-block mx-2"><a href="#" className="text-white hover:text-gray-200">Kilos</a></li>
            <li className="inline-block mx-2"><a href="#" className="text-white hover:text-gray-200">Mobiles</a></li>

            {/* dropdown examples */}
            <li className="inline-block mx-2 relative">
              <a href="#" className="text-white hover:text-gray-200">Fashion &#11167;</a>
              <ul className="dropdown">
                {["Men", "Women", "Kids", "Accessories", "Lougages"].map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="inline-block mx-2 relative">
              <a href="#" className="text-white hover:text-gray-200">Electronics &#11167;</a>
              <ul className="dropdown">
                {["Laptops", "Tablets", "Cameras", "Headphones", "Smartwatches"].map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="inline-block mx-2 relative">
              <a href="#" className="text-white hover:text-gray-200">Home &amp; Furniture &#11167;</a>
              <ul className="dropdown">
                {["Living Room", "Bedroom", "Kitchen", "Office", "Outdoor"].map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="inline-block mx-2"><a href="#" className="text-white hover:text-gray-200">Appliances</a></li>

            <li className="inline-block mx-2 relative">
              <a href="#" className="text-white hover:text-gray-200">Toys &#11167;</a>
              <ul className="dropdown">
                {["Action Figures", "Dolls", "Puzzles", "Board Games", "Outdoor Toys"].map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="inline-block mx-2 relative">
              <a href="#" className="text-white hover:text-gray-200">Two Wheelers &#11167;</a>
              <ul className="dropdown">
                {["Petrol Vehicles", "Electric Vehicles"].map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
