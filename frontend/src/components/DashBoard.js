import React from 'react';
import List from './List';
import SideNav from './SideNav';

const DashBoard = () => {
  return (
    <div className="dashboard">
      <SideNav />
      <List />
    </div>
  );
};

export default DashBoard;
