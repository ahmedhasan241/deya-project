import React from "react";

const CardContainer = (props: React.HTMLProps<HTMLDivElement>) => {
  // const {
  //     token: { colorBgContainer, borderRadiusLG },
  //   } = theme.useToken();
  return (
    <div
      {...props}
      className={`my-6 py-6 px-4 lg:px-12 w-full dark:bg-darkBGSecondary dark:text-white bg-white rounded-lg ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardContainer;
