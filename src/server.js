
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products data
const products = [
  {
    id: 1,
    name: "Frontend Small Projects",
    price: "₹49"
  },
  {
    id: 2,
    name: "Role-based Frontend Projects",
    price: "₹149"
  },
  {
    id: 3,
    name: "MERN Stack Project",
    price: "₹449"
  },
  {
    id: 4,
    name: "Role-based Advance MERN Stack",
    price: "₹999"
  },
  {
    id: 5,
    name: "Fully SaaS Projects",
    price: "₹2999"
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Product API is running successfully!");
});

// Get all products
app.get("/products", (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
});

// Get a single product by ID
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
