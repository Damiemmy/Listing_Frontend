"use client";

import { motion } from "framer-motion";
import {
  MailCheck,
  Sparkles,
  ShieldCheck,
  Inbox,
  RefreshCcw,
} from "lucide-react";
import { useState } from "react";

export default function VerifyEmailPage() {
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);

    try {
      await fetch("http://127.0.0.1:8000/user/resend-verification/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Verification email resent!");
    } catch (err) {
      alert("Failed to resend email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pt-32 pb-20 px-6 overflow-hidden relative">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-pink-400/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-purple-400/30 blur-3xl" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl px-5 py-3 shadow-lg border border-white/40 mb-6">
            <Sparkles className="text-pink-500" size={18} />
            <span className="text-sm font-semibold text-gray-700">
              Secure Onboarding Process
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900">
            Check Your
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Email Inbox ✉️
            </span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-600 max-w-2xl">
            We’ve sent a verification link to your email.
            Open your inbox and click the link to activate your account and start using
            <span className="font-bold text-pink-500"> Book Me.</span>
          </p>

          <div className="mt-10 space-y-5">

            {[
              "Secure account activation via email link",
              "Protects your account from unauthorized access",
              "Unlock bookings, hosting & dashboards",
              "Fast and simple one-click verification",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4"
              >
                <div className="h-11 w-11 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                  <ShieldCheck className="text-pink-500" size={20} />
                </div>

                <p className="text-gray-700 font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* FLOATING CARD */}
          <div className="absolute -top-6 -right-6 hidden md:flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-2xl">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
              <MailCheck className="text-white" size={22} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Email Sent
              </h3>
              <p className="text-sm text-gray-500">
                Check your inbox now
              </p>
            </div>
          </div>

          {/* MAIN CARD */}
          <div className="rounded-[45px] border border-white/30 bg-white/70 backdrop-blur-2xl p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[35px] bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_15px_40px_rgba(236,72,153,0.45)]"
            >
              <Inbox className="text-white" size={55} />
            </motion.div>

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Email Sent Successfully
              </h2>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                Please check your email inbox and click the verification link to activate your account.
              </p>
            </div>

            {/* RESEND BUTTON (SAFE CTA) */}
            <motion.button
              onClick={handleResend}
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 w-full rounded-2xl bg-gray-900 px-8 py-5 text-lg font-bold text-white flex items-center justify-center gap-3"
            >
              <RefreshCcw size={20} />
              {loading ? "Resending..." : "Resend Email"}
            </motion.button>

            <p className="mt-8 text-center text-sm leading-7 text-gray-400">
              Didn’t receive the email? Check spam or wait a few minutes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}