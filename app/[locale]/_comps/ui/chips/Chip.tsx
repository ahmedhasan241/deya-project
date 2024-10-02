import React from "react";

interface Props {
  text: string;
  number?: number | string;
  color: string;
  solid?: boolean;
  className?: string;
  oval?: boolean;
}

const Chip = ({ text, number, color, solid, className, oval }: Props) => {
  return (
    <div
      className={`relative ${
        text === "No Response" || text === "Out Of Country"
          ? "w-36 min-w-36 max-w-36 "
          : "w-1/2 max-w-36"
      }  ${className && className}`}
    >
      <p
        className={`bg-${color} ${!solid ? "bg-opacity-15" : ""} text-${
          !solid ? `${color}` : "white"
        } font-medium w-full h-8 text-center leading-8 ${
          oval ? "rounded-2xl" : "rounded-md"
        }`}
      >
        {text}
      </p>
      {number && (
        <span
          className={`absolute top-[6px] -right-2 bg-${color} text-white h-5 w-5 leading-5 text-center text-[8px] rounded-full`}
        >
          {number}
        </span>
      )}
    </div>
  );
};

export default Chip;
