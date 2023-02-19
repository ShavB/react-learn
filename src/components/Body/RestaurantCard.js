const RestaurantCard = ({name, cuisine, reviews}) => {
    return(
      <div className="restaurant-card">
        <img src="" alt="restaurant-logo" />
        <h2>{name}</h2>
        <h3>{cuisine}</h3>
        <h4>{reviews}</h4>
      </div>
    );
  };

  export default RestaurantCard;