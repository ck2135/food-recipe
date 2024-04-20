import React from "react";
import "./Product.css";
const Products = ({ data }) => {
  return (
    <div className="menu" >
      <div className="all-items" >
        {data.map((item,index) => (
          <div className="items" key={index}>
            <img src={item.recipe.image} alt="Food Item" />
            <div className="items-list">
              <h5>{item.recipe.label}</h5>
              <p>
                Total Amount of Calories : {Math.round(item.recipe.calories)}
              </p>
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
