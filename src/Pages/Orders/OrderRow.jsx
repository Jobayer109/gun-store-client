import React from "react";
import { FaTrash } from "react-icons/fa";

const OrderRow = ({ order, handleDeleteOrder, handleUpdate }) => {
  const { _id, customer, email, gun, price, img, status } = order;

  return (
    <tr>
      <th onClick={() => handleDeleteOrder(_id)}>
        <FaTrash className="hover:text-red-500 text-lg"></FaTrash>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded p-4 w-44 h-36">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{gun}</div>
            <div className="text-sm opacity-50">Made in Bangladesh</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>$ {price}</td>
      <th>
        <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
