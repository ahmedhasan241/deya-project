"use client";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "../link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  title: string | JSX.Element;
}

const Breadcrumb = ({ rootLabel }: { rootLabel: string }) => {
  const pathname = usePathname();

  const getBreadcrumb = (): BreadcrumbItem[] => {
    const pathWithoutLeadingSlash = pathname.slice(1);
    const pathParts = pathWithoutLeadingSlash
      .split("/")
      .filter((item) => item !== "ar")
      .filter((item) => isNaN(Number(item)));

    return pathParts.map((item: any, index) => ({
      title:
        index === pathParts.length - 1 ? (
          <span className="text-base font-medium text-fontColor">{item}</span>
        ) : (
          <Link href={`/${pathParts.slice(0, index + 1).join("/")}`}>
            {item}
          </Link>
        ),
    }));
  };

  const breadcrumbItems = getBreadcrumb();

  if (pathname === rootLabel || pathname === `/ar${rootLabel}`) return null;

  return (
    <AntdBreadcrumb
      separator={<FaChevronRight className="rtl:rotate-180 inline-block" />}
      items={breadcrumbItems}
    />
  );
};

export default Breadcrumb;
