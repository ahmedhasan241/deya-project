import { useRouter } from "@/navigation";
import { useLocale } from "next-intl";

export const useHandleRouter = () => {
  const router = useRouter();
  const locale = useLocale();
  let currLang = locale === "en" ? "ar" : "en";

  const handleRouter = (href) => {
    router.push(href, { locale });
  };
  return { handleRouter };
};
