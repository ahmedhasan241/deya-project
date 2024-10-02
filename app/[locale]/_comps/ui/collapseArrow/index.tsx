"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

const className =
  "text-3xl cursor-pointer border-[3px] border-primary text-primary rounded-md";

const CoolapseArrow = ({ isOpen, setIsOpen }: Props) => {
  return isOpen ? (
    <IoIosArrowUp className={className} onClick={() => setIsOpen(!isOpen)} />
  ) : (
    <IoIosArrowDown className={className} onClick={() => setIsOpen(!isOpen)} />
  );
};

export default CoolapseArrow;
