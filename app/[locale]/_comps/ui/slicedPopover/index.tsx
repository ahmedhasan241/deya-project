import { Popover } from "antd";
import classNames from "classnames";
import React from "react";

const SlicedPopover = ({ data, length = 2, noBg = false }) => {
  const content = (
    <ol className="list-disc space-y-1 ms-3">
      {data?.slice(length).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
  return (
    <div className="w-full flex gap-x-0.5 gap-y-2 flex-wrap items-center">
      {data?.slice(0, length).map((item, index) => (
        <span
          key={index}
          className={classNames(" truncate max-w-16", {
            "px-1.5  py-0.5 bg-Gray2 dark:bg-primary rounded-md text-sm": !noBg,
          })}
        >
          {item}
        </span>
      ))}
      {data?.length > length && (
        <Popover content={content} trigger="click">
          <span className="px-1.5  py-0.5 bg-Gray2 dark:bg-primary rounded-md text-sm cursor-pointer">
            + {data.length - length} more
          </span>
        </Popover>
      )}
    </div>
  );
};

export default SlicedPopover;
