import { ColumnType, ColumnsType, TableProps } from "antd/es/table";
import React, { useState } from "react";
import { TbSquareChevronsDown } from "react-icons/tb";
import { Checkbox, Empty } from "antd";
import { useTranslations } from "next-intl";
import { TableRowSelection } from "antd/es/table/interface";
const CardGrid = (props: TableProps<any>) => {
  const {
    dataSource,
    columns,
    expandable,
    rowSelection,
    rowKey = (i) => i.id,
  } = props;

  const t = useTranslations();
  return (
    <div className="">
      {rowSelection && (
        <div className="flex items-center gap-2 mb-3">
          <Checkbox
            checked={
              rowSelection.selectedRowKeys?.length === dataSource?.length
            }
            onChange={(e) => {
              if (e.target.checked) {
                // @ts-ignore
                rowSelection?.onChange?.(dataSource?.map(rowKey));
              } else {
                // @ts-ignore
                rowSelection?.onChange?.([]);
              }
            }}
          >
            Select All
          </Checkbox>
          <span>Selected : {rowSelection.selectedRowKeys?.length}</span>
        </div>
      )}
      {dataSource?.length ? (
        dataSource?.map((dataItem: any, i) => (
          <CardGridItem
            key={i}
            dataItem={dataItem}
            columns={columns}
            expandable={expandable}
            rowSelection={rowSelection}
            rowKey={String(rowKey).split(".")[1] || "id"}
          />
        ))
      ) : (
        <div className=" flex items-center justify-center min-h-[200px] h-full w-full">
          <Empty className=" mb-4" />
        </div>
      )}
    </div>
  );
};

export default CardGrid;

const CardGridItem = ({
  dataItem,
  columns,
  expandable,
  rowSelection,
  rowKey,
}: {
  dataItem: any;
  columns: ColumnsType<any> | undefined;
  expandable?: any;
  rowSelection?: any;
  rowKey: string;
}) => {
  return (
    <div className="rounded-xl shadow-card p-3 mb-2 overflow-hidden">
      {rowSelection && (
        <Checkbox
          className="!mb-2"
          checked={rowSelection.selectedRowKeys?.includes(dataItem[rowKey])}
          onChange={(e) => {
            if (e.target.checked) {
              rowSelection.onChange?.([
                dataItem[rowKey],
                ...rowSelection.selectedRowKeys,
              ]);
            } else {
              rowSelection.onChange?.(
                rowSelection.selectedRowKeys.filter(
                  (key) => key !== dataItem[rowKey]
                )
              );
            }
          }}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4 text-sm ">
        {columns?.map((col: ColumnType<any> | any, j) =>
          col.dataIndex || col.title ? (
            <div key={j} className="flex items-center gap-2 flex-wrap">
              <span className="font-bold">{col.title}</span>
              <span className="text-xs md:text-sm    whitespace-pre-wrap   ">
                {col.render
                  ? col.dataIndex
                    ? Array.isArray(col.dataIndex)
                      ? col.render(dataItem[col.dataIndex[0]][col.dataIndex[1]])
                      : col.render(dataItem[col.dataIndex])
                    : col.render(dataItem)
                  : Array.isArray(col.dataIndex)
                  ? dataItem[col.dataIndex[0]]?.[col.dataIndex[1]]
                  : dataItem[col.dataIndex]}
              </span>
            </div>
          ) : null
        )}
      </div>
      {expandable && (
        // @ts-ignore
        <ExpandAbleComp render={expandable?.expandedRowRender(dataItem)} />
      )}
    </div>
  );
};

const ExpandAbleComp = ({ render }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div>
      <span
        className="cursor-pointer mb-2"
        onClick={() => setIsExpand(!isExpand)}
      >
        <TbSquareChevronsDown
          className={isExpand ? "rotate-180" : ""}
          size={20}
        />
      </span>
      {isExpand && render}
    </div>
  );
};
