import React, { useEffect, useRef, useState } from "react";
import InfoSection from "../common/InfoSection";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Tooltip from "../../toolTip";
import { useGetBrandsPagination } from "@/app/[locale]/influencers/_comps/_api/quert";
import { Spin } from "antd";

interface Props {
  name: string;
  userName: string;
  countryCode: string;
  brands: any[];
  total_groups: number;
  total_brands: number;
  influencerId: number;
  related_brand_type: string;
}

const FavouriteCardBottomSection = ({
  name,
  userName,
  countryCode,
  brands,
  total_groups,
  total_brands,
  influencerId,
  related_brand_type,
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

      console.log("🚀 ~ onScroll ~ total_brands:", total_brands);
      console.log(
        "🚀 ~ onScroll ~ total_brands brandsPaginationHistory:",
        brandsPaginationHistory
      );
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
          onScroll={onScroll}
          ref={listInnerRef}
          className={`overflow-scroll thin-scroll h-[130px] py-2  pr-1 center ${
            brands.length !== 0 ? "border-b border-Gray2" : ""
          }`}
        >
          {brandsPaginationHistory?.map((item, idx) => (
            <div
              key={item.id}
              className="bg-Gray2 dark:bg-darkBGSecondary flex h-fit py-3 px-2 w-full items-center my-2 justify-between rounded-[4px]"
            >
              <div className="flex items-center gap-2 h-fit">
                <FaArrowUpRightDots className="text-primary" />
                <Tooltip title={item.name}>
                  <span className="font-medium text-nowrap h-6 w-48 text-ellipsis overflow-hidden">
                    {item.name}
                  </span>
                </Tooltip>
              </div>
              <div className="flex h-full">
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
                {item?.groups?.groups?.length === 0 && (
                  <div className={`rounded-full text-danger font-medium`}>
                    No groups
                  </div>
                )}
              </div>
            </div>
          ))}
          {brands.length === 0 && (
            <div className="h-36 flex flex-col justify-center items-center">
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
          {brands.length === 1 && (
            <p className="h-fit py-3 px-2 mt-1 text-center text-primary font-medium text-lg">
              No other Brands yet
            </p>
          )}
        </div>
      </Spin>
      {brands.length !== 0 && (
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-primary text-lg font-medium">
              Total Brands
            </span>
            <span className="block bg-primary text-white text-center leading-6 text-sm font-medium h-6 w-6 rounded-full">
              {total_brands}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary text-lg font-medium">
              Total Groups
            </span>
            <span className="block bg-primary text-white text-center leading-6 text-sm font-medium h-6 w-6 rounded-full">
              {total_groups}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavouriteCardBottomSection;
