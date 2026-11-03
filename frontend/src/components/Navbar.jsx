
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser, AiOutlineEdit, AiOutlineLogout, AiOutlineSearch } from 'react-icons/ai';
import { TbBrandTinderFilled } from "react-icons/tb";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from "../slices/usersApiSlice";
import { clearCredentials } from '../slices/authSlice';
import { IoSettingsOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";

import SearchBox from './SearchBox';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  const profilePicture = userInfo?.data?.user?.profilePicture || userInfo?.data?.profilePicture;

  useEffect(() => {
    if (userInfo) {
      navigate('/blogs');
    }
  }, [navigate, userInfo]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const res = await logout().unwrap();
      dispatch(clearCredentials());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#1b1b1b]">

      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#bae51a]">
        <TbBrandTinderFilled size={60} />
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center">

        {/* Non-Logged-In Navigation Links */}
        {!userInfo && (
          <>
            <li className="p-4">
              <NavLink
                to="/"
                className={({ isActive }) => `transition-colors duration-200 hover:text-[#bae51a] ${isActive ? 'text-[#bae51a]' : 'text-gray-300'}`}
              >
                Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/blogs"
                className={({ isActive }) => `transition-colors duration-200 hover:text-[#bae51a] ${isActive ? 'text-[#bae51a]' : 'text-gray-300'}`}
              >
                Blogs
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/signup"
                className={({ isActive }) => `transition-colors duration-200 hover:text-[#bae51a] ${isActive ? 'text-[#bae51a]' : 'text-gray-300'}`}
              >
                Signup
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/login"
                className={({ isActive }) => `transition-colors duration-200 hover:text-[#bae51a] ${isActive ? 'text-[#bae51a]' : 'text-gray-300'}`}
              >
                Login
              </NavLink>
            </li>
          </>
        )}

        {/* Logged-In Navigation Links */}
        {userInfo && (
          <>
            {/* Search Bar and Icon */}
            <li>
              <SearchBox />
            </li>

            {/* Profile Section */}
            <li className="p-4">
              <div className="relative inline-block text-left">
                <button
                  className="w-8 h-auto rounded-full mt-2 text-white"
                  onClick={toggleDropdown}
                >
                  <img
                    src={profilePicture || 'unknown'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#1b1b1b] border border-white/10 rounded-lg shadow-xl z-10">
                    <div className="flex flex-col">
                      <NavLink
                        to="/profile"
                        className="py-2 px-4 text-gray-300 hover:bg-[#bae51a] hover:text-black flex items-center transition-colors"
                      >
                        <AiOutlineUser className="mr-2" />
                        Profile
                      </NavLink>
                      <NavLink
                        to="/blogs"
                        className="py-2 px-4 text-gray-300 hover:bg-[#bae51a] hover:text-black flex items-center transition-colors"
                      >
                        <FaBookOpen className="mr-2" />
                        Blogs
                      </NavLink>
                      <NavLink
                        to="/publish"
                        className="py-2 px-4 text-gray-300 hover:bg-[#bae51a] hover:text-black flex items-center transition-colors"
                      >
                        <AiOutlineEdit className="mr-2" />
                        Write Blog
                      </NavLink>
                      <NavLink
                        to="/setting"
                        className="py-2 px-4 text-gray-300 hover:bg-[#bae51a] hover:text-black flex items-center transition-colors"
                      >
                        <IoSettingsOutline className='mr-2' />
                        Setting
                      </NavLink>

                      <button
                        onClick={handleLogout}
                        className="py-2 px-4 text-red-400 hover:bg-[#bae51a] hover:text-black flex items-center transition-colors"
                      >
                        <AiOutlineLogout className="mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden text-[#bae51a] cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation */}
      <ul
        className={
          nav
            ? 'absolute left-0 top-0 w-[60%] h-full border-r border-r-white/10 bg-[#1b1b1b] ease-in-out duration-500 z-50'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#bae51a] m-4">
          <TbBrandTinderFilled size={40} />
        </h1>

        {/* Mobile Links */}
        {!userInfo && (
          <>
            <li className="p-4 border-b border-white/10">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'text-[#bae51a]' : 'text-gray-300')}
              >
                Home
              </NavLink>
            </li>
            <li className="p-4 border-b border-white/10">
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? 'text-[#bae51a]' : 'text-gray-300')}
              >
                Blogs
              </NavLink>
            </li>
            <li className="p-4 border-b border-white/10">
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'text-[#bae51a]' : 'text-gray-300')}
              >
                Signup
              </NavLink>
            </li>
            <li className="p-4 border-b border-white/10">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'text-[#bae51a]' : 'text-gray-300')}
              >
                Login
              </NavLink>
            </li>
          </>
        )}

        {userInfo && (
          <>
            <li>
              <SearchBox />
            </li>

            <div className="flex flex-col p-4 border-gray-600 items-start">
              <NavLink
                to="/profile"
                className="py-2 px-4 text-gray-300 border-b border-white/10 w-full hover:bg-[#bae51a] hover:text-black transition-colors"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/blogs"
                className="py-2 px-4 text-gray-300 border-b border-white/10 w-full hover:bg-[#bae51a] hover:text-black transition-colors"
              >
                Blogs
              </NavLink>

              <NavLink
                to="/publish"
                className="py-2 px-4 text-gray-300 border-b border-white/10 w-full hover:bg-[#bae51a] hover:text-black transition-colors"
              >
                Write Blog
              </NavLink>
              <NavLink
                to="/setting"
                className="py-2 px-4 text-gray-300 border-b border-white/10 w-full hover:bg-[#bae51a] hover:text-black transition-colors"
              >
                Setting
              </NavLink>

              <button
                onClick={handleLogout}
                className="py-2 px-4 text-gray-300 border-b border-white/10 hover:bg-[#bae51a] hover:text-black block w-full text-left transition-colors"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
