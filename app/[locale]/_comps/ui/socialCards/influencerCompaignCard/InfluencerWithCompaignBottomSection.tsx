import React, { useEffect, useRef, useState } from "react";
import InfoSection from "../common/InfoSection";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Tooltip from "../../toolTip";
import { generateSatatusInCompaigns } from "@/app/[locale]/influencers/_comps/influencersInCompaigns";
import { useGetInfluencersInAllCompaignsBrandPagination } from "@/app/[locale]/influencers/_comps/_api/quert";
import NoCampaigns from "@/public/imgs/influencers/noCampaigns.png";
import Image from "next/image";
import { Spin } from "antd";
import { Link } from "@/navigation";

interface Props {
  name: string;
  userName: string;
  countryCode: string;
  campaigns: any[];
  influencerId: number;
  campaignsCount: number;
}

const InfluencerWithCompaignBottomSection = (props: Props) => {
  const [page, setPage] = useState(0);
  const [campaignsHistory, setCompaignsHistory] = useState([
    ...props.campaigns.filter((i) => Boolean(i.name)),
  ]);
  const listInnerRef = useRef<any>();

  const { campaigns, loading: fetchLoading } =
    useGetInfluencersInAllCompaignsBrandPagination({
      influencerId: props.influencerId,
      page: page,
      skip: !page,
    });

  useEffect(() => {
    if (campaigns?.length > 0) {
      setCompaignsHistory((prev) => [...prev, ...campaigns]);
    }
  }, [campaigns]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      const isNearBottom = scrollTop + clientHeight > scrollHeight - 1;

      if (isNearBottom && props.campaignsCount > campaignsHistory.length) {
        setPage((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="py-1 px-3  dark:bg-darkBGPrimary">
      <InfoSection
        removeBio={true}
        removeGender={true}
        name={props.name}
        userName={props.userName}
        countryCode={props.countryCode}
        influencerId={props.influencerId}
      />
      <Spin spinning={fetchLoading}>
        <div
          className="mt-1 border-t pt-1 pr-1 border-Gray2 dark:border-Gray5/60 overflow-scroll thin-scroll h-48"
          id="scroll-element"
          ref={listInnerRef}
          onScroll={onScroll}
        >
          {campaignsHistory?.map(
            (item) =>
              item?.name && (
                <div
                  key={item.name}
                  className="bg-Gray2 dark:bg-darkBGSecondary flex gap-3 h-fit my-[6px] py-1 px-2 w-full items-center rounded-[4px]"
                >
                  <FaArrowUpRightDots className="text-primary" />
                  <div className="flex-1 text-nowrap overflow-hidden">
                    <Link href={`/brands/view/${item.brand_id}`}>
                      <Tooltip title={item.brand_name}>
                        <span className="font-medium text-nowrap h-6 overflow-hidden text-ellipsis text-fontColor dark:text-white">
                          {item.brand_name}
                        </span>
                      </Tooltip>
                    </Link>
                    <Link href={`/campaigns/view/${item.campaign_id}`}>
                      <Tooltip title={item.name}>
                        <p className="text-nowrap h-6 overflow-hidden text-ellipsis text-fontColor dark:text-white">
                          {item.name}
                        </p>
                      </Tooltip>
                    </Link>
                  </div>
                  {generateSatatusInCompaigns(item.status)}
                </div>
              )
          )}
          {campaignsHistory.length === 0 && (
            <div className="h-36 flex flex-col justify-center items-center">
              {
                //@ts-ignore
                <img
                  src="/imgs/influencers/noCampaigns.png"
                  width={96}
                  height={64}
                  alt="no campaings"
                  className="h-16 w-24"
                />
              }

              <p className="h-fit mt-2 py-[10px] px-2 w-full text-center text-primary font-medium text-lg">
                No Campaigns added yet
              </p>
            </div>
          )}
          {campaignsHistory.length === 1 && (
            <div className="h-24 flex justify-center items-center">
              <p className="w-full text-center text-primary font-medium text-lg">
                No Other Campaigns yet
              </p>
            </div>
          )}
          {campaignsHistory.length === 2 && (
            <p className="h-fit mt-2 py-[10px] px-2 w-full text-center text-primary font-medium text-lg">
              No Other Campaigns yet
            </p>
          )}
        </div>
      </Spin>
    </div>
  );
};

export default InfluencerWithCompaignBottomSection;
