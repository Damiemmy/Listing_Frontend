"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Home, BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function BecomeHostPage() {
    const access_token=localStorage.getItem('access')
    const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        location: "",
        experience: "",
        reason: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/user/roles/become_host/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc4MTQ1ODczLCJpYXQiOjE3NzgxNDIyNzMsImp0aSI6IjNkNTNlMzY4YmE5MDRmYjE4Y2U5NWNkMDI2MTk5ZGZkIiwidXNlcl9pZCI6IjEifQ.1Noarr8RjEMC574b4LnjpBTEN_MVhb3zWZQzFKa_1mA`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Host request submitted successfully!");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(()=>{
    console.log(formData)
  },[formData])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
          alt="Host"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Become a Host
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Share your space, earn extra income, and welcome travelers from
            around the world.
          </p>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <div className="bg-pink-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <Home className="text-pink-500" size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Share Your Space
            </h3>

            <p className="text-gray-600">
              Rent out apartments, houses, rooms, or unique stays to travelers.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <BadgeCheck className="text-green-500" size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Verified Approval
            </h3>

            <p className="text-gray-600">
              We carefully review every host application to ensure quality and
              trust.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <ShieldCheck className="text-blue-500" size={32} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Secure Platform
            </h3>

            <p className="text-gray-600">
              Your listings and earnings are protected with our secure system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-bold mb-3 text-center">
            Host Application
          </h2>

          <p className="text-gray-600 text-center mb-10">
            Fill in your details for admin approval.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your city/location"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Hosting Experience
              </label>

              <textarea
                rows={4}
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Tell us about your hosting experience"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Why do you want to become a host?
              </label>

              <textarea
                rows={4}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell us why you want to join"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}