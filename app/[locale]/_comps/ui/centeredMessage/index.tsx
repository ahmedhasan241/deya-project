import React from "react";

const CenteredMessage = ({ children }) => {
  return (
    <section className="w-full text-center flex justify-center items-center h-[calc(100vh-80px)]">
      <h2 className="text-3xl">{children}</h2>
    </section>
  );
};

export default CenteredMessage;
