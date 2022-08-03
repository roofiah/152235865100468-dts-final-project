import React, { useEffect, useState } from "react";
import Footer from "../../components/Footers";
import Navbar from "../../components/Navbar";
import MenuList from "./MenuList";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <MenuList url="seafood" />
        </div>

    )
}

export default Home