import React from "react";
import { Button as AntButton, ButtonProps as AntdButtonProps } from "antd";

interface ButtonProps extends AntdButtonProps {
  children?: React.ReactNode | React.ReactNode[] | string;
}

const Button = (props: ButtonProps) => {
  return (
    <AntButton
      {...props}
      className={`${
        props.type === "primary" && !props.ghost && !props.disabled
          ? "!bg-primary"
          : ""
      } ${props.className}`}
    >
      {props?.children}
    </AntButton>
  );
};

export default Button;
