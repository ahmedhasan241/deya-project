"use client";

import React, { useState } from "react";
import Link from "../../ui/link";

import type { MenuProps } from "antd";
import { Menu, Layout, Button } from "antd";

import { IoThermometerOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { PiBuildingsBold } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import classNames from "classnames";

const { Header } = Layout;

const LayoutHeader = () => {
  const [menuList, setMenuList] = useState<any>(
    [
      {
        label: "Home",
        key: "home",
        link: "/home",
        icon: <IoThermometerOutline color="#F79400" />,
      },
      {
        label: "Individual",
        key: "individual",
        link: "/individual",
        icon: <FaRegUser color="#F79400" />,
      },
      {
        label: "Company",
        key: "company",
        link: "/company",
        icon: <PiBuildingsBold color="#F79400" />,
      },
    ].map((item) => ({
      ...item,
      label: (
        <Link
          className="text-white hover:text-gold" // Tailwind for white text and gold on hover
          href={item.link || ""}
        >
          {item.label}
        </Link>
      ),
    }))
  );

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header
      className={classNames("shadow !z-10 !px-4 md:!px-12 !bg-[#1D1D1D]", {})}
    >
      <div className="container sticky top-0 flex justify-between items-center">
        <div className="flex gap-14 !text-white">
          <Link href={"/"} className="flex gap-3 items-center">
            <img
              src={"/imgs/logo.svg"}
              width={38}
              height={48}
              className="w-[38px] h-[48px]"
              alt="logo"
            />
          </Link>

          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            className="!bg-[#1D1D1D] "
            mode="horizontal"
            items={menuList}
            style={{ width: 400 }}
          />
        </div>
        <div className="flex flex-col pb-2 gap-1 items-center ">
          <Button
            className="!bg-transparent !border-0 !text-[#F79400] text-xl"
            icon={<IoIosLogOut size={26} />}
          >
            Log Out
          </Button>

          <Button
            href={"/en/individual/create"}
            className=" !bg-[#F79400] !border-0 rounded-3xl !text-white text-xl"
          >
            Create User
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default LayoutHeader;
