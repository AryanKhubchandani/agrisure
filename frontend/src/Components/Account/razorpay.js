import React, { useState } from "react";
import axios from "axios";

function Razorpay() {
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    const response = await axios.post("/razorpay/order", { amount: 500 });
    const { orderId, amount } = response.data;
    setOrderId(orderId);
    setAmount(amount);
    const options = {
      key: "rzp_test_noRgF4nUowwWal",
      amount: amount,
      currency: "INR",
      name: "My Store",
      description: "Test Transaction",
      image: "https://via.placeholder.com/150",
      order_id: orderId,
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Buy AGC</button>
    </div>
  );
}

export default Razorpay;
