import React from "react";
import LogoSvg from "../../assets/svg/logo";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.shopSlice);
  return (
    <nav className="flex items-center justify-between py-5 w-[90%] m-auto">
      <Link to={"/"}>
        <LogoSvg />
      </Link>
      <nav className="flex items-center gap-7 cursor-pointer">
        <nav className="text-xl" onClick={() => navigate("/like")}>
          <HeartOutlined /> Saralanganlar
        </nav>
        <nav className="text-xl" onClick={() => navigate("/shop")}>
          <ShoppingOutlined /> Savat
          <span className="bg-[#7000FF] text-white text-[18px] px-[5px] ml-2">
            {data.length}
          </span>
        </nav>
      </nav>
    </nav>
  );
};

export default Navbar;
