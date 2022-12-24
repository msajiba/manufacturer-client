import React from "react";
import Button from "../../../Shared/Button";

const ProductRow = ({ index, product }) => {
  const { name, price, stoke, sku, minQuantity } = product;
  return (
    <tr>
      <th> {index + 1} </th>
      <td> {name} </td>
      <td> {price} </td>
      <td> {minQuantity} </td>
      <td> {stoke} </td>
      <td> {sku} </td>
      <td className="flex justify-around">
        <button className="btn btn-xs border-none bg-red-500"> delete </button>
        <button className="btn btn-xs bg-accent border-none text-secondary">
          Edit
        </button>
        <button className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent"> View </button>
      </td>
    </tr>
  );
};

export default ProductRow;
