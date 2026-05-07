"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getToken = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/token/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      console.log("TOKEN:", json);

      if (json.access) {
        localStorage.setItem("token", json.access);
        localStorage.setItem("refresh", json.refresh);
        
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 text-white"
      >
        {/* HEADER */}
        <h2 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Login to continue your hosting journey
        </p>

        {/* FORM */}
        <div className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-pink-500 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-pink-500 transition"
          />

          <button
            onClick={getToken}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition transform shadow-lg"
          >
            Login
          </button>
        </div>

        {/* FOOTER ACTION */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-pink-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;