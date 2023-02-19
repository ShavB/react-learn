import RestaurantCard from "./RestaurantCard";

const restaurantList = require("../../../Data/Restaurants"); 

const Body = () => {
  return (
    <div className="body-container">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

export default Body;
