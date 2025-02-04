import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthForm from "./pages/Auth/AuthForm";
import Footer from "./pages/Home/components/Footer";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Result from "./pages/Jobs/Search/Result";
import { RootState } from "./reducers";
import { Toaster } from "react-hot-toast";
import { Redirect } from "./pages/redirect";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import Dashboard from "./pages/Employer/Dashboard";
import PostJobs from "./pages/Employer/PostJob";

function App() {
  const { isLoggedIn, role, data } = useSelector(
    (state: RootState) => state.auth
  );
  // Role-based redirection
  const roleRedirect = (role: string) => {
    switch (role) {
      case "user":
        return <Home />;
      case "employer":
        return <Dashboard />; // Redirect to Employer Dashboard
      case "admin":
        return <AdminDashboard />; // Redirect to Admin Dashboard
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen w-screen max-h-full bg-global flex flex-col items-center px-2 justify-center overflow-x-hidden relative">
      <div className="w-full md:w-4/5 min-h-screen relative flex flex-col items-center justify-center">
        {isLoggedIn && <Navbar />} {/* Only show Navbar if logged in */}
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? roleRedirect(role) : <AuthForm />}
          />

          {/* Job Listing Routes */}
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<Result />} />

          {/* Redirect Route */}
          <Route path="/redirect" element={<Redirect />} />

          {/* Employer and Admin Routes - Protect these */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn && data.user.role === "employer" ? (
                <Dashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/post-job"
            element={
              isLoggedIn && role === "employer" ? (
                <PostJobs />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/*
          <Route
            path="/admin-dashboard"
            element={
              isLoggedIn && role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          /> */}

          {/* Catch-all Route for undefined paths */}
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </div>
  );
}

export default App;
