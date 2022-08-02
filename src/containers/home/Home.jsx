import React, { useEffect, useState } from "react";
import Footer from "../../components/Footers";
import Navbar from "../../components/Navbar";
import MenuList from "./MenuList";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <MenuList menus={menus} /> */}
            <Footer />
        </div>

    )
}

export default Home