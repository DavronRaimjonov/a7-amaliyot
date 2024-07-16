import React from "react";
import ShopCardItem from "./shop-card-item";
import { Card } from "antd";
import { useSelector } from "react-redux";
const ShopCard = () => {
  const { data } = useSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  console.log(totalPrice);
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-7">
      <div>
        {data.map((value) => (
          <ShopCardItem product={value} key={value.id} />
        ))}
      </div>
      <Card>
        <h2>Buyurtmangiz</h2>
        <h2 className="py-[20px]">Mahsulotlar(3)</h2>
        <div className="flex items-center justify-between">
          <h3>Jami</h3>
          <h2 className="font-bold text-[25px]">{totalPrice} so'm</h2>
        </div>
        <button className="w-full mt-5 p-[5px] rounded-2xl bg-[rgb(112_2_255)] text-white">
          Rasmiylashtrishga o'tish
        </button>
      </Card>
    </div>
  );
};

export default ShopCard;
