const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// express
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

//
//
app.get("/", (req, res) => {
  res.status(200).json({
    messaging: "success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      messaging: "total must be grater than 0",
    });
  }
});

// listening with firebase function
// exports.api = onRequest(app);

// listening
app.listen(5000, (err) => {
  if (err) throw err;
  console.log("amazon server running on Port 500 , http://localhost:5000");
});
