import { useTranslations } from "next-intl";
import { useHandleRouter } from "./useHandleRouter";
import { toast } from "react-toastify";
import Link from "@/app/[locale]/_comps/ui/link";

export const useRedirectPermission = () => {
  const { handleRouter } = useHandleRouter();
  const t = useTranslations();

  const redirectCampaign = ({ urlTarget }) => {
    handleRouter("/notauthorized");
    // toast.info(t("Common.notAllowedPermission"));
    // toast.info(
    //   <div className="flex ">
    //     {t("Common.notAllowedPermission")}
    //     <Link href={"/"}>go home</Link>
    //   </div>,
    //   {
    //     closeOnClick: true,
    //     autoClose: false,
    //   }
    // );
  };

  return {
    permissionRoutPolicy: ({ isInPermission, urlTarget }) =>
      isInPermission ? null : redirectCampaign({ urlTarget }),
  };
};

export const listOfRoutePermission = {
  campaigns: {
    "/campaigns": "read campaigns",
    "/campaigns/create": "create campaigns",
    "/campaigns/{id}": "update campaigns",
    "campaigns/view/{id}": "read campaigns",
  },
  statistics: {
    "/settings/generalSettings/createStatic": "create statistics",
    "/settings/generalSettings/editStatic/{id}": "update statistics",
  },
  articles: {
    "/settings/generalSettings/createBlog": "create articles",
    "/settings/generalSettings/editBlog/{id}": "update articles",
  },
  pages: {
    "/settings/generalSettings/createPage": "create pages",
    "/settings/generalSettings/editPage/{id}": "update pages",
  },
  faqs: {
    "/settings/generalSettings/createFAQ": "create faqs",
    "/settings/generalSettings/editFAQ/{id}": "update faqs",
  },
  admins: {
    "/settings/usersAndPermissions/createuser": "create admins",
    "/settings/usersAndPermissions/editUser/{id}": "update admins",
  },
  roles: {
    "/settings/usersAndPermissions/createPermission": "create roles",
    "/settings/usersAndPermissions/editPermission/{id}": "update roles",
  },
  setting: {
    "/settings/caseStudies/createCaseStudy": "create setting",
    "/settings/caseStudies/editCaseStudy/{id}": "update setting",
    "/settings": "read setting",
  },
  "sub-brands": {
    "/brands": "read sub-brands",
    "/brands/{id}": "update sub-brands",
    "/brands/create": "create sub-brands",
  },
  brands: {
    "/companies": "read brands",
    "/companies/{id}": "update brands",
    "/companies/create": "create brands",
  },
  influencers: {
    "/influencers/create": "create influencers",
    "/influencers": "read influencers",
    "/influencers/{id}": "read influencers",
    "/influencers/update/{id}": "update influencers",
    "/trash": "update influencers",
  },
  coverage: {
    "/coverage": "read coverage",
    "/coverage/{id}": "read coverage",
  },
};
