import React from "react";
import Shoes from "./../shoes.json";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Hello from Product</h1>
      <div className="productContainer">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName} className="link" to={`/product/${keyName}`}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} alt="shoe-pair" height={150} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
