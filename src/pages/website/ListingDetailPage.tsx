"use client";

import {
  Star,
  MapPin,
  Wifi,
  Car,
  Tv,
  Bath,
  BedDouble,
  Users,
  Heart,
  Share2,
} from "lucide-react";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function ListingDetailPage() {
  /*
    ============================================
    ROUTE PARAM
    ============================================
  */

  const { id } = useParams();

  /*
    ============================================
    STATES
    ============================================
  */

  const [listing, setListing] = useState(null);

  const [loading, setLoading] = useState(true);

  /*
    ============================================
    FETCH PROPERTY
    ============================================
  */

  const fetchProperty = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/listings/${id}/`
      );

      const json = await response.json();

      console.log("PROPERTY", json);

      setListing(json);

      setLoading(false);
    } catch (err) {
      console.log(err.message);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  /*
    ============================================
    LOADING UI
    ============================================
  */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading Property...
      </div>
    );
  }

  /*
    ============================================
    AMENITIES
    ============================================
  */

  const amenities = [
    {
      icon: <Wifi />,
      title: "Free Wifi",
    },
    {
      icon: <Car />,
      title: "Free Parking",
    },
    {
      icon: <Tv />,
      title: "Smart TV",
    },
    {
      icon: <Bath />,
      title: "Luxury Bathroom",
    },
    {
      icon: <BedDouble />,
      title: "King Size Bed",
    },
    {
      icon: <Users />,
      title: "4 Guests",
    },
  ];

  /*
    ============================================
    REVIEWS
    ============================================
  */

  const reviews = [
    {
      name: "Sarah Johnson",
      comment:
        "Absolutely beautiful property. Everything was luxurious and clean.",
    },
    {
      name: "Daniel James",
      comment:
        "Amazing location and smooth booking process. Highly recommended.",
    },
    {
      name: "Amanda Lee",
      comment:
        "One of the best stays I've ever experienced.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-28">

      {/* ========================================= */}
      {/* IMAGE GALLERY */}
      {/* ========================================= */}

      <section className="px-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {listing?.title}
              </h1>

              <div className="flex items-center gap-4 mt-3 text-gray-600">

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star
                    size={18}
                    fill="currentColor"
                  />

                  <span className="font-semibold text-gray-700">
                    4.8
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <MapPin size={18} />

                  <span>
                    Abuja, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="hidden md:flex items-center gap-4">

              <button className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
                <Heart />
              </button>

              <button className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
                <Share2 />
              </button>
            </div>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <motion.img
              whileHover={{ scale: 1.02 }}
              src={listing?.images}
              className="w-full h-[500px] object-cover rounded-[30px] shadow-xl"
            />

            <div className="grid grid-cols-2 gap-5">

              {[1, 2, 3, 4].map((item) => (
                <motion.img
                  key={item}
                  whileHover={{ scale: 1.03 }}
                  src={listing?.images}
                  className="w-full h-[240px] object-cover rounded-[30px] shadow-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CONTENT SECTION */}
      {/* ========================================= */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            {/* DESCRIPTION */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg mb-10">

              <h2 className="text-3xl font-bold mb-6">
                About this property
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {listing?.details}
              </p>
            </div>

            {/* AMENITIES */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg mb-10">

              <h2 className="text-3xl font-bold mb-8">
                Amenities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {amenities.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl"
                  >
                    <div className="text-pink-500">
                      {item.icon}
                    </div>

                    <span className="font-medium">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* REVIEWS */}
            <div className="bg-white rounded-[30px] p-8 shadow-lg">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                  Reviews
                </h2>

                <div className="flex items-center gap-2 text-yellow-500">

                  <Star
                    fill="currentColor"
                  />

                  <span className="font-semibold text-gray-700">
                    4.8 · 120 reviews
                  </span>
                </div>
              </div>

              <div className="space-y-6">

                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="border border-gray-100 rounded-3xl p-6"
                  >
                    <h3 className="font-bold text-lg mb-2">
                      {review.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {review.comment}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* BOOKING CARD */}
          <div>

            <div className="sticky top-32 bg-white rounded-[35px] p-8 shadow-2xl border border-gray-100">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <h2 className="text-4xl font-bold">
                    ${listing?.price}
                  </h2>

                  <span className="text-gray-500">
                    per night
                  </span>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">

                  <Star
                    size={18}
                    fill="currentColor"
                  />

                  <span className="font-semibold text-gray-700">
                    4.8
                  </span>
                </div>
              </div>

              {/* BOOKING FORM */}
              <div className="space-y-5">

                <div>
                  <label className="font-semibold block mb-2">
                    Check In
                  </label>

                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Check Out
                  </label>

                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-2">
                    Guests
                  </label>

                  <select
                    className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-pink-500"
                  >
                    <option>
                      1 Guest
                    </option>

                    <option>
                      2 Guests
                    </option>

                    <option>
                      3 Guests
                    </option>

                    <option>
                      4 Guests
                    </option>
                  </select>
                </div>

                {/* RESERVATION BUTTON */}
                <button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-5 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition shadow-xl"
                >
                  Reserve Now
                </button>

                <p className="text-center text-gray-500 text-sm">
                  You won’t be charged yet
                </p>
              </div>

              {/* PRICE BREAKDOWN */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    ${listing?.price} × 5 nights
                  </span>

                  <span className="font-semibold">
                    ${listing?.price * 5}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    Cleaning fee
                  </span>

                  <span className="font-semibold">
                    $40
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    Service fee
                  </span>

                  <span className="font-semibold">
                    $25
                  </span>
                </div>

                <div className="flex items-center justify-between text-xl font-bold pt-4 border-t border-gray-200">
                  <span>Total</span>

                  <span>
                    ${(listing?.price * 5) + 65}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}