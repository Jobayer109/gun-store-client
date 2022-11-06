import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const checkout = useLoaderData();
  const { _id, name, price, img } = checkout;

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;

    const customer = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || form.email.value;
    const message = form.message.value;
    const currentUser = { customer, phone, email, message };
    console.log(currentUser);

    const order = {
      gunId: _id,
      gun: name,
      img,
      price,
      customer,
      phone,
      email,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Order submitted')
        } console.log(data);
      });
  };

  return (
    <div className=" w-[50%] mx-auto my-20 bg-gray-700 p-4 rounded-xl">
      <h1 className="text-2xl font-bold text-center font-mono text-gray-200">Your Checkout</h1>
      <div className="text-center mt-3 font-bold">
        <h3 className="text-gray-400">
          Gun name: <span className="text-orange-500 text-xl">{name}</span>{" "}
        </h3>
        <p className="text-gray-400">
          Price: $ <span className="text-orange-500 text-xl">{price}</span>{" "}
        </p>
      </div>
      <form onSubmit={handleCheckout}>
        <div className="grid grid-cols-2 gap-6  mt-12 ">
          {" "}
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="input input-bordered  w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="input input-bordered  w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="input input-bordered  w-full max-w-xs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="input input-bordered  w-full max-w-xs"
            required
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <div className=" mt-6">
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="your message"
            name="message"
          ></textarea>
        </div>
        <div className="text-center my-10">
          <input className="btn btn-outline btn-success w-44 " type="submit" value="checkout" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
