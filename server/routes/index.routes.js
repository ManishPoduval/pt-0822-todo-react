const router = require("express").Router();
const uploader = require('../config/cloudinary.config');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const stripe = require("stripe")('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

router.post('/upload', uploader.single("imageUrl"), (req, res) => {
    // the uploader.single() callback will send the file to cloudinary and get you and obj with the url in return
    console.log('file is: ', req.file)
    res.status(200).json({url: req.file})
    
    if (!req.file) {
      console.log("there was an error uploading the file");
    
      res.staus(500).json({error: 'No file uploaded!'});
    }
    
    // You will get the image url in 'req.file.path'
    // Your code to store your url in your database should be here
})

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const calculateOrderAmount = (items) => {
    return 1400;
  };
  
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
