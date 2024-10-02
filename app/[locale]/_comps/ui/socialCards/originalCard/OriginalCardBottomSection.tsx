import React, { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import InfoSection from "../common/InfoSection";
import TopPostsPopup from "@/app/[locale]/influencers/_comps/influencersList/TopPostsPopup";
import { TbChecklist, TbClipboardOff } from "react-icons/tb";
import InfluencerSocialMediaRow from "../../InfluencerSocialMediaRow";
import Button from "../../Button";
interface HideListBrand {
  hide_list_name: string;
  all_brand: boolean;
  brands: {
    name: String;
    logo: string;
  }[];
  excluded_brand: {
    name: String;
    logo: string;
  }[];
}
interface Props {
  name: string;
  userName: string;
  bio: string;
  gender: number;
  countryCode: string;
  createdAt: string;
  isModalOpen: boolean;
  setIsModalOpen: Function;
  influencerId: number | null;
  social_media: any;
  is_completed: boolean;
  hideListBrands: HideListBrand[];
}

const OriginalCardBottomSection = ({
  name,
  userName,
  bio,
  gender,
  createdAt,
  countryCode,
  isModalOpen,
  setIsModalOpen,
  influencerId,
  social_media,
  is_completed,
  hideListBrands,
}: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="p-3 dark:bg-darkBGPrimary">
      <InfoSection
        name={name}
        gender={gender}
        userName={userName}
        bio={bio}
        countryCode={countryCode}
        influencerId={influencerId}
        hideListBrands={hideListBrands}
      />
      {/* Social Media Section */}
      <InfluencerSocialMediaRow
        setIndex={setIndex}
        social_media={social_media}
      />
      {/* Date Section */}
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-Gray2 dark:border-white/30">
        <div className="flex gap-2 items-center">
          <LuCalendarDays className="text-primary text-xl" />
          <span>
            <span className="text-Gray5">Joined at:</span> {createdAt}
          </span>
        </div>

        {is_completed ? (
          <TbChecklist className="text-success" size={20} />
        ) : (
          <TbClipboardOff className="text-danger" size={20} />
        )}
      </div>
      <div className="flex justify-between items-center ">
        <span className="text-Gray5">
          Engagement Rate
          <span className="font-semibold text-fontColor">
            {" "}
            {social_media[index]?.engagement_average_rate
              ? social_media[index]?.engagement_average_rate
              : 0}
            %
          </span>
        </span>
        <Button
          className="!rounded-[4px] !bg-lightGreen !px-4"
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Top Posts
        </Button>
        {isModalOpen ? (
          <TopPostsPopup
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            influencerId={influencerId}
            socialMedia={social_media}
          />
        ) : null}
      </div>
    </div>
  );
};

export default OriginalCardBottomSection;
