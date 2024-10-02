// import React, { useState } from "react";
// import Image from "next/image";
// import { Checkbox, Tooltip } from "antd";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import {
//   IoCheckmarkCircleOutline,
//   IoCloseCircleOutline,
//   IoReturnDownBack,
// } from "react-icons/io5";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import GenerateChips from "@/utils/generateChips";
// import { BsPeopleFill } from "react-icons/bs";
// import { useLocale, useTranslations } from "next-intl";
// import { getStatusString } from "@/app/[locale]/influencers/_comps/influencersList/getEqualStatusToShow";
// import { formatNumber } from "@/utils/formatSocialMediaNumbers";
// import Chip from "../../chips/Chip";
// import InfluencerCardDropDown from "./InfluencerCardDropDown";
// import AcceptInfulencerConfirmation from "@/app/[locale]/influencers/_comps/requestedToJoin/AcceptInfulencerConfirmation";
// import RefuseInfulencerConfirmation from "@/app/[locale]/influencers/_comps/requestedToJoin/RefuseInfluencerConfirmation";
// import { RiArrowGoBackLine } from "react-icons/ri";
// import ErrorPopup from "@/app/[locale]/influencers/_comps/ErrorPopup";
// import DislikeConfirmation from "@/app/[locale]/influencers/[id]/_comps/popup/DislikeConfirmation";
// import FavConfirmation from "@/app/[locale]/influencers/[id]/_comps/popup/FavouriteConfirmation";
// import { CheckboxChangeEvent } from "antd/es/checkbox";
// import { useGetSearchQuery } from "@/utils/getSearchQuery";
// import { useInfluencerFilterTypeStore } from "@/store/influencerFilterType";
// import { useAdminStore } from "@/store/adminStore";
// import CountryFlag from "../../countryFlag";
// import { mutate } from "swr";
// import instance from "@/swrstate/client";
// import { toast } from "react-toastify";

// const toggleDislike = async ({ influencerId, brandId }) => {
//   mutate(`/influencers/toggle-dislike/${influencerId}`, undefined, false);
//   const response = await instance["post"](
//     `/influencers/toggle-dislike/${influencerId}`,
//     {
//       brand_id: brandId,
//     },
//     {
//       responseType: "json",
//     }
//   );
//   mutate(`/influencers/toggle-dislike/${influencerId}`);

//   response.data.code < 300 || !response.data.code
//     ? toast.success(response.data.message)
//     : toast.error(response.data.message);

//   if (response.data?.original?.message?.length) {
//     toast.error(
//       response.data?.original.message?.map((item) => item?.message)?.join(", ")
//     );
//   }
//   return response;
// };

// const toggleFavourite = async ({ influencerId, brandId }) => {
//   mutate(`/influencers/toggle-wishlist/${influencerId}`, undefined, false);
//   const response = await instance["post"](
//     `/influencers/toggle-wishlist/${influencerId}`,
//     {
//       brand_id: brandId,
//     },
//     {
//       responseType: "json",
//     }
//   );
//   mutate(`/influencers/toggle-wishlist/${influencerId}`);

//   response.data.code < 300 || !response.data.code
//     ? toast.success(response.data.message)
//     : toast.error(response.data.message);

//   if (response.data?.original?.message?.length) {
//     toast.error(
//       response.data?.original.message?.map((item) => item?.message)?.join(", ")
//     );
//   }
//   return response;
// };

// interface Props {
//   image: string;
//   isDislike: boolean;
//   isFavourite: boolean;
//   allFollowers: number;
//   nationality?: string;
//   status: number;
//   isCompaignCard?: boolean;
//   influencerId?: number;
//   isRequestedToJoin?: boolean;
//   refetchInfluencersAfterDelete?: any;
//   refetchInfluencersAfterAcceptOrRemove?: any;
//   active_with?: number;
//   subscribed_at?: number;
//   isFavouriteCard?: boolean;
//   isFromDislike?: boolean;
//   brandId?: any;
//   isNew?: boolean;
//   setBulkActionsIds: (value) => void;
//   bulkActionsIds: number[];
//   isOriginal?: boolean;
//   removeCheckbox?: boolean;
// }

// const ImageCardSecion = ({
//   removeCheckbox,
//   image,
//   isFavourite,
//   allFollowers,
//   status,
//   nationality,
//   isCompaignCard,
//   influencerId,
//   refetchInfluencersAfterDelete,
//   refetchInfluencersAfterAcceptOrRemove,
//   active_with,
//   subscribed_at,
//   isFavouriteCard,
//   isFromDislike,
//   brandId,
//   isNew,
//   setBulkActionsIds,
//   bulkActionsIds,
//   isOriginal,
// }: Props) => {
//   console.log("🚀 ~ influencerId:", influencerId);
//   const isRightToLeft = useLocale() === "ar";
//   const t = useTranslations();
//   const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
//   const [isDislikeModalOpen, setIsDislikeModalOpen] = useState(false);
//   const [issFavModalOpen, setIsFavModalOpen] = useState(false);
//   const [acceptActionForAll] = useState(
//     JSON.parse(localStorage.getItem("dontShowConfirm")!)
//   );
//   const permissions = useAdminStore((state) => state.permissions.influencers);
//   const { getSearchQuery } = useGetSearchQuery();
//   const tabName = getSearchQuery("influencerstab");

//   const handleInfluencersSelecting = (e: CheckboxChangeEvent) => {
//     setBulkActionsIds((prevIds: number[]) =>
//       prevIds.find((id) => id === influencerId)
//         ? prevIds.filter((id) => id !== influencerId)
//         : [...prevIds, influencerId]
//     );
//   };

//   return (
//     <div className="h-[219px] min-w-80 w-full relative">
//       <img
//         src={image}
//         alt="profile"
//         className="h-[219px] min-w-80 w-full object-cover object-top rounded-t-2xl "
//       />
//       {isNew && (
//         <>
//           <div className="w-10 h-10 rounded-full is-new-gradient  text-sm text-white leading-10 text-center absolute top-5 left-1/2 -translate-x-1/2 z-10">
//             New
//           </div>
//           <div className="w-[5px] h-10 is-new-gradient  absolute top-0 left-1/2 -translate-x-1/2 " />
//         </>
//       )}
//       <div className="absolute top-[10px] left-[14px] flex flex-col gap-4 items-center">
//         {tabName !== "request_to_join" && !removeCheckbox && (
//           <Checkbox
//             className="scale-150"
//             checked={Boolean(bulkActionsIds.find((i) => i === influencerId))}
//             onChange={(e) => handleInfluencersSelecting(e)}
//           ></Checkbox>
//         )}
//         {nationality && (
//           <Tooltip title={nationality}>
//             <CountryFlag code={nationality} name={nationality} size="32px" />
//           </Tooltip>
//         )}

//         {status === 1 && !isFromDislike && (
//           <>
//             {!isOriginal && tabName !== "influencers_in_compaign" && (
//               <>
//                 {isFavourite ? (
//                   <>
//                     {acceptActionForAll ? (
//                       <FaHeart
//                         className={`text-canceled w-6 h-6 hover:scale-110 cursor-pointer transition-transform duration-300`}
//                         onClick={async () => {
//                           if (!brandId) {
//                             setIsErrorModalOpen(true);
//                           } else {
//                             toggleFavourite({ brandId, influencerId }).then(
//                               async () => {
//                                 await refetchInfluencersAfterDelete();
//                               }
//                             );
//                           }
//                         }}
//                       />
//                     ) : (
//                       <FavConfirmation
//                         type="un_fav"
//                         brandId={brandId}
//                         influencer_id={influencerId}
//                         isFavModalOpen={issFavModalOpen}
//                         setIsFavModalOpen={setIsFavModalOpen}
//                         refetchInfluencersAfterAcceptOrRemove={
//                           refetchInfluencersAfterDelete
//                         }
//                         setIsErrorModalOpen={setIsErrorModalOpen}
//                       />
//                     )}
//                   </>
//                 ) : (
//                   <FaRegHeart
//                     className={`text-canceled w-6 h-6 hover:scale-110 cursor-pointer transition-transform duration-300`}
//                     onClick={async () => {
//                       if (!brandId) {
//                         setIsErrorModalOpen(true);
//                       } else {
//                         toggleFavourite({ brandId, influencerId }).then(
//                           async () => {
//                             await refetchInfluencersAfterDelete();
//                           }
//                         );
//                       }
//                     }}
//                   />
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//       <ErrorPopup
//         isModalOpen={isErrorModalOpen}
//         setIsModalOpen={setIsErrorModalOpen}
//       />
//       <div
//         className={`absolute top-[10px] right-[14px] flex ${
//           isRightToLeft && "flex-row-reverse"
//         }`}
//       >
//         {status === 0 && permissions?.includes("update influencers") && (
//           <RefuseInfulencerConfirmation
//             influencerId={influencerId}
//             refetchInfluencersAfterAcceptOrRemove={
//               refetchInfluencersAfterAcceptOrRemove
//             }
//           >
//             <IoCloseCircleOutline
//               className={`hover:scale-110 cursor-pointer transition-transform duration-300 rounded-full text-danger bg-opacity-0 w-8 h-8
//           `}
//             />
//           </RefuseInfulencerConfirmation>
//         )}
//         {status === 1 &&
//           !isFromDislike &&
//           !isOriginal &&
//           tabName !== "influencers_in_compaign" && (
//             <>
//               {acceptActionForAll ? (
//                 <IoCloseCircleOutline
//                   className={`w-6 h-6 hover:scale-110 cursor-pointer transition-transform duration-300 rounded-full bg-gray-400 text-white`}
//                   onClick={() => {
//                     if (!brandId) {
//                       setIsErrorModalOpen(true);
//                     } else {
//                       toggleDislike({ brandId, influencerId }).then(
//                         async () => {
//                           await refetchInfluencersAfterDelete();
//                         }
//                       );
//                     }
//                   }}
//                 />
//               ) : (
//                 <DislikeConfirmation
//                   type="dislike"
//                   influencer_id={influencerId}
//                   refetchInfluencersAfterAcceptOrRemove={
//                     refetchInfluencersAfterDelete
//                   }
//                   isDislikeModalOpen={isDislikeModalOpen}
//                   setIsDislikeModalOpen={setIsDislikeModalOpen}
//                   brandId={brandId}
//                   setIsErrorModalOpen={setIsErrorModalOpen}
//                 />
//               )}
//             </>
//           )}
//         {isFromDislike && !isOriginal && (
//           <>
//             {acceptActionForAll ? (
//               <RiArrowGoBackLine
//                 className={`w-6 h-6 hover:scale-110 cursor-pointer transition-transform duration-300 rounded-md p-1 bg-gray-400 bg-opacity-60 text-white`}
//                 onClick={() => {
//                   if (!brandId) {
//                     setIsErrorModalOpen(true);
//                   } else {
//                     toggleDislike({ brandId, influencerId }).then(async () => {
//                       await refetchInfluencersAfterDelete();
//                     });
//                   }
//                 }}
//               />
//             ) : (
//               <DislikeConfirmation
//                 type="return"
//                 influencer_id={influencerId}
//                 refetchInfluencersAfterAcceptOrRemove={
//                   refetchInfluencersAfterDelete
//                 }
//                 isDislikeModalOpen={isDislikeModalOpen}
//                 setIsDislikeModalOpen={setIsDislikeModalOpen}
//                 brandId={brandId}
//                 setIsErrorModalOpen={setIsErrorModalOpen}
//               />
//             )}
//           </>
//         )}

//         {status === 0
//           ? permissions?.includes("update influencers") && (
//               <AcceptInfulencerConfirmation
//                 influencerId={influencerId}
//                 refetchInfluencersAfterAcceptOrRemove={
//                   refetchInfluencersAfterAcceptOrRemove
//                 }
//               >
//                 <IoCheckmarkCircleOutline
//                   className={`w-6 h-6 hover:scale-110 cursor-pointer transition-transform duration-300  rounded-full ${
//                     status === 0
//                       ? "text-success bg-opacity-0 w-8 h-8"
//                       : "bg-gray-400 text-white"
//                   }`}
//                 />
//               </AcceptInfulencerConfirmation>
//             )
//           : tabName !== "wish_list" && (
//               <InfluencerCardDropDown
//                 influencerId={influencerId}
//                 refetchInfluencersAfterDelete={refetchInfluencersAfterDelete}
//               />
//             )}
//       </div>
//       {status !== 0 && (
//         <>
//           {isCompaignCard ? (
//             <div className="absolute top-12 -right-1 overflow-hidden">
//               <div className="flex justify-end items-center gap-1  bg-success text-white font-semibold h-8 rounded-l mb-2 px-2">
//                 <span className="block text-sm">Active With</span>
//                 <span className="block text-[8px] h-4 w-4 text-center leading-4 rounded-full bg-white bg-opacity-35">
//                   {active_with}
//                 </span>
//               </div>
//               <div className="flex justify-center items-center gap-1 bg-primary text-white font-semibold h-8 rounded-l px-2">
//                 <span className="block text-sm">Subscribed at</span>
//                 <span className="block text-[8px] h-4 w-4 text-center leading-4 rounded-full bg-white bg-opacity-35">
//                   {subscribed_at}
//                 </span>
//               </div>
//             </div>
//           ) : (
//             <div className="absolute top-12 -right-1">
//               <GenerateChips status={getStatusString(status)} primary={true} />
//             </div>
//           )}
//         </>
//       )}
//       <div className="absolute bottom-5 left-0 h-8 flex justify-center items-center px-2 gap-1 text-white bg-[#9B70292d] rounded-r-[4px]">
//         <BsPeopleFill className="transform -scale-x-100 text-xl" />
//         <span className="text-lg font-medium">
//           {formatNumber(allFollowers, true)}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ImageCardSecion;
