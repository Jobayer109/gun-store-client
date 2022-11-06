import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .then((error) => {});
  };

  return (
    <div className="navbar bg-black px-24 py-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Item 1</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-orange-500">
          Gun Store
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="text-white hover:text-orange-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-orange-500" to="/orders">
              Orders
            </Link>
          </li>

          {user?.email ? (
            <li>
              <button onClick={handleSignOut} className="btn btn-outline btn-error">
                Sign out
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <button className="btn btn-outline btn-success">Sign in</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="avatar">
        <div className="w-10 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={ user?.photoURL} alt="" />
        </div>
      </div>
        <Link className="btn btn-outline text-white">Get Appointment</Link>
      </div>
    </div>
  );
};

export default Header;
