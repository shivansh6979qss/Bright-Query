import React, { useState } from 'react';

import { MdDensityMedium } from 'react-icons/md';
import { MdOutlineFormatListBulleted } from 'react-icons/md';
import { MdDragIndicator } from 'react-icons/md';
import { MdOutlineFilePresent } from 'react-icons/md';
import { MdCreditCard } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import DropDownFilter from './DropDownFilter';
import { leftFilters } from '../data/filterData';

const SideNav = () => {
  const [show, setShow] = useState(true);

  const showHandler = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div className="sidenav">
      <div className="show-arrow">
        <button onClick={() => showHandler()} className="arrow">
          {show ? (
            <AiOutlineArrowLeft size={23} />
          ) : (
            <AiOutlineArrowRight size={23} />
          )}
        </button>
      </div>
      {show ? (
        <div>
          <div className="sidenav-links">
            <MdDensityMedium size={16} />
            <div className="sidenav-links-text">Menu</div>
          </div>
          <div className="sidenav-links">
            <MdOutlineFormatListBulleted size={16} />
            <div className="sidenav-links-text">List</div>
          </div>
          <div className="sidenav-links">
            <MdDragIndicator size={16} />
            <div className="sidenav-links-text">Aggregate</div>
          </div>
          <div className="sidenav-links">
            <MdOutlineFilePresent size={16} />
            <div className="sidenav-links-text">Save Search</div>
          </div>
          <div className="sidenav-links search-filter">
            <MdCreditCard size={16} />
            <div className="sidenav-links-text">Search Filter</div>
          </div>
          <div className="search-filter-items">
            {leftFilters.map((x, index) => {
              //  console.log(x);
              return <DropDownFilter key={index} item={x} />;
            })}
            <button className="search-filter-items-clear">
              Clear All filters
            </button>
          </div>
        </div>
      ) : (
        <div className="sidenav-links">
          <MdDensityMedium size={16} />
          <div className="sidenav-links-text">Menu</div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
