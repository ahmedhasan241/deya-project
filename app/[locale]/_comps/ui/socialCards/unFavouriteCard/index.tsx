import React from "react";
import dummyImage from "@/public/imgs/men.webp";
import ImageCardSection from "../common/ImageCardSecion";
import UnFavouriteCardBottomSection from "./UnFavouriteCardBottomSection";

const UnFavouriteCard = ({
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
    total_brands,
    related_brand_type,
    nationality,
    id,
  } = influencer;
  return (
    <div className="shadow-socialMediaCard rounded-2xl h-[465px] min-w-80 w-full overflow-hidden  dark:border dark:border-darkBGPrimary dark:shadow-darkShadow">
      <ImageCardSection
        image={image}
        status={status}
        allFollowers={all_followers}
        isDislike={is_dislike}
        isFavourite={is_favorite}
        brandId={brandId}
        nationality={nationality}
        influencerId={id}
        refetchInfluencersAfterDelete={refetch}
        setBulkActionsIds={setBulkActionsIds}
        bulkActionsIds={bulkActionsIds}
      />
      <UnFavouriteCardBottomSection
        countryCode={country_code}
        name={name}
        userName={user_name}
        campaigns={campaigns}
        brands={brands}
        influencerId={id}
        total_brands={total_brands}
        related_brand_type={related_brand_type}
      />
    </div>
  );
};

export default UnFavouriteCard;
