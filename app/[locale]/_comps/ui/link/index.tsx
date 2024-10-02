// "use client";

// import { useLocale } from "next-intl";
// import { default as NextLink } from "next/link";

// const Link = (props) => {
//   const locale = useLocale();
//   return <NextLink {...props} lang={locale === "en" ? "ar" : "en"} />;
// };

// export default Link;
"use client";

import { Link as NavLink } from "@/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

export default function Link({
  href,
  ...rest
}: ComponentProps<typeof NavLink>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <NavLink
      aria-current={isActive ? "page" : undefined}
      href={href}
      {...rest}
    />
  );
}
