import React from "react";

const OrderRow = ({ order, index, handleOrderModal }) => {
  const { name, price, quantity, email, phone, status } = order;
  return (
    <tr>
      <th> {index + 1} </th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </td>
      <td>{name} </td>
      <td> {price} </td>
      <td> {quantity} </td>
      <td> {email} </td>
      <td> {phone} </td>
      <td>
        {status ? (
          <button className="btn btn-xs bg-secondary hover:bg-green-600 border-none"> process </button>
        ) : (
          <button className="btn btn-xs bg-green-600 border-none">
            complete
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => handleOrderModal(order)}
          htmlFor="order-modal"
          className="btn btn-xs mx-2 border-none bg-red-500"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
