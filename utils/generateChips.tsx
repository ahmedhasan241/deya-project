import Chip from "@/app/[locale]/_comps/ui/chips/Chip";
import { useTranslations } from "next-intl";

interface Props {
  status: string;
  primary?: boolean;
  isOval?: boolean;
}

const GenerateChips = (props: Props) => {
  console.log("🚀 ~ GenerateChips ~ props:", props);
  const t = useTranslations();
  const variants = {
    pending: {
      color: "Gray5",
      title: t("Campaigns.pending"),
    },
    Active: {
      color: "success",
      title: t("Influencers.active"),
    },
    inactive: {
      color: "danger",
      title: t("Common.inactive"),
    },
    Inactive: {
      color: "danger",
      title: t("Common.inactive"),
    },
    reject: {
      color: "danger",
      title: t("Common.reject"),
    },
    Reject: {
      color: "danger",
      title: t("Common.reject"),
    },
    Visit: {
      color: "visit",
      title: t("Campaigns.visit"),
    },
    "Post Creation": {
      color: "postCreation",
      title: t("Influencers.postCreation"),
    },
    Share: {
      color: "mix",
      title: t("Campaigns.share"),
    },
    Mix: {
      color: "mix",
      title: t("Campaigns.mix"),
    },
    Delivery: {
      color: "primary",
      title: t("Campaigns.delivery"),
    },
    Finished: {
      color: "primary",
      title: t("Common.finished"),
    },
    Canceled: {
      color: "canceled",
      title: t("Common.canceled"),
    },
    "Canceled & Closed": {
      color: "canceled",
      title: t("Common.canceledAndClosed"),
    },
    Drafted: {
      color: "Gray3",
      title: t("Influencers.drafted"),
    },
    "On Hold": {
      color: "OnHold",
      title: t("Campaigns.onHold"),
    },
    Declined: {
      color: "declined",
      title: t("Common.declined"),
    },
    Upcoming: {
      color: "OnHold",
      title: t("Influencers.upcoming"),
    },
    Coverage: {
      color: "success",
      title: t("Home.coverage"),
    },
    completed: {
      color: "success",
      title: "Completed",
    },
    Block: {
      color: "danger",
      title: "Block",
    },
    "No Response": {
      color: "danger",
      title: "No Response",
    },
    "Out Of Country": {
      color: "danger",
      title: "Out Of Country",
    },
  };

  return (
    <Chip
      color={
        variants[props.status]?.color ? variants[props.status].color : "primary"
      }
      text={variants[props.status]?.title ? variants[props.status].title : null}
      solid={props.primary ? true : false}
      className="w-[5.5rem]"
      oval={props.isOval}
    />
  );
};

export default GenerateChips;
