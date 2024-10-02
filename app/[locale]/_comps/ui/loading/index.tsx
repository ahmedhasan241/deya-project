import { Spin } from "antd";
import React from "react";

interface Props {
  className?: string;
}

const Loading = ({ className }: Props) => {
  return (
    <div className={`flex justify-center items-center h-full mx-auto my-auto w-full ${className && className}`}>
      <Spin />
    </div>
  );
};

export default Loading;
