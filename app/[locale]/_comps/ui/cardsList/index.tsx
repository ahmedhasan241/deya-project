import React from "react";
import { Checkbox, Empty, Pagination, PaginationProps } from "antd";
import { useTranslations } from "next-intl";
import CardsGridLayout from "../cardsGridLayout";

interface CardListProps extends React.HTMLProps<HTMLDivElement> {
  cardsData: any[];
  checkedList: any[];
  keyForValue: string;
  pagination?: PaginationProps;
  setCheckedList: (any) => void;
  onCheckAllChange: (any) => void;
  removeCheck?: boolean;
}

const CardsList: React.FC<CardListProps> = ({
  cardsData,
  checkedList,
  keyForValue,
  setCheckedList,
  onCheckAllChange,
  pagination,
  children,
  removeCheck,
}) => {
  const t = useTranslations();
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setCheckedList(checkedValues);
  };

  const indeterminate =
    checkedList.length > 0 && checkedList.length < cardsData?.length;

  return (
    <div className="w-full mt-6 ">
      {cardsData?.length ? (
        <>
          {!removeCheck && (
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={cardsData.length === checkedList.length}
              className="!p-3"
            >
              {t("Common.checkAll")}
            </Checkbox>
          )}
          {removeCheck ? (
            <CardsGridLayout dataLength={cardsData.length} cardMinWidth="300px">
              {cardsData.map((item: any) => (
                <div key={item[keyForValue]} className="relative">
                  {React.Children.map(
                    // @ts-ignore
                    children,
                    (child: React.ReactElement<any>) => {
                      return React.cloneElement(child, { item });
                    }
                  )}
                </div>
              ))}
            </CardsGridLayout>
          ) : (
            <Checkbox.Group
              style={{ width: "100%" }}
              value={checkedList}
              onChange={onChange}
            >
              <CardsGridLayout
                dataLength={cardsData.length}
                cardMinWidth="300px"
              >
                {cardsData.map((item: any) => (
                  <div key={item[keyForValue]} className="relative">
                    <Checkbox
                      value={item[keyForValue]}
                      className="absolute top-4 left-3 rtl:right-3"
                    />
                    {React.Children.map(
                      // @ts-ignore
                      children,
                      (child: React.ReactElement<any>) => {
                        return React.cloneElement(child, { item });
                      }
                    )}
                  </div>
                ))}
              </CardsGridLayout>
            </Checkbox.Group>
          )}
          {pagination ? (
            <Pagination className="text-end !my-6" {...pagination} />
          ) : null}
        </>
      ) : (
        <Empty className="w-full" />
      )}
    </div>
  );
};

export default CardsList;
