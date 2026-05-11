import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-lg"
    >
      <div className="flex items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-3 shadow-lg w-[350px]">
          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="outline-none px-3 bg-transparent w-full"
          />
        </div>

        <div className="flex items-center gap-5">
          <div className="relative bg-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition duration-300">
            <Bell />

            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>

          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-12 h-12 rounded-full border-4 border-pink-500 shadow-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}