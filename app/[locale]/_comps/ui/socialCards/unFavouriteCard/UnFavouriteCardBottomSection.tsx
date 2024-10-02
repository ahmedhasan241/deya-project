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
  campaigns: any[];
  brands: any;
  influencerId: number;
  total_brands: number;
  related_brand_type: string;
}

const UnFavouriteCardBottomSection = ({
  name,
  userName,
  countryCode,
  brands,
  influencerId,
  total_brands,
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
          className={`grid ${
            brands.length === 1 ? "grid-cols-1" : "grid-cols-2"
          } gap-x-5 gap-y-2 py-2  center pb-4 mb-4 ${
            brands.length !== 0
              ? "border-b border-Gray2 dark:border-transparent"
              : ""
          } flex-1 overflow-scroll thin-scroll h-[130px]`}
        >
          {brandsPaginationHistory.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-Gray2  dark:bg-darkBGSecondary dark:shadow-darkShadow2 flex gap-2 h-fit py-3 px-2 w-full items-center rounded-[4px] ${
                idx < 2 && total_brands > 4 ? "mb-[1px]" : ""
              }`}
            >
              <FaArrowUpRightDots className="text-primary" />
              <Tooltip title={item.name}>
                <span className="font-medium text-nowrap overflow-hidden h-6">
                  {item.name}
                </span>
              </Tooltip>
            </div>
          ))}
          {brands.length === 2 ||
            (brands.length === 1 && (
              <p className="col-span-2 h-fit py-3 px-2 w-full text-center text-primary font-medium text-lg">
                No other Brands yet
              </p>
            ))}
          {brands.length === 0 && (
            <div className="col-span-2 h-fit py-3 px-2 w-full flex flex-col items-center justify-center">
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

export default UnFavouriteCardBottomSection;
