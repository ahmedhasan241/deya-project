import React, { useMemo } from "react";

interface GridCardsLayoutProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dataLength: number;
  gap?: string;
  cardMinWidth?: string;
}

const CardsGridLayout: React.FC<GridCardsLayoutProps> = ({
  children,
  className,
  style,
  dataLength,
  cardMinWidth = "250px",
}) => {
  // const maxChildrenWidth = useMemo(() => {
  //   return dataLength === 1 ? "25%" : "1fr";
  // }, [dataLength]);

  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-3 " +
        (className ? className : "")
      }
      // style={{
      //   gridTemplateColumns: `repeat(auto-fit, minmax(auto, ${maxChildrenWidth}))`,
      //   ...style,
      // }}
    >
      {children}
    </div>
  );
};

export default CardsGridLayout;
