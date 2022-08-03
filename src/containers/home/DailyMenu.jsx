import React, { useEffect, useState } from "react";
import ListCategory from "../../components/ListCategory";

const DailyMenu = () => {
    return (
        <div>
            <ListCategory id="1" title="Breakfast" url="breakfast" />
            <ListCategory id="2" title="Beef" url="beef" />
            <ListCategory id="3" title="Chicken" url="chicken" />
        </div>
    )
}

export default DailyMenu