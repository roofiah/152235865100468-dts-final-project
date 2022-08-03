import React from "react";
import Footer from "./components/Footers";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App