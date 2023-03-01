import { useState } from "react";

const restaurantList = require("../../../Data/RestaurantData"); 

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filtered, setFilter] = useState();

    function handleSearchQuery(searchQuery){
        const filterData = restaurantList.filter((restaurant) =>
            restaurant.name.includes(searchQuery)
        );
        setFilter(filterData);
        props.filteredData(filtered);
    }

    return(
        <>
            <div className="search-bar">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button onClick={() => handleSearchQuery(searchQuery)} >Search</button>
            </div>
        </>
    );
}

export default SearchBar;