import React from "react";

interface Props {
  onClick: () => void;
  icon?: any;
  text?: string;
  className?: string;
  disabled?: boolean;
}

const CustomButton = (props: Props) => {
  return (
    <button
      type="button"
      className={`min-h-10 min-w-10 border-[3px] border-primary rounded-xl flex items-center justify-center ${
        props.className && props.className
      }`}
      onClick={props.onClick}
      disabled={props.disabled ? props.disabled : false}
    >
      {props.icon && props.icon}
      {props.text && props.text}
    </button>
  );
};

export default CustomButton;
