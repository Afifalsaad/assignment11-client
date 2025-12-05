import React from "react";
import ThemeSwitcher from "../../../ThemeSwitcher/SwitchTheme";
import { Link, NavLink } from "react-router";
import Logo from "../../../Pages/Shared/Logo";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">All-Product</NavLink>
      </li>
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2">
              {links}
            </ul>
          </div>
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <ThemeSwitcher></ThemeSwitcher>
        <div className="navbar-end hidden lg:flex font-semibold">
          <div>
            <ul className="menu menu-horizontal px-4">{links}</ul>
          </div>
          <div>
            <li className="btn btn-primary text-black">
              <NavLink to="/">Login</NavLink>
            </li>
            <li className="btn btn-primary mx-4 text-black">
              <NavLink to="/">Register</NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
