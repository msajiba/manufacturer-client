import React from "react";
import { FaTrash } from "react-icons/fa";
import PriceConvert from "../../../Shared/PriceConvert";

const UserOrderRow = ({ order, index, handleOrderModal }) => {
  const {
    name,
    totalPrice,
    email,
    phone,
    status,
    orderQuantity,
    image,
    userName,
  } = order;

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
      <td>{userName} </td>
      <td> {email} </td>
      <td>
        <PriceConvert price={totalPrice} />
      </td>
      <td> {orderQuantity} </td>
      <td> {phone} </td>
      <td>
        
        {!status ? (
          <button className="btn btn-xs bg-secondary hover:bg-green-600 border-none">
            process
          </button>
        ) : (
          <button className="btn btn-xs bg-green-600 border-none">
            complete
          </button>
        )}

      </td>
      <td>
        <label
          onClick={() => handleOrderModal(order)}
          htmlFor="user-order-modal"
          className="btn btn-xs mx-2 border-none bg-red-500 hover:text-secondary"
        >
          <FaTrash />
        </label>
      </td>
    </tr>
  );
};

export default UserOrderRow;
