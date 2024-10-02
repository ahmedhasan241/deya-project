import React, { useEffect, useRef, useState } from "react";
import InfoSection from "../common/InfoSection";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Tooltip from "../../toolTip";
import { BsCalendarHeartFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { useGetBrandsPagination } from "@/app/[locale]/influencers/_comps/_api/quert";
import { Spin } from "antd";

interface Props {
  name: string;
  userName: string;
  countryCode: string;
  campaigns: any[];
  brands: any;
  influencerId: number;
  related_brand_type: string;
  total_brands: number;
}

const DislikeCardBottomSection = ({
  name,
  userName,
  countryCode,
  brands,
  influencerId,
  related_brand_type,
  total_brands,
}: Props) => {
  const [page, setPage] = useState(0);
  const [brandsPaginationHistory, setBrandsPaginationHistory] = useState<any>([
    ...brands.filter((i) => Boolean(i.id || i.name)),
  ]);
  const listInnerRef = useRef<any>();

  const { paginatedBrands, loading } = useGetBrandsPagination({
    influencerId: influencerId,
    page: page,
    skip: page === 0,
    relatedBrandType: related_brand_type,
  });

  useEffect(() => {
    if (paginatedBrands?.length > 0) {
      setBrandsPaginationHistory((prev) => [...prev, ...paginatedBrands]);
    }
  }, [paginatedBrands]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      const isNearBottom = scrollTop + clientHeight > scrollHeight - 1;

      if (isNearBottom && total_brands > brandsPaginationHistory.length) {
        setPage((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="p-3 flex flex-col justify-between min-h-[246px]  dark:bg-darkBGPrimary">
      <InfoSection
        removeBio={true}
        removeGender={true}
        name={name}
        userName={userName}
        countryCode={countryCode}
        influencerId={influencerId}
      />
      <Spin spinning={loading}>
        <div
          ref={listInnerRef}
          onScroll={onScroll}
          className={`overflow-scroll thin-scroll h-[130px] py-2 pt-0 pr-1 center ${
            brands.length !== 0
              ? "border-b border-Gray2 dark:border-Gray2/40"
              : ""
          }`}
        >
          {brandsPaginationHistory?.map((item, idx) => (
            <div
              key={item.id}
              className="bg-Gray2 dark:bg-darkBGSecondary dark:shadow-darkShadow2 flex h-fit py-3 px-2 my-3 w-full items-center justify-between rounded-[4px]"
            >
              <div className="flex items-center gap-2 h-fit">
                <FaArrowUpRightDots className="text-primary" />
                <Tooltip title={item.name}>
                  <div className="font-medium w-fit max-w-20  text-ellipsis text-nowrap h-6 overflow-hidden">
                    {item.name}
                  </div>
                </Tooltip>
                <div className="flex h-full justify-between">
                  {item?.groups?.groups?.map((favGroup, idx) => (
                    <Tooltip key={favGroup.id} title={favGroup.name}>
                      <div
                        style={{ background: favGroup.color }}
                        className={`block h-4 w-4 text-[${
                          favGroup.color
                        }] rounded-full ${idx < 2 && "-mr-1"}  z-${
                          (item?.groups?.groups.length - idx) * 10
                        }`}
                      ></div>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 h-full justify-between items-center w-fit">
                {item?.groups?.main_added_date && (
                  <IoCalendar className="text-primary" />
                )}
                {item?.groups?.main_added_date &&
                  new Date(item?.groups?.main_added_date).toLocaleDateString()}
                {item?.groups?.groups?.length === 0 &&
                  !item?.groups?.main_added_date && (
                    <div className={`rounded-full text-danger font-medium`}>
                      No groups
                    </div>
                  )}
              </div>
            </div>
          ))}

          {brands.length === 1 && (
            <p className="h-fit py-3 px-2 w-full text-center text-primary font-medium text-lg">
              No other Brands yet
            </p>
          )}
          {brands.length === 0 && (
            <div className="h-fit py-3 px-2 w-full flex flex-col items-center justify-center">
              <img
                src="/imgs/influencers/noCampaigns.png"
                width={96}
                height={64}
                alt="no campaings"
                className="h-16 w-24"
              />
              <p className="h-fit py-3 px-2 mt-1 text-center text-primary font-medium text-lg">
                No Brands added yet
              </p>
            </div>
          )}
        </div>
      </Spin>

      {brands.length !== 0 && (
        <div className="flex justify-center items-center gap-2">
          <span className="text-primary text-lg font-medium">Total Brands</span>
          <span className="block bg-primary text-white text-center leading-6 text-sm font-medium h-6 w-6 rounded-full">
            {total_brands}
          </span>
        </div>
      )}
    </div>
  );
};

export default DislikeCardBottomSection;
