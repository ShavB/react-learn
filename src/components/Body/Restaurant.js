import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";

const restaurantList = require("../../../Data/RestaurantData");

const Body = () => {
  const [restaurantSearchData, setRestaurantSearchData] =
    useState(restaurantList);
  
  function filteredData(data) {
    if(data === undefined)
      setRestaurantSearchData(restaurantList);
    else  
      setRestaurantSearchData(data);
  }

  return (
    <>
      <SearchBar filteredData={filteredData} />
      {console.log}
      <div className="body-container">
        {restaurantSearchData.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
