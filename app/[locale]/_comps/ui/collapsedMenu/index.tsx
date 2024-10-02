import useCollapsedStore from "@/store/collapsed";
import { useGetSearchQuery } from "@/utils/getSearchQuery";
import { Grid } from "antd";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import Tooltip from "../toolTip";
const { useBreakpoint } = Grid;
interface CollapsedMenuProps extends React.HTMLProps<HTMLDivElement> {
  //   items: MenuProps["items"];
  items: any;
  searchIndex: string;
  isSearchString?: boolean;
  defaultIndex?: any;
  //   collapsed: boolean;
  //   setCollapsed: (state: boolean) => void;
}

const CollapsedMenu = (props: CollapsedMenuProps) => {
  const { items, isSearchString, defaultIndex, searchIndex } = props;
  const { lg } = useBreakpoint();
  const { getSearchQuery, setSearchQuery } = useGetSearchQuery();
  const collapsed = useCollapsedStore((state) => state.collapsed);
  console.log("🚀 ~ CollapsedMenu ~ collapsed:", collapsed);
  const toggleCollapsed = useCollapsedStore((state) => state.toggleCollapsed);
  const closeCollapsed = useCollapsedStore((state) => state.closeCollapsed);
  //   const { collapsed, setCollapsed } = props;
  const campaignIndex = isSearchString
    ? getSearchQuery(searchIndex) || defaultIndex
    : Number(getSearchQuery(searchIndex) || defaultIndex || 1);
  //   const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };
  console.log(
    "🚀 ~ CollapsedMenu ~ campaignIndex:",
    campaignIndex,
    defaultIndex
  );

  useEffect(() => {
    if (!lg) closeCollapsed();
  }, [lg]);

  return (
    <div className="h-fit  flex flex-col divide-y shadow-card dark:shadow-none dark:bg-darkBGPrimary dark:border-[1px] dark:border-primary/40 rounded-2xl overflow-hidden sticky top-0">
      <div className="relative">
        <div className={""}>
          {lg && (
            <span
              className={classNames("  cursor-pointer z-20  ", {
                "absolute top-1 left-1": !collapsed,
                "mt-2 mb-1 cursor-pointer mx-auto  text-primary ": collapsed,
                "text-primary": !collapsed && items[0].id !== campaignIndex,
              })}
              onClick={toggleCollapsed}
            >
              <CiCircleChevLeft
                size={30}
                //   color={collapsed ? "primary" : "black"}
                className={classNames("cursor-pointer", {
                  "rotate-180 mt-2 mb-1  mx-auto text-primary": collapsed,
                  "text-primary": !collapsed && items[0].id !== campaignIndex,
                  "text-white": items[0].id === campaignIndex && !collapsed,
                })}
              />
            </span>
          )}
          {items.map((item) => (
            <Tooltip key={item.id} title={collapsed ? item.title : undefined}>
              <div
                className={classNames(
                  "flex items-center text-center justify-center text-fontColor/50 dark:text-white  cursor-pointer text-xl px-6 py-7",
                  {
                    "bg-primary text-white": campaignIndex === item.id,
                    "hover:bg-primary/15": campaignIndex != item.id,
                    // "bg-primary text-white": collapsed,
                    // "hover:bg-primary/15": !collapsed,
                    " w-10 md:w-20 !px-1": collapsed,
                  }
                )}
                onClick={() => {
                  campaignIndex != item.id
                    ? setSearchQuery(`${props.searchIndex}=${item.id}`)
                    : null;
                  // setSearchQuery(`campaignIndex=${item.id}`);
                }}
              >
                <span className={collapsed ? "text-2xl my-1" : "mx-1"}>
                  {item.icon}
                </span>
                {/* {collapsed ? item.collapsedIcon : item.icon} */}
                {!collapsed && item.title}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsedMenu;
