"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../../services/Api";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      setLoading(true);
      setError("");

      // basic frontend validation
      if (formData.password !== formData.confirm_password) {
        setError("Passwords do not match");
        return;
      }

      const response = await API.post("user/register/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // If your backend returns tokens after register (recommended)
      if (response.data.access && response.data.refresh) {
        login(response.data.access, response.data.refresh);
        navigate("/");
      } else {
        // fallback: redirect to login
        navigate("/verify-email");
      }

    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.detail ||
        err.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-[35px] p-8 text-white"
      >

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black mb-3">
            Create Account
          </h2>

          <p className="text-gray-300">
            Join BookMe and start hosting or booking stays
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-2xl p-4 mb-5 text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <div className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-pink-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-pink-500 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-pink-500 transition"
          />

          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-pink-500 transition"
          />

          {/* BUTTON */}
          <button
            onClick={registerUser}
            disabled={loading}
            className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:scale-[1.02] transition duration-300 shadow-xl disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;