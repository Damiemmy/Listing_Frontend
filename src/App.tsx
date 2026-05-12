
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Register from "./components/register";
// import PrivateRoute from "./PrivateRoute";

// /*
// ============================================
// PUBLIC PAGES
// ============================================
// */

// import Home from "./components";
// import BecomeHostPage from "./components/becomehost";
// import Login from "./components/login";
// import ListingsPage from "./components/listings";
// import PropertyDetailPage from "./components/listingdetails";

// /*
// ============================================
// DASHBOARDS
// ============================================
// */

// import DashboardRedirect from "./pages/DashboardRedirect";
// import AdminDashboard from "./pages/AdminDashboard";
// import HostDashboard from "./pages/HostDashboard";
// import UserDashboard from "./pages/UserDashboard";

// /*
// ============================================
// LAYOUT COMPONENTS
// ============================================
// */

// import Header from "./components/header";
// import Footer from "./components/footer";

// /*
// ============================================
// AUTH CONTEXT
// ============================================
// */
// import AuthProvider from "./context/AuthContext";

// const App = () => {
  

//   return (
//     <AuthProvider>

//       {/* GLOBAL HEADER */}
//       <Header/>
      
      

//       <Routes>

//         {/* ================================= */}
//         {/* PUBLIC ROUTES */}
//         {/* ================================= */}

//         <Route path="/" element={<Home />} />

//         <Route
//           path="/become-host"
//           element={<BecomeHostPage />}
//         />

//         <Route
//           path="/login"
//           element={<Login />}
//         />
//         <Route
//           path="/register"
//           element={<Register/>}
//         />

//         <Route
//           path="/listings"
//           element={<ListingsPage />}
//         />

//         <Route
//           path="/listing/:id"
//           element={<PropertyDetailPage />}
//         />

//         {/* ================================= */}
//         {/* DASHBOARD ROUTES */}
//         {/* ================================= */}

//         <Route
//           path="/dashboard/user"
//           element={<UserDashboard />}
//         />

//         <Route
//           path="/dashboard/host"
//           element={<HostDashboard />}
//         />

//         <Route
//           path="/dashboard/admin"
//           element={<AdminDashboard />}
//         />
//         <Route
//           path="/dashboard"
//           element={<PrivateRoute><DashboardRedirect/></PrivateRoute>}
//         />

//       </Routes>

//       {/* GLOBAL FOOTER */}
//       <Footer />

//     </AuthProvider>
//   );
// };

// export default App; 
























import React from "react";

import { Routes, Route } from "react-router-dom";

import Register from "./components/register";

import PrivateRoute from "./PrivateRoute";

/*
============================================
PUBLIC PAGES
============================================
*/

import Home from "./components";
import BecomeHostPage from "./components/becomehost";
import Login from "./components/login";
import ListingsPage from "./components/listings";
import PropertyDetailPage from "./components/listingdetails";

/*
============================================
DASHBOARDS
============================================
*/

import DashboardRedirect from "./pages/DashboardRedirect";
import AdminDashboard from "./pages/AdminDashboard";
import HostDashboard from "./pages/HostDashboard";
import UserDashboard from "./pages/UserDashboard";

/*
============================================
LAYOUTS
============================================
*/

import WebsiteLayout from "./layouts/WebsiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";

/*
============================================
AUTH CONTEXT
============================================
*/

import AuthProvider from "./context/AuthContext";
import VerifyEmailPage from "./components/VerifyEmailPage";
import EmailSuccessPage from "./components/EmailSuccessPage";

const App = () => {
  return (
    <AuthProvider>

      <Routes>

        {/* ================================= */}
        {/* WEBSITE LAYOUT */}
        {/* ================================= */}

        <Route element={<WebsiteLayout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/become-host"
            element={<BecomeHostPage />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/verify-email"
            element={<VerifyEmailPage/>}
          />
          <Route
            path="/success-email"
            element={<EmailSuccessPage/>}
          />

          <Route
            path="/listings"
            element={<ListingsPage />}
          />

          <Route
            path="/listing/:id"
            element={<PropertyDetailPage />}
          />

        </Route>

        {/* ================================= */}
        {/* DASHBOARD LAYOUT */}
        {/* ================================= */}

        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<DashboardRedirect />}
          />

          <Route
            path="/dashboard/user"
            element={<UserDashboard />}
          />

          <Route
            path="/dashboard/host"
            element={<HostDashboard />}
          />

          <Route
            path="/dashboard/admin"
            element={<AdminDashboard />}
          />

        </Route>

      </Routes>

    </AuthProvider>
  );
};

export default App;