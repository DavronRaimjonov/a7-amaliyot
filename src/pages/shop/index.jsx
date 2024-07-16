import React from "react";
import ShopCard from "../../components/shop-card";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const Shop = () => {
  const { data } = useSelector((state) => state.shopSlice);
  return <div>{!data.length ? <Empty /> : <ShopCard />}</div>;
};

export default Shop;
