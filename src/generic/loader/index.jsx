import { Skeleton } from "antd";

const useLoader = () => {
  const loadigCart = () => {
    return (
      <>
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx}>
            <Skeleton.Image active={true} className="!w-full !h-[300px]" />
            <Skeleton.Input active={true} className="!w-full !block my-1" />
            <Skeleton.Input active={true} className="!w-full" />
          </div>
        ))}
      </>
    );
  };
  return { loadigCart };
};
export default useLoader;
