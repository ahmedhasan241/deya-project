import { Link } from "@/navigation";
import React, { useState } from "react";

import { BsBan } from "react-icons/bs";
import { Avatar, Button, Empty, Modal, Tag, Tooltip } from "antd";
import Table from "../../table";

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
  removeGender?: boolean;
  removeBio?: boolean;
  countryCode: string;
  name: string;
  gender?: number;
  userName: string;
  bio?: string;
  influencerId?: number | null;
  hideListBrands?: HideListBrand[];
}

const InfoSection = ({
  removeGender,
  removeBio,
  name,
  gender,
  userName,
  bio,
  countryCode,
  influencerId,
  hideListBrands,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Hide List Name",
      dataIndex: "hide_list_name",
      key: "hide_list_name",
    },

    {
      title: (
        <>
          <h2 className="text-extrabold">Brands</h2>
        </>
      ),
      dataIndex: "brands",
      key: "brands",
      render: (brands) => (
        <>
          {brands?.length > 0 ? (
            <>
              {" "}
              <Avatar.Group
                maxCount={5}
                maxPopoverTrigger="hover"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
                size="small"
                className="flex -space-x-2.5"
              >
                {brands.map((brand, index) => (
                  <Tooltip
                    key={index}
                    title={brand.name}
                    overlayInnerStyle={{ textShadow: "0.5px 0.5px black" }}
                  >
                    <Avatar src={brand.logo} size={30} className="shadow" />
                  </Tooltip>
                ))}
              </Avatar.Group>
            </>
          ) : (
            <h2>All Brands</h2>
          )}
        </>
      ),
    },
    ...(hideListBrands && hideListBrands[0]?.all_brand
      ? [
          {
            title: (
              <>
                <h2 className="text-extrabold">Exclude Brands</h2>
              </>
            ),
            dataIndex: "excluded_brand",
            key: "excluded_brand",
            render: (excluded_brand) => (
              <Avatar.Group
                maxCount={5}
                maxPopoverTrigger="hover"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
                size="small"
                className="flex -space-x-2.5"
              >
                {excluded_brand.map((brand, index) => (
                  <>
                    <Tooltip
                      key={index}
                      title={brand.name}
                      overlayInnerStyle={{ textShadow: "0.5px 0.5px black" }}
                    >
                      <Avatar src={brand.logo} size={30} className="shadow" />
                    </Tooltip>
                  </>
                ))}
              </Avatar.Group>
            ),
          },
        ]
      : []),
  ];

  const truncateName = (name, limit = 7) => {
    if (name.length > limit) {
      return `${name.slice(0, limit)}...`;
    }
    return name;
  };
  return (
    <>
      {" "}
      <div>
        <div className="flex justify-between">
          <span className="flex flex-row items-start justify-start text-start gap-1">
            <Tooltip title={name}>
              <Link
                href={`/influencers/${influencerId}`}
                className="text-xl font-medium text-nowrap no-wrap h-7 min-w-0 max-w-48 truncate overflow-hidden text-fontColor dark:text-white hover:dark:text-white"
              >
                {truncateName(name)}
              </Link>
            </Tooltip>
            {hideListBrands ? (
              <>
                {" "}
                {hideListBrands?.length > 0 ? (
                  <BsBan
                    onClick={showModal}
                    className="my-1 cursor-pointer"
                    size={18}
                    color="red"
                  />
                ) : null}
              </>
            ) : null}
          </span>

          <div className="gap-2 flex">
            {!removeGender && (
              <span className="block leading-8 bg-Gray2 px-2 rounded-md dark:text-fontColor">
                {gender === 0 ? "Female" : "Male"}
              </span>
            )}
            <span className="border-2 border-primary h-8 w-8 text-center text-primary rounded-md leading-8 text-sm font-medium">
              {countryCode}
            </span>
          </div>
        </div>
        <span>@{userName}</span>
        {!removeBio && (
          <Tooltip title={bio}>
            <span className="text-Gray5   min-h-6 leading-6 h-6 max-w-40 px-1 truncate inline-flex">
              {bio && bio}
            </span>
          </Tooltip>
        )}
      </div>
      <Modal
        onOk={handleOk}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={false}
        className="sm:!w-[100%] md:!w-[70%] lg:!w-[50%]"
      >
        <div className="flex my-2 flex-col items-center text-center justify-center gap-3">
          <BsBan size={40} color="red" />
          <h2 className=" text-xl">
            Influencer Existing In Hide List With This Brands
          </h2>
        </div>
        {hideListBrands ? (
          <>
            {" "}
            {hideListBrands?.length > 0 ? (
              <div className="m-2">
                <Table dataSource={hideListBrands} columns={columns} />
              </div>
            ) : (
              <>
                <div className="flex justify-center items-center align-middle py-6">
                  <Empty className="text-5xl" />
                </div>
              </>
            )}
          </>
        ) : null}

        <div className="flex justify-center align-middle items-center my-4">
          <Button className="!bg-[#9b7029] !text-white" onClick={handleCancel}>
            {" "}
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default InfoSection;
