import React from "react";
import MenuList from "./MenuList";
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