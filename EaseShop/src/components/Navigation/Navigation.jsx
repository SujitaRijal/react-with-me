import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full py-6 bg-white shadow-md">
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center gap-5">
          <Link className="gap-8 text-3xl font-bold text-black" to={"/"}>
            ShopEase
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex text-black gap-14">
            <div className="relative">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link text-black font-bold" : "text-black"
                }
                to={"/"}
              >
                Shop
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link text-black font-bold" : "text-black"
                }
                to={"/mens"}
              >
                Men
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link text-black font-bold" : "text-black"
                }
                to={"/womens"}
              >
                Women
              </NavLink>
            </div>
            <div className="relative">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link text-black font-bold" : "text-black"
                }
                to={"/kids"}
              >
                Kids
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div className="relative flex items-center">
            <input
              type="text"
              className="px-4 py-2 pl-10 pr-10 border rounded-lg outline-none"
              placeholder="Search..."
            />
            <svg
              className="absolute w-5 h-5 text-gray-600 transform -translate-y-1/2 left-3 top-1/2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinejoin="round"
                d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm6.293 10.707a9 9 0 1 0-1.414 1.414l3.536 3.536a1 1 0 0 0 1.414-1.414l-3.536-3.536z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center gap-8">
            {/* Wishlist Icon */}
            <li>
              <Link to={"/wishlist"} aria-label="Wishlist">
                <svg
                  className="w-6 h-6 text-gray-600 hover:fill-black"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </Link>
            </li>

            {/* Account (Profile) Icon */}
            <li>
              <Link to={"/account"} aria-label="Account">
                <svg
                  className="w-6 h-6 text-gray-600 hover:fill-black"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-3.31 0-6 1.69-6 3v2h12v-2c0-1.31-2.69-3-6-3z"
                  />
                </svg>
              </Link>
            </li>

            {/* Cart Icon */}
            <li>
              <Link to={"/cart"} aria-label="Cart">
                <svg
                  className="w-6 h-6 text-gray-600 hover:fill-black"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l3 9h10l3-9h2M6 14h12l1.5 6h-15l1.5-6z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
