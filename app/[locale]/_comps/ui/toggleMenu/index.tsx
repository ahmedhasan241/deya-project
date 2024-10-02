/*
 <div className="flex gap-10 mt-7">
    <div className="flex-1">{selectedMenuItem.component}</div>
      <ToggleMenu
      selectedId={CaseStudiesIndex}
      menuItems={Menu}
      />
  </div> 
*/

import { useGetSearchQuery } from "@/utils/getSearchQuery";
import classNames from "classnames";
import React, { useState } from "react";

interface MenuItemType {
  id: number;
  title: string;
}

interface MenuProps {
  selectedId: number;
  menuItems: MenuItemType[];
}

const ToggleMenu: React.FC<MenuProps> = ({ selectedId, menuItems }) => {
  const [activeItemId, setActiveItemId] = useState(selectedId);
  const { setSearchQuery } = useGetSearchQuery();

  const handleItemClick = (itemId: number) => {
    if (itemId !== activeItemId) {
      setActiveItemId(itemId);
      setSearchQuery(`section=${itemId}`);
    }
  };

  return (
    <div className=" sticky top-0 w-fit lg:w-[270px] h-fit flex   flex-col divide-y shadow-card rounded-2xl overflow-hidden">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={classNames(
            "flex items-center justify-center text-center text-fontColor/50 cursor-pointer text-xl p-4 lg:p-7",
            {
              "bg-primary text-white": activeItemId === item.id,
              "hover:bg-primary/15": activeItemId !== item.id,
            }
          )}
          onClick={() => handleItemClick(item.id)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default ToggleMenu;
