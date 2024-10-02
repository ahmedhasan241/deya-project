import { Select as AntdSelect } from "antd";
import type { OptionProps, SelectProps } from "antd/es/select";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

export interface CustomSelectPropss extends SelectProps {
  label?: React.ReactNode;
  searchLocally?: boolean;
  containerClassName?: string;
}

const localSearchSelectorProps = {
  optionFilterProp: "value",
  filterOption: (input: string, option: OptionProps) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  },
};

const Select = (props: CustomSelectPropss) => {
  const searchLocally = props?.searchLocally ? localSearchSelectorProps : {};

  return (
    <div
      className={
        "w-full flex flex-col gap-2 " + props?.containerClassName ?? ""
      }
    >
      {props.label && (
        <label className="font-medium capitalize">{props.label}</label>
      )}

      <AntdSelect
        {...props}
        {...searchLocally}
        size={props.size || "large"}
        variant={props.variant ? props.variant : "borderless"}
        className={
          "border border-Gray3 dark:border-Gray3/20 rounded-md hover:!border-primary" +
          props.className
        }
        style={{ minWidth: 120, fontSize: 12, ...props.style }}
        suffixIcon={<FaChevronDown />}
      />
    </div>
  );
};

export default Select;
