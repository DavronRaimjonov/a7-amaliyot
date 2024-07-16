import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { decrement, deleteProduct, increment } from "../../../redux/shop-slice";

const ShopCardItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <img className="w-[100px] h-[100px]" src={product.img} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h3>{product.title}</h3>
          <div className="flex items-center gap-5 border w-[80px] justify-between p-[5px]">
            <button onClick={() => dispatch(decrement(product.id))}>-</button>
            <span>{product.count}</span>
            <button onClick={() => dispatch(increment(product.id))}>+</button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(deleteProduct(product.id))}
          >
            <DeleteOutlined /> Yo'q qilish
          </div>
          <h2>{product.userPrice} so'm</h2>
        </div>
      </div>
    </Card>
  );
};

export default ShopCardItem;
