
// Local product data (can be swapped with API)
export const products = [
  { id: 1, title: "Fjällräven Laptop Backpack", price: 109.95, image: "https://i.dummyjson.com/data/products/1/3.jpg", category:"bags" },
  { id: 2, title: "Mens Casual Henley T-Shirt", price: 22.3, image: "https://i.dummyjson.com/data/products/2/2.jpg", category:"shirts" },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, image: "https://i.dummyjson.com/data/products/3/1.jpg", category:"jackets" },
  { id: 4, title: "Mens Slim Fit T-Shirts", price: 15.99, image: "https://i.dummyjson.com/data/products/2/3.jpg", category:"shirts" },
  { id: 5, title: "Blue V-Neck Full Sleeve", price: 18.99, image: "https://i.dummyjson.com/data/products/3/2.jpg", category:"shirts" },
  { id: 6, title: "Analog Watch Classic", price: 65.0, image: "https://i.dummyjson.com/data/products/61/1.jpg", category:"watch" },
  { id: 7, title: "Wireless Headphones", price: 45.0, image: "https://i.dummyjson.com/data/products/61/2.jpg", category:"electronics" },
  { id: 8, title: "Leather Wallet Brown", price: 19.5, image: "https://i.dummyjson.com/data/products/64/2.jpg", category:"accessories" }
];
const filtered = products.filter(p => p.category === selectedCategory);
export const getProductsByCategory = (selectedCategory) => {
  return products.filter(p => p.category === selectedCategory);
};