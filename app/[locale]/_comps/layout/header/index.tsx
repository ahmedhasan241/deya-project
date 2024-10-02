"use client";
import { useRouter } from "@/navigation";
import { Badge, Divider, Space, Tooltip } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

import { useGetSearchQuery } from "@/utils/getSearchQuery";

import { IoIosNotificationsOutline } from "react-icons/io";



const HeaderComp = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  let currLang = locale === "en" ? "ar" : "en";
  const handleLang = () => {
    router.push(pathname, { locale: currLang });
  };

  const hasAr = useCallback(() => pathname?.includes("/ar"), [pathname]);
  const handleChangeLang = () => {
    const modifiedPathname = hasAr()
      ? pathname?.replace("/ar", "/en")
      : pathname?.replace("/en", "/ar");
    router.push(modifiedPathname!, { locale: currLang });
  };


  return (
    <>

      <Space
        size={0}
        split={<Divider type="vertical" style={{ height: "2em" }} />}
        style={{ justifyContent: "end" }}
        className="text-primary"
      >
        <div className="cursor-pointer">
          <Badge
            styles={{
              indicator: { padding: "3  px 6  px", borderRadius: "50" },
            }}
            offset={[0, -4]}
          >
            <IoIosNotificationsOutline
              size={30}
              className=" text-primary -mb-3"
            />
          </Badge>
        </div>
      </Space>
    </>
  );
};

export default HeaderComp;
