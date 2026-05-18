// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { CheckCircle, XCircle, Loader2, Mail } from "lucide-react";

// export default function EmailSuccessPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
//   const [message, setMessage] = useState("");
//   const [resending, setResending] = useState(false);

//   const uid = searchParams.get("uid");
//   const token = searchParams.get("token");

//   // 🔐 VERIFY EMAIL ON LOAD
//   useEffect(() => {
//     const verifyEmail = async () => {
//       if (!uid || !token) {
//         setStatus("error");
//         setMessage("Invalid verification link.");
//         return;
//       }

//       try {
//         const res = await fetch(
//           `http://127.0.0.1:8000/user/verify-token/${uid}/${token}/`
//         );

//         const data = await res.json();

//         if (res.ok) {
//           setStatus("success");
//           setMessage(data.message || "Your account has been verified successfully.");
//         } else {
//           setStatus("error");
//           setMessage(data.message || "Verification failed or link expired.");
//         }
//       } catch (err) {
//         setStatus("error");
//         setMessage("Network error. Please try again.");
//       }
//     };

//     verifyEmail();
//   }, [uid, token]);

//   // 🔁 RESEND EMAIL (SAFE VERSION)
//   const handleResend = async () => {
//     setResending(true);

//     try {
//       await fetch("http://127.0.0.1:8000/user/resend-verification/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ uid }),
//       });

//       alert("Verification email resent!");
//     } catch (err) {
//       alert("Failed to resend email");
//     } finally {
//       setResending(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-6">

//       <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-white/40">

//         {/* LOADING STATE */}
//         {status === "loading" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex flex-col items-center"
//           >
//             <Loader2 className="animate-spin text-pink-500" size={50} />
//             <h2 className="mt-6 text-xl font-bold">Verifying your account...</h2>
//             <p className="text-gray-500 mt-2">Please wait</p>
//           </motion.div>
//         )}

//         {/* SUCCESS STATE */}
//         {status === "success" && (
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="flex flex-col items-center"
//           >
//             <CheckCircle className="text-green-500" size={70} />

//             <h2 className="mt-6 text-2xl font-bold text-gray-900">
//               Email Verified!
//             </h2>

//             <p className="text-gray-600 mt-3">{message}</p>

//             <button
//               onClick={() => router.push("/login")}
//               className="mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold"
//             >
//               Go to Login
//             </button>
//           </motion.div>
//         )}

//         {/* ERROR STATE */}
//         {status === "error" && (
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="flex flex-col items-center"
//           >
//             <XCircle className="text-red-500" size={70} />

//             <h2 className="mt-6 text-2xl font-bold text-gray-900">
//               Verification Failed
//             </h2>

//             <p className="text-gray-600 mt-3">{message}</p>

//             <button
//               onClick={handleResend}
//               disabled={resending}
//               className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold"
//             >
//               {resending ? "Resending..." : "Resend Email"}
//             </button>

//             <button
//               onClick={() => router.push("/register")}
//               className="mt-3 text-sm text-gray-500 underline"
//             >
//               Back to Register
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";

export default function SuccessEmailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  const uidb64 = searchParams.get("uidb64");
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!uidb64 || !token) {
        setStatus("error");
        setMessage("Invalid verification link.");
        return;
      }

      try {
        const res = await fetch(
          `http://127.0.0.1:8000/user/verify-token/${uidb64}/${token}`
        );

        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Your account is verified successfully.");
        } else {
          setStatus("error");
          setMessage(data.error || "Verification failed or expired link.");
        }
      } catch (err) {
        setStatus("error");
        setMessage("Network error. Please try again.");
      }
    };

    verifyEmail();
  }, [uidb64, token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-6">

      <AnimatePresence mode="wait">

        {/* LOADING STATE */}
        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
          >
            <Loader2 className="animate-spin text-pink-500 mx-auto" size={60} />

            <h2 className="mt-6 text-xl font-bold text-gray-900">
              Verifying your account...
            </h2>

            <p className="text-gray-500 mt-2">
              Please wait while we confirm your email
            </p>
          </motion.div>
        )}

        {/* SUCCESS STATE */}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-md w-full"
          >
            <CheckCircle className="text-green-500 mx-auto" size={80} />

            <h2 className="mt-6 text-3xl font-black text-gray-900">
              Email Verified!
            </h2>

            <p className="text-gray-600 mt-3">
              {message}
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/login")}
              className="mt-8 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Go to Login
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        )}

        {/* ERROR STATE */}
        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-md w-full"
          >
            <XCircle className="text-red-500 mx-auto" size={80} />

            <h2 className="mt-6 text-3xl font-black text-gray-900">
              Verification Failed
            </h2>

            <p className="text-gray-600 mt-3">
              {message}
            </p>

            <div className="mt-8 space-y-3">

              <button
                onClick={() => navigate("/register")}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold"
              >
                Back to Register
              </button>

              <button
                onClick={() => navigate("/login")}
                className="w-full text-gray-500 underline text-sm"
              >
                Go to Login
              </button>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}