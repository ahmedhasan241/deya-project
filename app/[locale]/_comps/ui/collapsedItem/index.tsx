import { Collapse } from "antd";
import React from "react";
import { CgChevronDownR } from "react-icons/cg";

const CollapsedItem = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Collapse
      size="large"
      bordered={false}
      expandIconPosition="end"
      className="!bg-transparent invitaion-collapse dark:!bg-darkBGPrimary"
      items={[
        {
          key: 1,
          label,
          children,
          className: "rounded-2xl shadow-card !border-0 mb-5",
        },
      ]}
      defaultActiveKey={["1"]}
      // onChange={onChange}
      expandIcon={({ isActive }) => (
        <CgChevronDownR
          size={20}
          className={"!text-primary my-2 " + (isActive ? "rotate-180" : "")}
        />
      )}
    />
  );
};

export default CollapsedItem;
