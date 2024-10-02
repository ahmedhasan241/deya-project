import { useToggleTheme } from "@/store/adminStore";
import { default as AntdSearch, SearchProps } from "antd/es/input/Search";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = (props) => {
  const { themeApp } = useToggleTheme();
  return (
      <AntdSearch
        enterButton={<CiSearch size={20} />}
        className={` dark:!bg-darkBGSecondary  ${props.className}`}
        styles={{
          // input: {
          //   backgroundColor: themeApp === "dark" ? "#2f2f2f" : undefined,
          // },
          // affixWrapper: {
          //   backgroundColor: themeApp === "dark" ? "#2f2f2f" : undefined,
          //   // border: "none",
          // },
        }}
        size="large"
        allowClear
        {...props}
      />
  );
};

export default Search;
