// import salad from 'Assets/salad.png'
// import hotpot from 'Assets/hot-pot.png'

const restaurantData = [
  {
    id: 1,
    name: "The Spicy House",
    address: "123 Main Street",
    cuisine: "Indian",
    rating: 4.5,
    reviews: 230,
    image: "",
    menu: [
      {
        id: 1,
        name: "Butter Chicken",
        description: "Tender chicken cooked in a creamy tomato sauce",
        price: 12.99,
      },
      {
        id: 2,
        name: "Vegetable Biryani",
        description: "Rice cooked with mixed vegetables and spices",
        price: 9.99,
      },
      {
        id: 3,
        name: "Garlic Naan",
        description: "Indian bread topped with garlic",
        price: 2.99,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Time",
    address: "456 Oak Street",
    cuisine: "Italian",
    rating: 4.0,
    reviews: 150,
    image: "",
    menu: [
      {
        id: 4,
        name: "Margherita Pizza",
        description: "Fresh mozzarella and tomato sauce",
        price: 14.99,
      },
      {
        id: 5,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni and tomato sauce",
        price: 16.99,
      },
      {
        id: 6,
        name: "Garlic Knots",
        description: "Baked knots of garlic and dough",
        price: 3.99,
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Palace",
    address: "789 Maple Street",
    cuisine: "Japanese",
    rating: 4.2,
    reviews: 180,
    image: "https://example.com/images/sushi-palace.jpg",
    menu: [
      {
        id: 7,
        name: "California Roll",
        description: "Crab, avocado, and cucumber",
        price: 9.99,
      },
      {
        id: 8,
        name: "Spicy Tuna Roll",
        description: "Tuna and spicy mayo",
        price: 11.99,
      },
      {
        id: 9,
        name: "Miso Soup",
        description: "Traditional Japanese soup",
        price: 2.99,
      },
    ],
  },
];

module.exports = restaurantData;
