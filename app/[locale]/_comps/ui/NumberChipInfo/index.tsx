import React from "react";

interface Props {
  title: string;
  number: number;
  highlighted?: boolean;
  amount: number | null;
}

const NumberChipInfo = (props: Props) => {
  return (
    <div className="bg-Gray1 rounded-r-2xl rounded-bl-2xl flex flex-col gap-3 p-4 pb-6 dark:bg-darkBGPrimary dark:text-white">
      <p className="text-gray-500 dark:text-white text-xl font-medium px">
        {props.title}
      </p>
      <span
        className={`${
          props.highlighted && "text-primary"
        } text-3xl font-medium px`}
      >
        {props.number}
      </span>
      {props.title === "All Campaigns" ? (
        <span className="text-gray-500">All Influencers Subscription</span>
      ) : (
        <span className="text-gray-500">Total Amount: {props.amount} EG</span>
      )}
    </div>
  );
};

export default NumberChipInfo;
