import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InputPhoneNumber = ({ onCountryChange, ...props }: any) => {
  return (
    <PhoneInput
      containerStyle={{
        height: 55,
        background: "#232323",
        borderRadius: "8px",
        color: "white",
      }}
      country={props?.country ? props?.counrty : "eg"}
      value={props.value}
      // onChange={(value) => {console.log(value)}}
      //   dropdownStyle={{ height: "50px" }}
      inputStyle={{
        width: "100%",
        height: "100%",
        background: "#232323",
        color: "white",
      }}
      buttonStyle={{
        backgroundColor: "transparent",
      }}
      //   searchStyle={{ color: "green" }}
      //   inputClass="bg-primary"
      //   buttonClass="bg-primary"
      //dropdownClass=""
      //searchClass=""
      enableSearch={true}
      //   disableCountryCode={true}
      {...props}
      onChange={(val, data) => {
        props.onChange && props.onChange(val);
        onCountryChange && onCountryChange(data);
      }}
    />
  );
};

export default InputPhoneNumber;
