// components/Header.tsx

"use client";

import { useState } from "react";

import {
  Menu,
  Search,
  UserCircle2,
  Heart,
  Building2,
  CalendarDays,
  LogOut,
  Shield,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  /*
    ============================================
    TEMP USER DATA
    Replace later with backend auth context/API
    ============================================
  */

  const isAuthenticated = true;

  const user = {
    username: "Damisa",
    role: "host", // user | host | admin
  };

  /*
    ============================================
    LOGOUT
    ============================================
  */

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");

    setOpenMenu(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            BM
          </div>

          <h1 className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Book Me
          </h1>
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition">
          <input
            type="text"
            placeholder="Search destinations"
            className="outline-none bg-transparent px-2 w-56"
          />

          <button className="bg-pink-500 hover:bg-pink-600 transition p-2 rounded-full text-white">
            <Search size={18} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* BECOME HOST */}
          <Link
            to="/become-host"
            className="hidden md:block font-semibold hover:text-pink-500 transition"
          >
            Become a Host
          </Link>

          {/* USER MENU */}
          <div className="relative">

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition bg-white"
            >
              {openMenu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}

              <UserCircle2 size={28} />
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
              {openMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >

                  {/* USER INFO */}
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 text-white">
                    <h2 className="text-xl font-bold">
                      Welcome, {user.username}
                    </h2>

                    <p className="capitalize opacity-90">
                      {user.role} account
                    </p>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="p-3">

                    {/* NORMAL USER */}
                    {isAuthenticated && (
                      <>
                        <MenuItem
                          icon={<Heart size={18} />}
                          text="Favourites"
                          to="/favourites"
                          setOpenMenu={setOpenMenu}
                        />

                        <MenuItem
                          icon={<CalendarDays size={18} />}
                          text="Reservations"
                          to="/reservations"
                          setOpenMenu={setOpenMenu}
                        />
                      </>
                    )}

                    {/* HOST */}
                    {user.role === "host" && (
                      <MenuItem
                        icon={<Building2 size={18} />}
                        text="My Properties"
                        to="/my-properties"
                        setOpenMenu={setOpenMenu}
                      />
                    )}

                    {/* ADMIN */}
                    {user.role === "admin" && (
                      <MenuItem
                        icon={<Shield size={18} />}
                        text="Admin Dashboard"
                        to="/admin"
                        setOpenMenu={setOpenMenu}
                      />
                    )}

                    {/* GUEST */}
                    {!isAuthenticated && (
                      <>
                        <MenuItem
                          text="Login"
                          to="/login"
                          setOpenMenu={setOpenMenu}
                        />

                        <MenuItem
                          text="Register"
                          to="/register"
                          setOpenMenu={setOpenMenu}
                        />
                      </>
                    )}

                    {/* LOGOUT */}
                    {isAuthenticated && (
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-50 text-red-500 transition"
                      >
                        <LogOut size={18} />

                        Logout
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

/*
  ============================================
  REUSABLE MENU ITEM
  ============================================
*/

function MenuItem({ icon, text, to, setOpenMenu }) {
  return (
    <Link
      to={to}
      onClick={() => setOpenMenu(false)}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-100 transition"
    >
      {icon}

      <span className="font-medium">
        {text}
      </span>
    </Link>
  );
}