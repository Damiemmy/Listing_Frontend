"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Search,
  SlidersHorizontal,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

import Categories from "./Category";
import { useNavigate } from "react-router-dom";

export default function ListingsPage() {
  /*
    ============================================
    STATES
    ============================================
  */

  const [listings, setListings] = useState([]);

  const [search, setSearch] = useState("");

  const [sortPrice, setSortPrice] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const listingsPerPage = 6;

  /*
    ============================================
    FETCH LISTINGS
    ============================================
  */
  const navigate=useNavigate()
  
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

      setListings(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  /*
    ============================================
    FILTERS
    ============================================
  */

  const filteredListings = useMemo(() => {
    let filtered = [...listings];

    // SEARCH
    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category?.name === selectedCategory
      );
    }

    // PRICE SORTING
    if (sortPrice === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sortPrice === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [listings, search, sortPrice, selectedCategory]);

  /*
    ============================================
    PAGINATION
    ============================================
  */

  const totalPages = Math.ceil(
    filteredListings.length / listingsPerPage
  );

  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );

  /*
    ============================================
    CATEGORIES
    ============================================
  */

  const categories = [
    "All",
    "Apartments",
    "Beach",
    "Cabins",
    "Luxury",
    "Camping",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-28">

      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-[40px] p-10 md:p-16 text-white shadow-2xl">

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Discover Amazing Places
            </h1>

            <p className="text-lg text-pink-100 max-w-2xl">
              Explore premium stays, luxury apartments,
              beach resorts, cabins, and unforgettable
              experiences around the world.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CATEGORIES */}
      {/* ========================================= */}

      <Categories />

      {/* ========================================= */}
      {/* FILTER BAR */}
      {/* ========================================= */}

      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-3xl shadow-lg p-5 flex flex-col lg:flex-row gap-5 items-center justify-between">

            {/* SEARCH */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 w-full lg:w-[40%]">
              <Search className="text-gray-400" />

              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none w-full"
              />
            </div>

            {/* CATEGORY FILTER */}
            <div className="flex overflow-x-auto gap-3 w-full lg:w-auto">

              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-3 rounded-2xl whitespace-nowrap transition font-medium ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* SORT */}
            <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3">

              <SlidersHorizontal size={18} />

              <select
                value={sortPrice}
                onChange={(e) => setSortPrice(e.target.value)}
                className="outline-none bg-transparent"
              >
                <option value="">
                  Sort Price
                </option>

                <option value="low-high">
                  Low to High
                </option>

                <option value="high-low">
                  High to Low
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* LISTINGS GRID */}
      {/* ========================================= */}

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {paginatedListings.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                {/* IMAGE */}
                <div onClick={()=> navigate(`/listing/${item.id}`)} className="relative overflow-hidden">

                  <img
                    src={item.images}
                    className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold shadow">
                    ${item.price}/night
                  </div>
                </div>

                {/* CONTENT */}
                <div onClick={()=> navigate(`/listing/${item.id}`)} className="p-6">

                  <div className="flex items-center justify-between mb-3">

                    <h2 className="text-2xl font-bold line-clamp-1">
                      {item.title}
                    </h2>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={18} fill="currentColor" />

                      <span className="font-semibold text-gray-700">
                        4.8
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 line-clamp-2 mb-5">
                    {item.details}
                  </p>

                  <button
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
                  >
                    Book Property
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================= */}
          {/* PAGINATION */}
          {/* ========================================= */}

          <div className="flex items-center justify-center gap-4 mt-16">

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50"
            >
              <ChevronLeft />
            </button>

            <div className="flex items-center gap-3">

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`w-12 h-12 rounded-full font-semibold transition ${
                    currentPage === index + 1
                      ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                      : "bg-white shadow"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}