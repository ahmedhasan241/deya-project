import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import classNames from "classnames";

interface IconicProps extends React.HTMLProps<HTMLSpanElement> {
  icon: any;
  iconType?: "primary" | "danger" | "gray" | "info";
  loading?: boolean;
  onClick?:
    | ((e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => void)
    | undefined;
  shape?: "circle" | "round";
}

const IconicButton = (props: IconicProps) => {
  const { icon, iconType, loading, onClick, shape, className, disabled } =
    props;
  const iconTypeSwitch = (typ) => {
    switch (typ) {
      case "primary":
        return "bg-primary/25 hover:bg-primary/50 text-primary ";
      case "danger":
        return "bg-danger/25 hover:bg-danger/50 text-danger ";
      case "gray":
        return "bg-gray-700/25 hover:bg-gray-700/50 text-gray-700 ";
      case "info":
        return "bg-success/25 hover:bg-success/50 text-success ";
      default:
        return "bg-fontColor/25 hover:bg-fontColor/50 text-fontColor ";
    }
  };
  return (
    <span
      className={classNames(
        "h-fit w-fit flex p-2 rounded-lg cursor-pointer " +
          iconTypeSwitch(iconType) +
          className,
        {
          "cursor-not-allowed pointer-events-none": loading,
          " rounded-md": shape === "round",
          "!pointer-events-none !cursor-not-allowed !bg-Gray1": disabled,
        }
      )}
      onClick={onClick}
    >
      {loading ? <AiOutlineLoading className="animate-spin" /> : icon}
    </span>
  );
};

export default IconicButton;
