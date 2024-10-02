import { Table as AntdTable, Divider, Grid, Pagination } from "antd";
import type { TableProps } from "antd/es/table";
import React from "react";
import CardGrid from "./cardGrid";
import { useMediaQuery } from "react-responsive";

const Table = (props: TableProps<any>) => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });

  const TableGrid: any = lg ? AntdTable : CardGrid;

  const AntdTableSettings = {
    ...props,
    dataSource: props.dataSource || [],
    pagination: props.pagination
      ? { ...props.pagination, style: { margin: " 12px" } }
      : false,
    className: "border dark:!border-none rounded-xl " + props.className,
    // scroll: { x: 1024 },
  };
  const CardGridSettings = {
    ...props,
    columns: props.columns,
    dataSource: props.dataSource,
    rowSelection: props.rowSelection || {},
    rowKey: props.rowKey,
  };

  const dataSettings = lg ? AntdTableSettings : CardGridSettings;

  return (
    <>
      <TableGrid {...dataSettings} />
      {!lg && (
        <>
          <Divider />
          <Pagination {...props.pagination} className={"flex-wrap"} />
        </>
      )}
    </>
  );
};

export default Table;
