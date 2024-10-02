import Link from "@/app/[locale]/_comps/ui/link";
import { Avatar, Switch } from "antd";
import React from "react";
import { FaRegCreditCard, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { User } from "../../_api/types";
import {
  useIndividualsActions,
  useIndividualsStatus,
} from "../../_api/actions";

interface ItemCardProps {
  item: User;
  refetch: () => void;
  refetchStatistics: () => void;
}

const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
  const { deleteIndividual, deleteIndividualLoading } = useIndividualsActions();
  const { changeStatus, changeStatusLoading } = useIndividualsStatus();

  const handleDelete = async () => {
    try {
      await deleteIndividual({}, props?.item?.id + "");
      props?.refetch();
      props?.refetchStatistics();
    } catch (error) {
      console.error("Failed to delete individual:", error);
    }
  };

  const onChange = async (checked: boolean) => {
    changeStatus({}).then(() => {
      props?.refetch();
      props?.refetchStatistics();
    });
  };
  return (
    <div className="flex flex-row justify-between items-center p-4 bg-[#1D1D1D] mb-3">
      <div className="flex flex-row gap-2 items-center">
        <FaRegCreditCard size={24} color="#F79400" />
        <Avatar src={props?.item?.avatar} />
        <h2 className="!text-white hover:text-gold">{props?.item?.name}</h2>
      </div>
      <h2 className="!text-[#B1B1B1] text-xl">
        Created Time : {props?.item?.created_time}
      </h2>
      <div className="flex flex-row gap-16">
        <Switch onChange={onChange} checked={props?.item?.is_active} />
        <div className="flex flex-row gap-4">
          <Link href={`/individual/${props?.item?.id}`}>
            <FaRegEdit className="!cursor-pointer" size={25} color="#F79400" />
          </Link>
          <FaRegTrashAlt
            onClick={handleDelete}
            className="!cursor-pointer"
            size={25}
            color="#8E8E8E"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
