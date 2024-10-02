import { Statistic } from "antd";
import React from "react";
import CountUp from "react-countup";

const formatter = (value: string) => {
  function extractNumberAndSuffix(inputString) {
    const match = inputString.match(/([\d.]+)([a-zA-Z]*)/);
    if (!match) {
      return null;
    }
    const numericPart: any = parseFloat(match[1]);
    const suffixPart = match[2];
    return { numericPart, suffixPart };
  }
  // const formattedNumber = new Intl.NumberFormat("en-US", {
  //   notation: "compact",
  //   compactDisplay: "short",
  // }).format(value);

  return (
    <CountUp
      end={extractNumberAndSuffix(value)?.numericPart}
      separator="."
      suffix={extractNumberAndSuffix(value)?.suffixPart}
      className=""
    />
  );
};
const CountStatics = ({
  label,
  value,
  valueStyle = {
    color: "#3A3A3A80",
    fontSize: 18,
    fontWeight: 600,
  },
}: {
  label?: React.ReactNode;
  value?: string;
  valueStyle?: React.CSSProperties | undefined;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Statistic
        value={value}
        //  @ts-ignore
        formatter={formatter}
        valueStyle={valueStyle}
      />
      {label && <span className="font-semibold"> {label}</span>}
    </div>
  );
};

export default CountStatics;
