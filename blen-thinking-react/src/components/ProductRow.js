import React from "react";

const ProductRow = ({ name, price, stocked }) => {
  return (
    <>
      <tr>
        <td style={{ color: `${!stocked ? "red" : "green"}` }}>{name}</td>
        <td>{price}</td>
        <td>{stocked ? "Yes" : "No"}</td>
      </tr>
    </>
  );
};

export default ProductRow;
