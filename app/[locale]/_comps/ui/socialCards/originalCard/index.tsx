import React, { useState } from "react";
import ImageCardSection from "../common/ImageCardSecion";
import OriginalCardBottomSection from "./OriginalCardBottomSection";
import dayjs from "dayjs";

interface OriginalCardProps {
  influencer: any;
  isRequestedToJoin?: boolean;
  refetchInfluencersAfterDelete?: () => any;
  refetchInfluencersAfterAcceptOrRemove?: () => any;

  selectedBrandId: number | null;
  setBulkActionsIds: (value) => void;
  bulkActionsIds: number[];
  isNew?: boolean;
  removeCheckbox?: boolean;
}

const OriginalCard = (props: OriginalCardProps) => {
  const {
    image,
    is_dislike,
    is_favorite,
    all_followers,
    nationality,
    status,
    name,
    user_name,
    bio,
    gender,
    country_code,
    created_at,
    id,
    is_new,
    social_media,
    hide_list_brands,
    is_completed,
  } = props.influencer;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="shadow-socialMediaCard rounded-2xl h-[465px] min-w-80 w-full overflow-hidden dark:border dark:border-darkBGPrimary dark:shadow-darkShadow">
      <ImageCardSection
        removeCheckbox={props.removeCheckbox || status === 0}
        image={image}
        isDislike={is_dislike}
        isFavourite={is_favorite}
        allFollowers={all_followers}
        status={status}
        nationality={nationality}
        influencerId={id}
        isRequestedToJoin={props.isRequestedToJoin ? true : false}
        refetchInfluencersAfterDelete={props.refetchInfluencersAfterDelete}
        refetchInfluencersAfterAcceptOrRemove={
          props.refetchInfluencersAfterAcceptOrRemove
        }
        brandId={props.selectedBrandId}
        setBulkActionsIds={props.setBulkActionsIds}
        bulkActionsIds={props.bulkActionsIds}
        isNew={Boolean(is_new === "yes")}
        isOriginal={true}
      />
      <OriginalCardBottomSection
        name={name}
        userName={user_name}
        bio={bio}
        gender={gender}
        countryCode={country_code}
        hideListBrands={hide_list_brands}
        createdAt={created_at}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        influencerId={id}
        social_media={social_media}
        is_completed={is_completed}
      />
    </div>
  );
};

export default OriginalCard;
