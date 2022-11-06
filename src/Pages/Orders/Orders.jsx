import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  //data fech by email address
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  //Delete order from category
  const handleDeleteOrder = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Order deleted successfully");
          const remaining = orders.filter((odr) => odr._id !== _id);
          setOrders(remaining);
        }
        console.log(data);
      });
  };

  //Update order status
  const handleUpdate = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order approved");
          const remaining = orders.filter((odr) => odr._id !== _id);
          const approving = orders.find((odr) => odr._id === _id);
          const newOrder = [approving, ...remaining]
          setOrders(newOrder);
        }
      });
  };

  return (
    <div className="w-[80%] mx-auto my-20">
      <h3>Total Order: {orders.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Products</th>
              <th>Customer</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDeleteOrder={handleDeleteOrder}
                handleUpdate={handleUpdate}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
