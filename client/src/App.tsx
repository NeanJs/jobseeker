import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthForm from "./pages/Auth/AuthForm";
import Footer from "./pages/Home/components/Footer";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Result from "./pages/Jobs/Search/Result";
import { RootState } from "./reducers";

function App() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen min-w-screen max-h-full bg-global flex felx-col items-start px-2 justify-center overflow-x-hidden">
      <div className="w-full md:w-4/5 h-full relative flex flex-col">
        {isLoggedIn && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <AuthForm />}
          />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<Result />} />
          <Route path="/" element={<Navigate to={"/"} replace={true} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
