const Web3 = require("web3");
const express =  require("express");
const path = require("path");
const app = express();
const func = require("./functions");


app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})

const razorpay = new Razorpay({
    key_id: 'rzp_test_noRgF4nUowwWal',
    key_secret: '0bYbEwwXHhRSWvqBA7KQsOVD',
  });
  
  app.post('/razorpay/order', async (req, res) => {
    const options = {
      amount: req.body.amount * 100, // amount in paise
      currency: 'INR',
      receipt: shortid.generate(),
    };
    try {
      const response = await razorpay.orders.create(options);
      res.json({
        orderId: response.id,
        amount: response.amount,
        currency: response.currency,
      });
    } catch (error) {
      console.log(error);
    }
  });

app.get("/location", (req,res) => {
    func.location()
    res.send()
})



const server = app.listen(5000, ()=> {
    console.log("Server listening to 5000")
});

// {
//     "name": "agrisure",
//     "version": "1.0.0",
//     "description": "",
//     "main": "artifacts.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node server.js"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "jsdom": "^21.1.1",
//       "web3": "^1.9.0"
//     }
//   }
  