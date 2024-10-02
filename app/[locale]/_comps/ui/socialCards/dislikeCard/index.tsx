import React from "react";
import ImageCardSection from "../common/ImageCardSecion";
import DislikeCardBottomSection from "./DislikeCardBottomSection";

const DislikeCard = ({
  influencer,
  brandId,
  refetch,
  setBulkActionsIds,
  bulkActionsIds,
}) => {
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
    brands,
    id,
    related_brand_type,
    total_brands,
    nationality,
  } = influencer;
  return (
    <div className="shadow-socialMediaCard rounded-2xl h-[465px] min-w-80 w-full overflow-hidden  dark:border dark:border-darkBGPrimary dark:shadow-darkShadow">
      <ImageCardSection
        image={image}
        status={status}
        allFollowers={all_followers}
        isDislike={is_dislike}
        isFavourite={is_favorite}
        isFromDislike={true}
        nationality={nationality}
        brandId={brandId}
        influencerId={id}
        refetchInfluencersAfterDelete={refetch}
        setBulkActionsIds={setBulkActionsIds}
        bulkActionsIds={bulkActionsIds}
      />
      <DislikeCardBottomSection
        countryCode={country_code}
        name={name}
        userName={user_name}
        campaigns={campaigns}
        brands={brands}
        influencerId={id}
        related_brand_type={related_brand_type}
        total_brands={total_brands}
      />
    </div>
  );
};

export default DislikeCard;
