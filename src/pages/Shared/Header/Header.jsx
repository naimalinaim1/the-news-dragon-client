import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="text-center my-5">
      <img src={logo} alt="logo" />
      <p className="text-secondary">Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </header>
  );
};

export default Header;
