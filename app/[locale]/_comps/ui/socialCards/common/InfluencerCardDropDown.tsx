// import React, { useMemo, useState } from "react";
// import type { MenuProps } from "antd";
// import { Link } from "@/navigation";
// import PopupConfirm from "../../popupConfirm";
// import { useTranslations } from "next-intl";
// import { useAdminStore } from "@/store/adminStore";
// import IconicButton from "../../iconicButton";
// import { LuEye } from "react-icons/lu";
// import { AiOutlineEdit } from "react-icons/ai";
// import { RiDeleteBin7Line } from "react-icons/ri";
// import Button from "../../Button";
// import { mutate } from "swr";
// import instance from "@/swrstate/client";
// import { toast } from "react-toastify";

// const deleteInfluencer = async (influencerId) => {
//   mutate(`/influencers/${influencerId}/delete?reason=test`, undefined, false);
//   const response = await instance["delete"](
//     `/influencers/${influencerId}/delete?reason=test`,
//     {
//       responseType: "json",
//     }
//   );
//   mutate(`/influencers/${influencerId}/delete?reason=test`);

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

// const InfluencerCardDropDown = ({
//   influencerId,
//   refetchInfluencersAfterDelete,
// }: {
//   influencerId: number | undefined;
//   refetchInfluencersAfterDelete: any;
// }) => {
//   const t = useTranslations();

//   const [afterDeleteData, setAfterDeleteData] = useState<any>({});

//   const permissions = useAdminStore((state) => state.permissions);

//   const canDeleteInfluencers = useMemo(
//     () =>
//       Boolean(
//         permissions?.influencers?.find((per) => per === "delete influencers")
//       ),
//     [permissions?.influencers]
//   );

//   const canEditInfluencers = useMemo(
//     () =>
//       Boolean(
//         permissions?.influencers?.find((per) => per === "update influencers")
//       ),
//     [permissions?.influencers]
//   );

//   const items: MenuProps["items"] = [
//     {
//       label: (
//         <Link
//           className="items-center flex gap-2"
//           href={`/influencers/${influencerId}`}
//         >
//           <IconicButton icon={<LuEye className="text-xl" />} iconType="info" />
//           <div className="text-center">View</div>
//         </Link>
//       ),
//       key: "0",
//     },
//     {
//       label: canEditInfluencers ? (
//         <Link
//           className="items-center flex gap-2"
//           href={`/influencers/update/${influencerId}`}
//         >
//           <IconicButton
//             icon={<AiOutlineEdit className="text-xl" />}
//             iconType="primary"
//           />
//           <div className="text-center">Edit</div>
//         </Link>
//       ) : (
//         <Button disabled type="text">
//           <IconicButton
//             disabled
//             icon={<AiOutlineEdit className="text-xl" />}
//             iconType="primary"
//           />
//           Edit
//         </Button>
//       ),
//       key: "1",
//     },
//     {
//       label: (
//         <PopupConfirm
//           title={<>Are you sure you want to delete this influencer</>}
//           confirmDesc={
//             <div className="text-center py-4">
//               “you want be able to undo this action
//             </div>
//           }
//           centered
//           styles={{
//             footer: {
//               display: "flex",
//               gap: "40%",
//               justifyContent: "space-between",
//             },
//           }}
//           okText={t("Common.delete")}
//           confirmType="danger"
//           onOk={() =>
//             deleteInfluencer(influencerId).then(() => {
//               setTimeout(() => {
//                 refetchInfluencersAfterDelete();
//               }, 1000);
//             })
//           }
//           loadingConfirm={false}
//           cancelText={t("Common.cancel")}
//           afterFonfirmText="This Influencer has been deleted"
//         >
//           {!canDeleteInfluencers ? (
//             <Button className="justify-start text-center " disabled type="text">
//               <IconicButton
//                 disabled
//                 icon={<RiDeleteBin7Line className="text-xl" />}
//                 iconType="danger"
//                 onClick={() => {}}
//                 loading={false}
//               />
//               Delete
//             </Button>
//           ) : (
//             <div className="text-center flex items-center gap-2">
//               {" "}
//               <IconicButton
//                 disabled
//                 icon={<RiDeleteBin7Line className="text-xl" />}
//                 iconType="danger"
//                 onClick={() => {}}
//                 loading={false}
//               />{" "}
//               Delete
//             </div>
//           )}
//         </PopupConfirm>
//       ),
//       key: "2",
//       disabled: !canDeleteInfluencers,
//     },
//   ];
//   return (
//     <div className="flex gap-1 items-center">
//       <Link
//         className="items-center flex gap-2"
//         href={`/influencers/${influencerId}`}
//       >
//         <LuEye className="text-xl h-6 !w-6 max-w-6 p-1 rounded-md text-white bg-success" />
//       </Link>
//       {canEditInfluencers ? (
//         <Link
//           className="items-center flex gap-2"
//           href={`/influencers/update/${influencerId}`}
//         >
//           <AiOutlineEdit className="text-xl h-6 !w-6 max-w-6 p-1 rounded-md text-white bg-primary" />
//         </Link>
//       ) : (
//         <AiOutlineEdit className="text-xl h-6 !w-6 max-w-6 p-1 rounded-md text-white bg-primary" />
//       )}

//       {!canDeleteInfluencers ? (
//         <RiDeleteBin7Line className="text-lg h-6 !w-6 !max-w-6 p-1 rounded-md text-white bg-danger" />
//       ) : (
//         <PopupConfirm
//           title={<>Are you sure you want to delete this influencer</>}
//           confirmDesc={
//             <div className="text-center py-4">
//               “you want be able to undo this action
//             </div>
//           }
//           centered
//           styles={{
//             footer: {
//               display: "flex",
//               gap: "40%",
//               justifyContent: "space-between",
//             },
//           }}
//           okText={t("Common.delete")}
//           confirmType="danger"
//           onOk={() =>
//             deleteInfluencer(influencerId).then((response) => {
//               setAfterDeleteData(response?.data?.data);
//               setTimeout(() => {
//                 refetchInfluencersAfterDelete();
//               }, 1000);
//             })
//           }
//           loadingConfirm={false}
//           cancelText={t("Common.cancel")}
//           afterFonfirmText={
//             afterDeleteData?.campaigns?.length ? (
//               <div className="flex flex-col gap-1 items-center justify-center">
//                 <p className="text-center">{afterDeleteData?.message}</p>
//                 <span className="w-full">
//                   {afterDeleteData?.campaigns?.length} Campaigns
//                 </span>
//                 <div className="flex flex-col gap-1 h-full w-full overflow-auto max-h-24">
//                   {afterDeleteData?.campaigns?.map((item) => (
//                     <div key={item} className="flex items-center gap-2 text-sm">
//                       <Link href={`/campaigns/view/${item.id}`} target="_blank">
//                         {item.name}
//                       </Link>
//                       <span>({item.status})</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               "This Influencer has been deleted"
//             )
//           }
//           disableTimeOut
//         >
//           {!canDeleteInfluencers ? (
//             <RiDeleteBin7Line className="text-lg h-6 !w-6 !max-w-6 p-1 rounded-md text-white bg-danger" />
//           ) : (
//             // <button
//             //   className="justify-start text-center leading-6 h-6 mt-1 !w-6 !max-w-6"
//             //   disabled
//             // >
//             // {/* <IconicButton
//             //   disabled
//             //   icon={<RiDeleteBin7Line className="text-sm" />}
//             //   iconType="danger"
//             //   onClick={() => {}}
//             //   loading={false}
//             // /> */}
//             // </button>
//             <RiDeleteBin7Line className="text-lg h-6 !w-6 max-w-6 p-1 rounded-md text-white bg-danger" />
//           )}
//         </PopupConfirm>
//       )}
//     </div>
//   );
// };

// export default InfluencerCardDropDown;
