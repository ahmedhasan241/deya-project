// // import { usePagination, useQuery } from "@/swrstate/client/hooks";

// // export const useGetAllCountries = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery("/countries", params);
// //   console.log("🚀 ~ useGetAllCountries ~ data:", data);
// //   return { countries: data?.data.data, loading: isLoading, refetch };
// // };

// // export const useGetCountriesBasedOnCompany = (params: {
// //   companyId: number;
// // }) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     `/get-company-countries/${params.companyId}`,
// //     {},
// //     !params.companyId
// //   );
// //   return { countries: data?.data, loading: isLoading, refetch };
// // };

// // export const useGetAllNationalities = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     "/influencers/nationalities",
// //     params
// //   );
// //   return { nationalities: data?.data, loading: isLoading, refetch };
// // };

// // export const useGetClassifications = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     "/influencers/classifications",
// //     params
// //   );
// //   return { classifications: data?.data, loading: isLoading, refetch };
// // };

// // export const useGetCategories = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     "/influencers/categories",
// //     params
// //   );
// //   return { categories: data?.data, loading: isLoading, refetch };
// // };
// // export const useGetAllCategories = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery("/all-categories", params);
// //   return { categories: data?.data, loading: isLoading, refetch };
// // };

// // export const useGetAllCaseStudiesCategories = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     "/settings/case-studies-categories?per_page=100",
// //     params
// //   );
// //   return { categories: data?.data.list, loading: isLoading, refetch };
// // };

// // export const useLifeStyleCategories = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     "/influencers/ethink-categories",
// //     params
// //   );
// //   return { lifeStyles: data?.data, loading: isLoading, refetch };
// // };

// // export const useGetLanguages = (params = {}) => {
// //   const { data, isLoading, refetch } = useQuery(
// //     "/influencers/languages",
// //     params
// //   );
// //   return { languages: data?.data, loading: isLoading, refetch };
// // };

// export const useGetAttitudes = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/influencers/attitude",
//     params
//   );
//   return { attitudes: data?.data, loading: isLoading, refetch };
// };

// export const useGetAccountTypes = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/influencers/account-type",
//     params
//   );
//   return { accountTypes: data?.data, loading: isLoading, refetch };
// };

// export const useGetchannels = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery("/channels", params);
//   return { channels: data?.data, loading: isLoading, refetch };
// };

// export const useGetInterests = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/interests?per_page=100",
//     params
//   );

//   return { interests: data?.data, loading: isLoading, refetch };
// };

// export const useGetGovernmentsBasedOnSelectedCountry = (
//   params: { country_id: null | number } = { country_id: null },
//   skip: boolean
// ) => {
//   const { data, isLoading, refetch } = useQuery(
//     `/country/${params.country_id}/states?per_page=100`,
//     {},
//     skip
//   );
//   return { states: data?.data, loading: isLoading, refetch };
// };

// export const useGetCitiesBasedOnSelectedCountry = (
//   params: { state_id: null | number } = { state_id: null },
//   skip: boolean
// ) => {
//   const { data, isLoading, refetch } = useQuery(
//     `/government/${params.state_id}/cities?per_page=100`,
//     {},
//     skip
//   );
//   return { cities: data?.data, loading: isLoading, refetch };
// };

// export const useGetInfluencersJobs = () => {
//   const { data, isLoading, refetch } = useQuery(`/influencers/jobs`);
//   return { jobs: data?.data, loading: isLoading, refetch };
// };

// export const useGetAllCampaignStatus = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/campaigns/campaign-status",
//     params
//   );
//   // i use it in add edit campaign
//   // return { campaignStatus: data?.nationalities, loading: isLoading, refetch };
//   return { campaignStatus: data?.data, loading: isLoading, refetch };
// };

// export const useGetObjective = () => {
//   const { data, isLoading, refetch } = useQuery("/objectives");
//   return { objectives: data?.data, objectiveLoading: isLoading, refetch };
// };

// export const useGetBrandsBasedOnCompany = ({
//   companyId,
//   skip,
//   params = {},
// }) => {
//   const { data, isLoading, refetch } = useQuery(
//     `/company/${companyId}/brands`,
//     params,
//     skip
//   );
//   return { brands: data?.data, brandsLoading: isLoading, refetch };
// };

// export const useGetAllInfluencerChannels = () => {
//   const { data, isLoading, refetch } = useQuery(`/dashboard/channels`);
//   return {
//     allInfluencerChannels: data?.data,
//     allInfluencerChannelsLoading: isLoading,
//     refetch,
//   };
// };

// export const useGetAllBrandBasedOnCountries = ({
//   params = {},
//   skip = false,
// }) => {
//   const { data, isLoading, refetch } = useQuery(
//     `/brand/countries`,
//     params,
//     skip
//   );
//   return {
//     countriesBasedOnBrand: data?.data,
//     countriesBasedOnBrandLoading: isLoading,
//     refetch,
//   };
// };
// export const useGetAllCurrencies = ({ params = {} }) => {
//   const { data, isLoading } = useQuery(`/currencies`, params);
//   return {
//     currencies: data?.data,
//     currenciesLoading: isLoading,
//   };
// };
// export const useGetRoles = ({ params }) => {
//   const { data, isLoading } = useQuery(`/roles`, params);
//   return {
//     roles: data?.data,
//     rolesLoading: isLoading,
//   };
// };

// export const useGetSocialMedia = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/influencers/social-media",
//     params
//   );
//   return { socialMedia: data?.data, loading: isLoading, refetch };
// };

// export const useGetHomeControlStatus = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/campaigns/campaign-status?type=influencer",
//     params
//   );
//   return { status: data?.data, loading: isLoading, refetch };
// };

// export const useGetPlatformsAndCount = ({ params, brandId }) => {
//   const { data, isLoading } = useQuery(
//     `/settings/case-studies/${brandId}/get-platforms-and-campaigns-count`,
//     params,
//     !brandId
//   );

//   return {
//     platforms: data?.data?.platforms,
//     campaignsCount: data?.data?.campaigns_count,
//     loading: isLoading,
//   };
// };

// export const useGetWishlistBasedCountryBrand = ({
//   params = {},
//   skip = false,
// }) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/campaigns/all-wishlists",
//     params,
//     skip
//   );
//   return { wishlistBasedCountryBrand: data?.data, loading: isLoading, refetch };
// };
// export const useGetWishlistBasedBrand = ({ params = {}, skip = false }) => {
//   const { data, isLoading, refetch } = useQuery(
//     "/settings/hide-lists/get-groups",
//     params,
//     skip
//   );
//   return { wishlistBasedBrand: data?.data, loading: isLoading, refetch };
// };
// export const useGetinfluencers = ({ params = {}, skip = false }) => {
//   const { data, isLoading, refetch, isError } = useQuery(
//     `/settings/hide-lists/get-influencers`,
//     params,
//     skip
//   );
//   return {
//     influencers: data?.data,
//     loading: isLoading,
//     refetch,
//     isError,
//     pagination: data?.paginator,
//   };
// };

// export const useGetNotifications = ({
//   params = {},
//   skip = false,
//   type,
//   page,
//   notificationId,
// }) => {
//   const { data, isLoading, refetch, isError } = useQuery(
//     `/admin/notifications?type=${type}&per_page=10&page=${page}`,
//     params,
//     skip
//   );
//   return {
//     notifications: data?.data,
//     pagination: {
//       current_page: data?.pagination?.current_page,
//       total: data?.pagination?.total,
//     },
//     loading: isLoading,
//     refetch,
//     isError,
//   };
// };

// export const useMakeNotificationAsRead = ({ notificationId, skip }) => {
//   const { data, isLoading } = useQuery(
//     `/admin/notifications/${notificationId}/mark-as-read`,
//     {},
//     skip
//   );
//   return {
//     code: data?.code,
//     loading: isLoading,
//   };
// };

// export const useGetUserPermissions = ({ skip, onSuccess }) => {
//   const swr = useQuery("/admin/permissions", {}, skip, onSuccess);

//   return swr;
// };

// export const useGeAllOffices = (params = {}) => {
//   const { data, isLoading, refetch } = useQuery("/settings/offices", params);
//   return { offices: data?.data?.list, loading: isLoading, refetch };
// };
