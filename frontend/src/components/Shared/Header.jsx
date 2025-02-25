import { FaSearch } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo"; // Importing your Logo component

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Handle search action
  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("Searching for:", query); // Replace with navigation logic
      navigate(`/search?query=${query}`); // Example route
    }
  };

  // Trigger search when Enter key is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Logo Component */}
      <Logo />

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm w-[400px] mr-auto">
        <input
          type="text"
          placeholder="Find your dream jobs"
          className="bg-transparent outline-none flex-grow px-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
        />
        <button className="text-purple-500" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? "underline text-black"
                : "text-gray-500 hover:text-black"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `text-lg font-semibold ${
              isActive
                ? "underline text-black"
                : "text-gray-500 hover:text-black"
            }`
          }
        >
          Jobs
        </NavLink>

        {/* Login & Signup Buttons */}
        <Link to="/login">
          <button className="bg-gradient-to-r from-[#D280F7] to-[#8A52FF] text-white px-4 py-2 h-[44px] w-[138px] rounded-full cursor-pointer text-lg">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-gradient-to-r from-[#D280F7] to-[#8A52FF] text-white px-4 py-2 h-[44px] w-[138px] rounded-full cursor-pointer text-lg">
            Signup
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
