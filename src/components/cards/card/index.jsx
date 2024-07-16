import {
  HeartFilled,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../../redux/shop-slice";
import { notification } from "antd";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <img className="w-full" src={product.img} alt="" />
      <div className="py-3">
        <h3>{product.title}</h3>
      </div>
      <div className="flex items-center justify-between pt-5">
        <h3>{product.price} so'm</h3>
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch(getData(product));
            notification.success({ message: "Add to Cart !" });
          }}
        >
          <ShoppingOutlined className="text-[20px]" />
        </div>
      </div>
      <div className="absolute top-2 right-4 cursor-pointer">
        {product.like ? (
          <HeartFilled className="text-[red]" />
        ) : (
          <HeartOutlined className="text-[20px]" />
        )}
      </div>
    </div>
  );
};

export default Card;
