"use client";
import { Statistic } from "antd";
import classNames from "classnames";

const StatisticCard = ({
  title,
  value,
  icon,
  loading,
  active,
  onClick,
  flipped,
  special,
  size = "larg",
}: {
  title: string;
  value?: number | string;
  icon?: any;
  loading?: boolean;
  active?: boolean;
  onClick?: () => void;
  flipped?: boolean;
  size?: "small" | "medium" | "larg";
  special?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames("bg-Gray3  rounded-lg shadow-none", {
        "rounded-lg": !special,
        "rounded-tr-2xl rounded-bl-2xl": special,
        "!bg-Gray1 dark:!bg-darkBGPrimary ": !active,
        "!bg-primary": active,
        "cursor-pointer": onClick,
        "p-5 md:p-8": size === "larg",
        "p-3 md:p-5": size === "medium",
        "p-1 md:p-3": size === "small",
      })}
    >
      {flipped ? (
        <div
          className={classNames(
            "flex flex-col items-center justify-center gap-4",
            {
              "text-white ": active,
            }
          )}
        >
          <span
            className={classNames("text-xl font-semibold text-primary", {
              "text-white": active,
            })}
          >
            {value}
          </span>
          <span className="text-lg text-center font-medium">{title}</span>
        </div>
      ) : (
        <Statistic
          loading={loading}
          title={
            <span
              className={classNames(
                "text-fontColor/70 dark:!text-white text-lg",
                {
                  "text-white": active,
                }
              )}
            >
              {title}
            </span>
          }
          value={value}
          valueRender={(value) => (
            <span
              className={classNames(
                "flex gap-2 text-fontColor dark:!text-white text-3xl",
                {
                  "text-white": active,
                }
              )}
            >
              {icon}
              {value || 0}
            </span>
          )}
        />
      )}
    </div>
  );
};

export default StatisticCard;
