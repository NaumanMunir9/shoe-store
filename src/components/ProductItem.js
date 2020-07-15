import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./../shoes.json";

const ProductItem = () => {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) {
    return <h3>Product Not Found</h3>;
  }

  return (
    <div>
      <h1>Hello from Product Item</h1>
      <div className="link">
        <h2>{shoe.name}</h2>
        <img src={shoe.img} alt="shoe-pair" height={300} />
      </div>
    </div>
  );
};

export default ProductItem;
