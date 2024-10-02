import React from "react";

interface CustomTabsProps {
  setActiveTab: (key) => void;
  activeKey: string;
  items: { label: string; value: string }[];
  type?: "rounded"
}

const CustomTabs = (props: CustomTabsProps) => {
  const handleButtonClick = (key) => {
    props.setActiveTab(key);
  };

  const className = (key) =>
    `p-2 px-4 ${
      props.activeKey == key ? "bg-transparent" : "bg-[rgba(0,0,0,0.02)]"
    } ${
      props.activeKey == key ? "text-primary" : "text-fontColor"
    }  border border-[#f0f0f0] transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${props.type == "rounded" ? "rounded-lg" : "rounded-t-lg"}`;

  return (
    <div className="flex justify-end gap-1">
      {props.items.map((item) => (
        <button
          key={item.value}
          className={className(item.value)}
          type="button"
          onClick={() => handleButtonClick(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
export default CustomTabs;
