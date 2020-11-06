import React from "react";
import Logo from "./Logo";
import Search from "./Search";

const Header = ({onSearch}) => (
  <div className="header">
      <Logo />
      <Search onSearch={onSearch}/>
  </div>
);

export default Header;
