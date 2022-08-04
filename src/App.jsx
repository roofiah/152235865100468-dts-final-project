import React from "react";
import Footer from "./components/Footers";
import NavHeader from "./components/Navbar/NavHeader";
import NavContent from "./components/Navbar/NavContent";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <NavHeader />
            <NavContent />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App