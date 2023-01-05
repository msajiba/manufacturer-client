import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ProductRow = ({ index, product, handleProductModal }) => {

  const navigate = useNavigate();

  const { _id, name, price, stoke, sku, minQuantity } = product;
  return (
    <>
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
            <FaTrash />
          </label>

          <button
            onClick={() => navigate(`/dashboard/product-update/${_id}`)}
            className="btn btn-xs bg-accent border-none text-secondary"
          >
          <FaEdit />
          </button>

          <button
            onClick={() => navigate(`/dashboard/product-view/${_id}`)}
            className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent"
          >
            <AiFillEye />
          </button>

        </td>
      </tr>
    </>
  );
};

export default ProductRow;
