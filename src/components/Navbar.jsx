import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar({ search, setSearch }) {

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🎓 College Media Hub</h2>

     <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>


      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/hollywood">Hollywood</Link></li>
        <li><Link to="/bollywood">Bollywood</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;










