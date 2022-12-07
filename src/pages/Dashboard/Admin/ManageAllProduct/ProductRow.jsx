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
      <td>
        <Button> Action </Button>
      </td>
    </tr>
  );
};

export default ProductRow;
