import React from "react";
import ImageCardSection from "../common/ImageCardSecion";
import InfluencerWithCompaignBottomSection from "./InfluencerWithCompaignBottomSection";

interface InfluencerWithCompaignCardProps {
  influencer: any;
  brandId: number | null;
  refetch: any;
  setBulkActionsIds: (value) => void;
  bulkActionsIds: number[];
}

const InfluencerWithCompaignCard = (props: InfluencerWithCompaignCardProps) => {
  const {
    image,
    is_dislike,
    is_favorite,
    all_followers,
    status,
    name,
    user_name,
    country_code,
    campaigns,
    active_with,
    subscribed_at,
    id,
    nationalty_code,
  } = props.influencer;

  return (
    <div className="shadow-socialMediaCard rounded-2xl h-[465px] min-w-80 w-full overflow-hidden  dark:border dark:border-darkBGPrimary dark:shadow-darkShadow">
      <ImageCardSection
        image={image}
        status={status}
        allFollowers={all_followers}
        isDislike={is_dislike}
        isFavourite={is_favorite}
        nationality={nationalty_code}
        isCompaignCard={true}
        active_with={active_with}
        subscribed_at={subscribed_at}
        brandId={props.brandId}
        influencerId={id}
        refetchInfluencersAfterDelete={props.refetch}
        setBulkActionsIds={props.setBulkActionsIds}
        bulkActionsIds={props.bulkActionsIds}
      />
      <InfluencerWithCompaignBottomSection
        countryCode={country_code}
        name={name}
        userName={user_name}
        campaigns={campaigns}
        influencerId={id}
        campaignsCount={subscribed_at}
      />
    </div>
  );
};

export default InfluencerWithCompaignCard;
