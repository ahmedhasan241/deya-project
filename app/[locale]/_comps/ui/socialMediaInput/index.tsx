import { Form, Input, Space } from "antd";
import React from "react";
import Select from "../select";
import { FaFacebookF, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { FaXTwitter } from "react-icons/fa6";

const { Item } = Form;
const { Compact } = Space;

const SocialMediaInput = ({ fieldName, disabledFields, ...props }) => {
  const t = useTranslations();

  const socialMediaOption = [
    {
      value: "instagram",
      label: (
        <span className="flex items-center gap-1">
          <FaInstagram size={12} /> instagram
        </span>
      ),
    },
    {
      value: "tiktok",
      label: (
        <span className="flex items-center gap-1">
          <FaTiktok size={12} /> tiktok
        </span>
      ),
    },
    {
      value: "snapchat",
      label: (
        <span className="flex items-center gap-1">
          <FaSnapchat size={12} /> snapchat
        </span>
      ),
    },
    {
      value: "facebook",
      label: (
        <span className="flex items-center gap-1">
          <FaFacebookF size={12} /> face
        </span>
      ),
    },
    {
      value: "twitter",
      label: (
        <span className="flex items-center gap-1">
          <FaXTwitter size={12} /> twitter
        </span>
      ),
    },
  ];
  return (
    <Item label={t("Influencers.socialMedia")} className="w-full">
      <Compact block>
        <div style={{ width: "180px" }}>
          <Item
            name={[fieldName, "social"]}
            noStyle
            // rules={[{ required: true, message: "Province is required" }]}
            {...props}
          >
            <Select
              className="rounded-e-none"
              //   placeholder="Select province"
              options={socialMediaOption.map((obj) => ({
                ...obj,
                disabled: disabledFields
                  ? disabledFields?.includes(obj.value)
                  : false,
              }))}
            />
          </Item>
        </div>
        <Item
          name={[fieldName, "userName"]}
          noStyle
          //   rules={[{ required: true, message: "Street is required" }]}
          {...props}
        >
          <Input
            style={{ width: "75%" }}
            placeholder={t("Campaigns.userName")}
          />
        </Item>
      </Compact>
    </Item>
  );
};

export default SocialMediaInput;
