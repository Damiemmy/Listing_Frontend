"use client";

import { motion } from "framer-motion";
import { Search, Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Category";

export default function Home() {
  const [listing, setListing] = useState([]);

  const navigate = useNavigate();

  /*
    ============================================
    FETCH LISTINGS
    ============================================
  */

  const fetchListings = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/listings/",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      console.log("Listings", json);

      setListing(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  /*
    ============================================
    FEATURE IMAGES
    ============================================
  */

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  /*
    ============================================
    TESTIMONIALS
    ============================================
  */

  const testimonials = [
    {
      name: "Sarah Johnson",
      review:
        "This platform completely changed how I travel. Beautiful stays and smooth booking experience.",
    },
    {
      name: "Michael James",
      review:
        "Hosting my apartment here became a great source of extra income for me.",
    },
    {
      name: "Amanda Lee",
      review:
        "The user experience is premium. Everything feels modern and easy to use.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="absolute inset-0 w-full h-full object-cover"
          alt="hero"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find your next <br /> perfect stay
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover luxury apartments, beach houses,
            cabins, and unforgettable experiences.
          </p>

          <div className="bg-white rounded-full flex items-center p-2 max-w-xl mx-auto shadow-2xl">
            <input
              className="flex-1 px-4 py-2 outline-none text-black rounded-full"
              placeholder="Search destinations"
            />

            <button className="bg-pink-500 hover:bg-pink-600 transition text-white p-3 rounded-full">
              <Search />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* CATEGORIES */}
      {/* ========================================= */}

      <Categories />

      {/* ========================================= */}
      {/* EXPLORE NEARBY */}
      {/* ========================================= */}

      <section className="py-20 px-6 max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">
            Explore Nearby
          </h2>

          <button
            onClick={() => navigate("/listings")}
            className="text-pink-500 font-semibold hover:underline"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={image}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold">
                  Beautiful Location
                </h3>

                <p className="text-gray-600 mt-2">
                  Stay in breathtaking places around the world.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* FEATURED LISTINGS */}
      {/* ========================================= */}

      <section className="py-20 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              Featured Stays
            </h2>

            <button
              onClick={() => navigate("/listings")}
              className="text-pink-500 font-semibold hover:underline"
            >
              Browse Listings
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {listing.slice(0, 6).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.images}
                  className="w-full h-60 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <div className="flex items-center mt-2 text-yellow-500">
                    <Star size={16} />

                    <span className="ml-1 text-gray-700">
                      4.8
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">
                    ${item.price} / night
                  </p>

                  <button
                    className="mt-5 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* EXPERIENCES */}
      {/* ========================================= */}

      <section className="bg-black text-white py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Unique Experiences
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Explore local adventures, hidden gems,
              cultural experiences, and unforgettable
              moments hosted by amazing people.
            </p>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Experiences
            </button>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
            className="rounded-3xl shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>

      {/* ========================================= */}
      {/* BECOME HOST CTA */}
      {/* ========================================= */}

      <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-24 px-6">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-6">
            Become a Host
          </h2>

          <p className="text-xl text-pink-100 mb-10">
            Earn money by sharing your extra space
            and welcoming travelers from around the world.
          </p>

          <button
            onClick={() => navigate("/become-host/")}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-2xl hover:scale-105 transition"
          >
            Get Started
          </button>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* TESTIMONIALS */}
      {/* ========================================= */}

      <section className="py-24 px-6 bg-gray-100">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            What People Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <Quote
                  className="text-pink-500 mb-5"
                  size={40}
                />

                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>

                <h3 className="font-bold text-lg">
                  {testimonial.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}