import React from "react";
import ThemeSwitcher from "../../../ThemeSwitcher/SwitchTheme";
import { Link, NavLink } from "react-router";
import Logo from "../../../Pages/Shared/Logo";
import useAuth from "../../../Hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import Swal from "sweetalert2";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        {
          Swal.fire({
            title: "Logout Successful",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: `Logout Error ${error.message}`,
          icon: "error",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-black/50">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-products" className="hover:text-black/50">
          All-Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:text-black/50">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:text-black/50">
          Contact
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/dashboard" className="hover:text-black/50">
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-neutral fixed z-50">
        <div className="w-[1150px] mx-auto flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
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

          <div className="w-[200px] lg:w-[700px] flex justify-end gap-3 items-center">
            <div className="">
              <ul className="hidden lg:flex items-center gap-5 justify-center">
                {links}
              </ul>
            </div>
            <div>
              <div>
                {user ? (
                  <div className="relative items-center flex gap-4 lg:mr-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden">
                      <Dropdown>
                        <DropdownTrigger>
                          <div className="outline-none border-none focus:outline-none ring-0 focus:ring-0 cursor-pointer">
                            {user.photoURL ? (
                              <img
                                className="w-full h-full object-cover hover:cursor-pointer"
                                src={user.photoURL}
                                alt="avatar"
                              />
                            ) : (
                              <RxAvatar className="text-4xl hover:cursor-pointer text-black" />
                            )}
                          </div>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Static Actions"
                          className="bg-base-100 text-neutral-accent w-40 space-y-5 p-3 rounded-xl">
                          <DropdownItem
                            className="hover:bg-amber-300 px-2 py-1 rounded-md"
                            key="new">
                            Profile
                          </DropdownItem>
                          <DropdownItem
                            className="hover:bg-amber-300 px-2 py-1 rounded-md"
                            key="copy">
                            About Us
                          </DropdownItem>
                          <DropdownItem
                            className="hover:bg-amber-300 px-2 py-1 rounded-md"
                            key="copy">
                            Contact
                          </DropdownItem>
                          <DropdownItem
                            key="delete"
                            onClick={handleLogout}
                            className="hover:bg-red-200 text-red-500 px-2 py-1 rounded-md">
                            Logout
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                ) : (
                  <div className="flex mr-4">
                    <Link
                      to="/login"
                      className="btn btn-primary text-black mx-2 hover:cursor-pointer">
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-primary text-black hover:cursor-pointer">
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
