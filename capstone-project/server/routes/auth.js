const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Secret key for JWT - in production, use a proper secret from environment variables
const JWT_SECRET = "your-secret-key-here";

// Mock user database
let users = [
  { id: 1, username: "admin", password: "admin123" }, // No email field
];
let id = 2; // Starting ID for new users

// Sign up endpoint
router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Check if username already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(409).json({ error: "Username already exists" });
  }

  // Create new user (in a real app, hash the password!)
  const newUser = {
    id: id++,
    username,
    password, // WARNING: Store hashed passwords in production
  };

  users.push(newUser);

  // Return user data (excluding password)
  res.status(201).json({
    id: newUser.id,
    username: newUser.username,
  });
});

// Sign in endpoint - now returns JWT
router.post("/signin", (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Find user by username
  const user = users.find((u) => u.username === username);

  // Check credentials
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  // Create JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: "1h" } // Token expires in 1 hour
  );

  // Successful sign-in with token
  res.json({
    message: "Sign in successful",
    token: token,
    user: {
      id: user.id,
      username: user.username,
    },
  });
});

// Middleware to verify JWT
const verifyToken = async(req, res, next) => {

  await new Promise(resolve => setTimeout(resolve, 500)); // 1.5 seconds delay

  // Get token from header
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    // Add decoded user info to request object
    req.user = decoded;
    next();
  });
};

// Protected resource endpoint
router.get("/plant", verifyToken, (req, res) => {
  // If we get here, the token was valid
  res.json(plants);
});

router.get("/plant/:id", verifyToken, (req, res) => {
  const plantId = parseInt(req.params.id);
  const plant = plants.find(p => p.id === plantId);
  
  if (plant) {
    res.json(plant);
  } else {
    res.status(404).json({ message: "Plant not found" });
  }
});

// Add to cart endpoint - POST is the correct method
router.post("/cart/:id", verifyToken, (req, res) => { 
  const plantId = parseInt(req.params.id);

  const plant = plants.find(it=>it.id === plantId)

  const cartObject = {
    name: plant.name, 
    color: req.body.color,
    id: cartId++,
    price: plant.price,
    quantity: req.body.quantity,
    image: plant.images.find(it => it.color === req.body.color).src
  }

  cart.push(cartObject)
  res.json(cart)
  // Validation and logic...
});


router.get("/cart", verifyToken, (req, res) => { 
  res.json(cart)
});

// DELETE a cart
router.delete('/cart/:id', verifyToken,(req, res) => {
  const id = Number(req.params.id);
  cart = cart.filter(m => m.id !== id);
  res.json(cart);
});

let cartId = 1;
let cart = [

]
const plants = [
  {
    id: 1,
    images: [
      { color: "red", src: "https://hips.hearstapps.com/hmg-prod/images/vibrant-green-potted-plant-blooms-inside-bringing-a-royalty-free-image-1727983902.jpg" },
      { color: "green", src: "https://cdn11.bigcommerce.com/s-wzfpfq4l/images/stencil/1280x1280/products/908/1016/green_plant__56554.1548787500.jpg" },
      {
        color: "blue",
        src: "https://images.theconversation.com/files/440454/original/file-20220112-25-zmd311.jpg",
      },
    ],
    name: "Red T-Shirt",
    price: 19.99,
  },
  {
    id: 2,
    images: [
      { color: "red", src: "https://cdn.shopify.com/s/files/1/0068/4215/5090/t/115/assets/b2df66a3fbdb--PDP-6in-Flamingo-Flower-White-Ceramic-01_360x.jpg" },
      {
        color: "green",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpcTj9Ocz7NAHoLTrW-vESFfi8mujdCki0AqkrbDn5tu5PgvG9fN9-THt9V-ZpkYIufw&usqp=CAU",
      },
    ],
    name: "Blue Jeans",
    price: 49.99,
  },
  {
    id: 3,
    images: [
      { color: "red", src: "https://www.planetnatural.com/wp-content/uploads/2023/09/Desert-Plants.jpg" },
      { color: "green", src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png" },
    ],
    name: "Black Jacket",
    price: 89.99,
  },
  {
    id: 4,
    images: [
      {
        color: "red",
        src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C28-4893_LOL_preset_ftd-mx-tile-wide-lv-new.jpeg",
      },
      {
        color: "green",
        src: "https://pyxis.nymag.com/v1/imgs/2c4/f78/15eb2f5e158b68d3eefe81b3d2c6541181-Costa-Farms-Anthurium.rsquare.w600.jpg",
      },
      {
        color: "blue",
        src: "https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg",
      },
    ],
    name: "White Sneakers",
    price: 59.99,
  },
  {
    id: 5,
    images: [
      {
        color: "red",
        src: "https://fyf.tac-cdn.net/images/products/small/P-346.jpg",
      },
      {
        color: "green",
        src: "https://www.woodlandtrust.org.uk/media/52467/cornflower-blue-flowers-alamy-k5h3bn-picture-partners.jpg",
      },
    ],
    name: "Green Backpack",
    price: 39.99,
  },
  {
    id: 6,
    images: [
      { color: "red", src: "https://images.ctfassets.net/i3tkg7dt3kro/5vWnLEz6xgTGSRCgU5R3Jg/b5a1b5326db15a88794fa969bd5e7e37/hi.jpg" },
      {
        color: "green",
        src: "https://growhub.ae/cdn/shop/files/Indoor-92.jpg?v=1688220489&width=2252",
      },
    ],
    name: "Yellow Cap",
    price: 14.99,
  },
  {
    id: 7,
    images: [
      { color: "red", src: "https://www.nhm.ac.uk/content/dam/nhm-www/discover/weird-plants/Bleeding%20Heart%20plant%20two-column.jpg" },
      { color: "green", src: "https://hortology.co.uk/cdn/shop/files/Sanna-Moss-Green-1_1200x.jpg" },
    ],
    name: "Gray Hoodie",
    price: 34.99,
  },
  {
    id: 8,
    images: [
      { color: "red", src: "https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/P2296_LOL_preset_proflowers-mx-tile-wide-lv-new.jpeg" },
      {
        color: "green",
        src: "https://theplantsociety.com.au/cdn/shop/products/ee34f54ff48c6be9b0eada3714930e84.jpg",
      },
    ],
    name: "Purple Dress",
    price: 45.99,
  },
  {
    id: 9,
    images: [
      { color: "red", src: "https://images.ctfassets.net/h1eh3mhnbyvi/773w63pddx4hInrIkGnAge/cc07a12220a652afb9057324662b4050/FTD_GiftAndPlant_CLP_CTABanners_Merx_SplitMobile_BestSellingPlants_3823.jpg" },
      {
        color: "green",
        src: "https://interiorplants.ca/wp-content/uploads/2023/02/golden-pothos-money-plant-3.5in-in-ceramic-lisa-grey.png",
      },
    ],
    name: "Pink Scarf",
    price: 12.99,
  },
  {
    id: 10,
    images: [
      { color: "red", src: "https://plantsome.ca/cdn/shop/products/TradescantiaSunnyStar4inpot.png" },
      {
        color: "green",
        src: "https://planaplant.com/cdn/shop/files/Aakanksha-Indoorshopifyproducts2023_79.png?v=1700729477",
      },
    ],
    name: "Brown Boots",
    price: 79.99,
  },
];

module.exports = router;
