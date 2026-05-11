import {
  LayoutDashboard,
  House,
  Calendar,
  Heart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const links = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Properties",
    icon: <House />,
  },
  {
    title: "Reservations",
    icon: <Calendar />,
  },
  {
    title: "Favorites",
    icon: <Heart />,
  },
  {
    title: "Users",
    icon: <Users />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
];


export default function Sidebar() {
  const{user}=useAuth()
  
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="hidden lg:flex flex-col justify-between w-[280px] min-h-screen bg-white/60 backdrop-blur-3xl border-r border-white/20 shadow-2xl px-6 py-10"
    >
      <div>
        <h1 className="text-4xl font-black mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          BookMe
        </h1>

        <div className="space-y-5">
          <motion.div
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer bg-white shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition duration-300"
          >
            <LayoutDashboard />

            <span className="font-semibold text-lg">
              Dashboard
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer bg-white shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition duration-300"
          >
            <House />

            <span className="font-semibold text-lg">
              Properties
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer bg-white shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition duration-300"
          >
            <Calendar/>

            <span className="font-semibold text-lg">
              Reservations
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer bg-white shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition duration-300"
          >
            <Heart/>

            <span className="font-semibold text-lg">
              Favourites
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer bg-white shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition duration-300"
          >
            <Users/>

            <span className="font-semibold text-lg">
              Users
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer bg-white shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition duration-300"
          >
            <Settings/>

            <span className="font-semibold text-lg">
              Settings
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center my-5 gap-4 px-5 py-4 rounded-2xl bg-red-500 text-white shadow-xl cursor-pointer"
      >
        <LogOut />

        <span className="font-semibold text-lg">
          Logout
        </span>
      </motion.div>
    </motion.div>
  );
}