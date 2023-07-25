/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// eslint-disable-next-line react/prop-types
const OrderItem = ({ item  , removeItem}) => {
  const { id, img, name, price, quantity } = item;
  return (
    <div>
      <div className="order-item">
        <div className="order-data">
          <div className="order-img">
            <img src={img} alt="" />
          </div>
          <div className="order-info">
            <h3 className="name">{name}</h3>
            <p className="price">
              Price: <span className="span">{price}</span>{" "}
            </p>
            <p className="qua">
              quantity: <span className="span">{quantity}</span>
            </p>
          </div>
        </div>
        <div className="order-cancel-icon">
          <button className="icon" onClick={() => removeItem(id)}>
              <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
