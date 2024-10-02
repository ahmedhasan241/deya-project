"use client";

import React, { useEffect, useState } from "react";
import { Badge, Avatar, Button, List, Skeleton, Input, Empty } from "antd";
import "antd/dist/reset.css"; // Make sure you import Ant Design styles
import { FaSortAmountDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import ItemCard from "./_comps/itemCard";
import { useGetIndividuals, useGetStatistics } from "./_api/queries";
import Loading from "../_comps/ui/loading";
import Link from "../_comps/ui/link";

const { Search } = Input;

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

const Individual = () => {
  const [createNewAccount, setCreateNewAccount] = useState(false);
  const { data, loading, refetch: refetchIndividuals } = useGetIndividuals();

  const { data: statisticsData, refetch: refetchStatistics } =
    useGetStatistics();

  const onSearch = (value) => {
    console.log("Search query:", value);
  };

  return (
    <div className="p-6">
      <div className="flex gap-6 flex-row">
        <div className="w-9/12 ">
          <Search
            className="custom-search !h-full !text-[#8B8B8B]"
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            size="large"
          />
        </div>
        <div className="w-3/12 !h-full">
          <Link href={"/company/create"}>
            <button
              className="!w-full !h-full !py-5 !text-2xl !bg-[#F79400] !text-white !rounded-none !border-none"
              type="button"
            >
              Create New Account
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-6 flex-row mt-4 items-center mb-10">
        <div className="w-full flex flex-row justify-between px-10">
          <div className="text-[20px] text-[#F79400]">
            Total List: {statisticsData?.data?.total} User
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="bg-[#2BD526] !h-[17px] !w-[17px] rounded-full mt-1"></div>
            <h2 className="text-[#F79400] text-[20px]">
              Active User: {statisticsData?.data?.active}
            </h2>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="bg-[#B1B1B1] !h-[17px] !w-[17px] rounded-full mt-1"></div>
            <h2 className="text-[#B1B1B1] text-[20px]">
              Inactive User: {statisticsData?.data?.inactive}
            </h2>
          </div>
          <div></div>
          <div className="flex flex-row gap-2 ">
            <FaSortAmountDown size={26} color="#F79400" />
            <FiFilter size={30} color="#F79400" className="!mt-0 !pt-0" />
          </div>
        </div>
      </div>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            {data?.length > 0 ? (
              <>
                {" "}
                {data.map((item) => (
                  <ItemCard
                    refetchStatistics={refetchStatistics}
                    refetch={refetchIndividuals}
                    key={item.id}
                    item={item}
                  />
                ))}{" "}
              </>
            ) : (
              <>
                <div className="flex flex-row justify-center py-14 !text-white">
                  <Empty className="!text-white" />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Individual;
