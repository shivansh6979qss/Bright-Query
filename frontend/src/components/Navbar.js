import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "sweetalert2/src/sweetalert2.scss";

import logo from "../images/logo.png";

import { MdSearch } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdDensityMedium } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { setSearch } from "../redux/features/DataSearch";
import { fetchdata } from "../redux/features/DataList";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState("");
  const searchText = useSelector((state) => state.search);

  const searchHandler = () => {
    dispatch(fetchdata(searchField));
  };
  // useEffect(() => {
  //   dispatch(setSearch(searchField));
  // }, [searchField]);
  return (
    <>
      <nav>
        <div className="left-container">
          <img className="logo" src={logo} alt="bright-query-logo" />
          <div className="search">
            <div className="search-input-container">
              <input
                value={searchField}
                placeholder="Search Company by Name"
                onChange={(e) => setSearchField(e.target.value)}
              />
              <button
                onClick={() => setSearchField("")}
                className="search-input-container-close"
              >
                <MdClose size={14} />
              </button>
            </div>

            <button className="search-btn" onClick={() => searchHandler()}>
              <span className="search-btn-text">Search</span>
              <span className="search-btn-icon">
                <MdSearch size={23} />
              </span>
            </button>
          </div>
        </div>

        <div className="navbar-icons">
          <MdDensityMedium size={20} />
          <FaUserCircle size={25} />
        </div>
      </nav>
      <hr style={{ margin: 3 }} />
    </>
  );
};

export default Navbar;
