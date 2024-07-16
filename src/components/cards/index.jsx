import { Skeleton } from "antd";
import { useQueryHandler } from "../../hooks/useQueryHandler";
import Card from "./card";
import useLoader from "../../generic/loader";

const Cards = () => {
  const { isLoading, isError, data } = useQueryHandler({
    pathname: "product",
    url: "products",
  });
  const { loadigCart } = useLoader();
  return (
    <div className="grid grid-cols-5 gap-10">
      {!isLoading && !isError
        ? data?.map((product) => <Card key={product.id} product={product} />)
        : loadigCart()}
      {}
    </div>
  );
};

export default Cards;
