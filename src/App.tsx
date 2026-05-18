
// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Register from "./components/register";
// // import PrivateRoute from "./PrivateRoute";

// // /*
// // ============================================
// // PUBLIC PAGES
// // ============================================
// // */

// // import Home from "./components";
// // import BecomeHostPage from "./components/becomehost";
// // import Login from "./components/login";
// // import ListingsPage from "./components/listings";
// // import PropertyDetailPage from "./components/listingdetails";

// // /*
// // ============================================
// // DASHBOARDS
// // ============================================
// // */

// // import DashboardRedirect from "./pages/DashboardRedirect";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import HostDashboard from "./pages/HostDashboard";
// // import UserDashboard from "./pages/UserDashboard";

// // /*
// // ============================================
// // LAYOUT COMPONENTS
// // ============================================
// // */

// // import Header from "./components/header";
// // import Footer from "./components/footer";

// // /*
// // ============================================
// // AUTH CONTEXT
// // ============================================
// // */
// // import AuthProvider from "./context/AuthContext";

// // const App = () => {
  

// //   return (
// //     <AuthProvider>

// //       {/* GLOBAL HEADER */}
// //       <Header/>
      
      

// //       <Routes>

// //         {/* ================================= */}
// //         {/* PUBLIC ROUTES */}
// //         {/* ================================= */}

// //         <Route path="/" element={<Home />} />

// //         <Route
// //           path="/become-host"
// //           element={<BecomeHostPage />}
// //         />

// //         <Route
// //           path="/login"
// //           element={<Login />}
// //         />
// //         <Route
// //           path="/register"
// //           element={<Register/>}
// //         />

// //         <Route
// //           path="/listings"
// //           element={<ListingsPage />}
// //         />

// //         <Route
// //           path="/listing/:id"
// //           element={<PropertyDetailPage />}
// //         />

// //         {/* ================================= */}
// //         {/* DASHBOARD ROUTES */}
// //         {/* ================================= */}

// //         <Route
// //           path="/dashboard/user"
// //           element={<UserDashboard />}
// //         />

// //         <Route
// //           path="/dashboard/host"
// //           element={<HostDashboard />}
// //         />

// //         <Route
// //           path="/dashboard/admin"
// //           element={<AdminDashboard />}
// //         />
// //         <Route
// //           path="/dashboard"
// //           element={<PrivateRoute><DashboardRedirect/></PrivateRoute>}
// //         />

// //       </Routes>

// //       {/* GLOBAL FOOTER */}
// //       <Footer />

// //     </AuthProvider>
// //   );
// // };

// // export default App; 
























// import React from "react";

// import { Routes, Route } from "react-router-dom";

// import Register from "./pages/website/register";

// import PrivateRoute from "./routes/PrivateRoute";

// /*
// ============================================
// PUBLIC PAGES
// ============================================
// */

// import Home from "./pages/website/home";
// import BecomeHostPage from "./pages/website/BecomeHostPage";
// import Login from "./pages/website/login";
// import ListingsPage from "./pages/website/ListingsPage";
// import ListingDetailPage from "./pages/website/ListingDetailPage";


// /*
// ============================================
// DASHBOARDS
// ============================================
// */

// import DashboardRedirect from "./pages/dashboard/redirect/DashboardRedirect";
// import AdminDashboard from "./pages/dashboard/admin/DashboardHome";
// import HostDashboard from "./pages/dashboard/host/DashboardHome";
// import UserDashboard from "./pages/dashboard/user/DashboardHome";

// /*
// ============================================
// LAYOUTS
// ============================================
// */

// import WebsiteLayout from "./layouts/WebsiteLayout";
// import DashboardLayout from "./layouts/DashboardLayout";

// /*
// ============================================
// AUTH CONTEXT
// ============================================
// */

// import AuthProvider from "./context/AuthContext";
// import VerifyEmailPage from "./pages/website/VerifyEmailPage";
// import SuccessEmailPage from "./pages/website/EmailSuccessPage";

// const App = () => {
//   return (
//     <AuthProvider>

//       <Routes>

//         {/* ================================= */}
//         {/* WEBSITE LAYOUT */}
//         {/* ================================= */}

//         <Route element={<WebsiteLayout />}>

//           <Route path="/" element={<Home />} />

//           <Route
//             path="/become-host"
//             element={<BecomeHostPage />}
//           />

//           <Route
//             path="/login"
//             element={<Login />}
//           />

//           <Route
//             path="/register"
//             element={<Register />}
//           />
//           <Route
//             path="/verify-email"
//             element={<VerifyEmailPage/>}
//           />
//           <Route
//             path="/success-email"
//             element={<SuccessEmailPage/>}
//           />

//           <Route
//             path="/listings"
//             element={<ListingsPage />}
//           />

//           <Route
//             path="/listing/:id"
//             element={<ListingDetailPage />}
//           />

//         </Route>

//         {/* ================================= */}
//         {/* DASHBOARD LAYOUT */}
//         {/* ================================= */}

//         <Route
//           element={
//             <PrivateRoute>
//               <DashboardLayout />
//             </PrivateRoute>
//           }
//         >

//           <Route
//             path="/dashboard"
//             element={<DashboardRedirect />}
//           />

//           <Route
//             path="/dashboard/user"
//             element={<UserDashboard />}
//           />

//           <Route
//             path="/dashboard/host"
//             element={<HostDashboard />}
//           />

//           <Route
//             path="/dashboard/admin"
//             element={<AdminDashboard />}
//           />

//         </Route>

//       </Routes>

//     </AuthProvider>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/*
============================================
AUTH
============================================
*/
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

/*
============================================
LAYOUTS
============================================
*/
import WebsiteLayout from "./layouts/WebsiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";

/*
============================================
WEBSITE PAGES
============================================
*/
import Home from "./pages/website/home";
import BecomeHostPage from "./pages/website/BecomeHostPage";
import Login from "./pages/website/login";
import Register from "./pages/website/register";
import ListingsPage from "./pages/website/ListingsPage";
import ListingDetailPage from "./pages/website/ListingDetailPage";
import VerifyEmailPage from "./pages/website/VerifyEmailPage";
import SuccessEmailPage from "./pages/website/EmailSuccessPage";

/*
============================================
DASHBOARD REDIRECT
============================================
*/
import DashboardRedirect from "./pages/dashboard/redirect/DashboardRedirect";

/*
============================================
ROLE DASHBOARDS (PAGES)
============================================
*/
import AdminDashboard from "./pages/dashboard/admin/DashboardHome";
import HostDashboard from "./pages/dashboard/host/DashboardHome";
import UserDashboard from "./pages/dashboard/user/DashboardHome";
import AdminProperties from "./pages/dashboard/admin/properties";

const App = () => {
  return (
    <AuthProvider>
      <Routes>

        {/* =========================================
            WEBSITE LAYOUT (PUBLIC + AUTH PAGES)
        ========================================= */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/become-host" element={<BecomeHostPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/success-email" element={<SuccessEmailPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listing/:id" element={<ListingDetailPage />} />
        </Route>


        {/* =========================================
            DASHBOARD LAYOUT (PROTECTED AREA)
        ========================================= */}
        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >

          {/* ROLE REDIRECT (SMART ENTRY POINT) */}
          <Route path="/dashboard" element={<DashboardRedirect />} />

          {/* USER DASHBOARD */}
          <Route path="/dashboard/user" element={<UserDashboard />} />

          {/* HOST DASHBOARD */}
          <Route path="/dashboard/host" element={<HostDashboard />} />

          {/* ADMIN DASHBOARD */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/properties" element={<AdminProperties />} />

          {/* OPTIONAL: fallback */}
          <Route path="/dashboard/*" element={<Navigate to="/dashboard" />} />

        </Route>

      </Routes>
    </AuthProvider>
  );
};

export default App;