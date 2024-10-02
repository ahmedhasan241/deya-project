import React from "react";
import ReactCountryFlag from "react-country-flag";
import Tooltip from "../toolTip";

interface CountryFlagProps {
  code: string;
  name?: string;
  size?: string;
  noTooltip?: boolean;
}

const CountryFlag = (props: CountryFlagProps) => {
  const countryCodeMap = {
    KSA: "sa",
    ksa: "sa",
  };

  const mappedCode = countryCodeMap[props.code] || props.code;

  return props?.noTooltip ? (
    <ReactCountryFlag
      countryCode={mappedCode}
      svg
      style={{
        width: props?.size ? props?.size : "1.25rem",
        height: props?.size ? props?.size : "1.25rem",
        borderRadius: 100,
        objectFit: "cover",
      }}
    />
  ) : (
    <Tooltip title={props.name || mappedCode}>
      <ReactCountryFlag
        countryCode={mappedCode}
        svg
        style={{
          width: props?.size ? props?.size : "1.25rem",
          height: props?.size ? props?.size : "1.25rem",
          borderRadius: 100,
          objectFit: "cover",
        }}
      />
    </Tooltip>
  );
};

export default CountryFlag;
