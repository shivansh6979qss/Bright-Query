import React from 'react';
import logo from '../images/logo.png';
import { MdSearch } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
const Header = ({ searchField, setSearchField }) => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src={logo} alt="bright-query-logo" />
      </div>
      <div className="search">
        <div className="search-input-container">
          <input
            value={searchField}
            placeholder="Search Company by Name"
            onChange={(e) => setSearchField(e.target.value)}
          />
          <button
            onClick={() => setSearchField('')}
            className="search-input-container-close"
          >
            <MdClose size={14} />
          </button>
        </div>

        <button className="search-btn">
          <span className="search-btn-text">Search</span>
          <span className="search-btn-icon">
            <MdSearch size={23} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
