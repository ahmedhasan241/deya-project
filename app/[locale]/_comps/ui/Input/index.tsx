import { Input as AntdInput } from "antd";
import type { InputProps } from "antd/es/input";
import React from "react";

export interface CustomInputProps extends InputProps {
  label?: React.ReactNode;
}

const Input = (props: CustomInputProps) => {
  return (

      <AntdInput
        {...props}
        // variant={"borderless"}
        className={
          "border border-Gray3 rounded-md h-10 hover:border-primary " +
          props.className
        }
      />

  );
};

export default Input;
