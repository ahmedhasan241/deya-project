import React from "react";
import dummyImage from "@/public/imgs/men.webp";
import ImageCardSection from "../common/ImageCardSecion";
import FavouriteCardBottomSection from "./FavouriteCardBottomSection";

const FavouriteCard = ({
  influencer,
  brandId,
  refetch,
  isNew,
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
    brands,
    total_brands,
    fav_groups,
    related_brand_type,
    total_groups,
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
        isFavouriteCard={true}
        brandId={brandId}
        influencerId={id}
        refetchInfluencersAfterDelete={refetch}
        isNew={isNew}
        setBulkActionsIds={setBulkActionsIds}
        bulkActionsIds={bulkActionsIds}
        nationality={nationality}
      />
      <FavouriteCardBottomSection
        countryCode={country_code}
        name={name}
        userName={user_name}
        brands={brands}
        total_brands={total_brands}
        total_groups={total_groups}
        influencerId={id}
        related_brand_type={related_brand_type}
      />
    </div>
  );
};

export default FavouriteCard;
