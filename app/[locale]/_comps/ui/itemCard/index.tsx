import { Avatar, Switch } from "antd";
import React from "react";
import { FaRegCreditCard, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "../link";
interface DataType {
  id: string;
  name: {
    full: string;
  };
  createdTime: string;
  activeStatus: boolean;
  picture: {
    link: string;
  };
  loading: boolean;
}

interface ItemCardProps {
  item: DataType;
  setCreateNewAccount: (value: boolean) => void;
}

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
  const handleEditAccount = () => {
    console.log(props.setCreateNewAccount); // Check if this logs a function
    if (props?.setCreateNewAccount) {
      props.setCreateNewAccount(true);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-[#1D1D1D] mb-3">
      <div className="flex flex-row gap-2 items-center">
        <FaRegCreditCard size={24} color="#F79400" />
        <Avatar src={props.item.picture.link} />
        <h2 className="!text-white hover:text-gold">{props.item.name.full}</h2>
      </div>
      <h2 className="!text-[#B1B1B1] text-xl">
        Created Time : {props.item.createdTime}
      </h2>
      <div className="flex flex-row gap-16">
        <Switch checked={props.item.activeStatus} />
        <div className="flex flex-row gap-4">
          <FaRegEdit
            className="!cursor-pointer"
            size={25}
            color="#F79400"
            onClick={handleEditAccount}
          />
          <FaRegTrashAlt size={25} color="#8E8E8E" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
