import React from "react";
import { useParams } from 'react-router-dom';
import MenuList from "./MenuList";

const CategoryDetail = () => {
    let { value } = useParams();
    return (
        <div>
            <MenuList url={value} />
        </div>
    )
}

export default CategoryDetail