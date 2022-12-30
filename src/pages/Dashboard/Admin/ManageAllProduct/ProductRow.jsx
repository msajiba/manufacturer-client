import React from "react";
import { useNavigate } from "react-router-dom";

const ProductRow = ({ index, product, handleProductModal }) => {
  const navigate = useNavigate();

  const { _id, name, price, stoke, sku, minQuantity } = product;
  return (
    <tr>
      <th> {index + 1} </th>
      <td> {name} </td>
      <td> {price} </td>
      <td> {minQuantity} </td>
      <td> {stoke} </td>
      <td> {sku} </td>
      <td className="flex justify-around">
        <label
          onClick={() => handleProductModal(product)}
          htmlFor="product-modal"
          className="btn btn-xs mx-2 border-none bg-red-500"
        >
          Delete
        </label>
        <button
          onClick={() => navigate(`/dashboard/product-update/${_id}`)}
          className="btn btn-xs bg-accent border-none text-secondary"
        >
          Edit
        </button>
        <button className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent">
          View
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
