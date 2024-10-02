import { Form, Input, Segmented } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const { Item } = Form;

type inputOption = {
  label: any;
  name: any;
  isTextArea?: boolean;
  otherFormProps?: any;
};
interface MultiLanguageInputTypes {
  arOption: inputOption;
  enOption: inputOption;
  containerClassName?: string;
}

const MultiLanguageInput = ({
  arOption,
  enOption,
  containerClassName,
}: MultiLanguageInputTypes) => {
  const [language, setLanguage] = useState("En");
  return (
    <div className={"relative pt-3 mt-3 " + containerClassName}>
      <Segmented<string>
        defaultValue="En"
        style={{ marginBottom: "8px" }}
        onChange={(value) => setLanguage(value)}
        options={["En", "AR"]}
        className="absolute top-0 right-0 z-10"
      />
      <Item
        {...enOption.otherFormProps}
        // rules={[{ required: true, message: "Please enter title" }]}
        label={enOption.label}
        name={enOption.name}
        style={{ display: language === "En" ? "unset" : "none" }}
      >
        {enOption.isTextArea ? (
          <TextArea size="large" placeholder="Enter" />
        ) : (
          <Input size="large" placeholder="Enter" />
        )}
      </Item>
      <Item
        {...arOption.otherFormProps}
        // rules={[{ required: true, message: "Please enter title" }]}
        label={arOption.label}
        name={arOption.name}
        style={{ display: language === "En" ? "none" : "unset" }}
      >
        {arOption.isTextArea ? (
          <TextArea size="large" placeholder="Enter" />
        ) : (
          <Input size="large" placeholder="Enter" />
        )}
      </Item>
    </div>
  );
};

export default MultiLanguageInput;
