import { Form, Input, Segmented, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useState } from "react";
type Align = "En" | "AR";
const { Item } = Form;
const EnArInput = ({
  label,
  parentName,
  arabicName,
  englishName,
  rules,
  textArea,
}: {
  label: string;
  parentName?: any;
  arabicName: string;
  englishName: string;
  rules?: any;
  textArea?: Boolean;
}) => {
  const [language, setLanguage] = useState<Align>("En");
  console.log(
    "🚀 ~ language:",
    parentName
      ? Array.isArray(parentName)
        ? [parentName, englishName].flat()
        : [parentName, englishName]
      : englishName
  );

  return (
    <div>
      <div className="flex justify-between items-center w-full  text-md">
        <span>{label}</span>
        <Segmented
          defaultValue="En"
          style={{ marginBottom: "8px" }}
          onChange={(value) => setLanguage(value as Align)}
          options={["En", "AR"]}
        />
      </div>
      <div className={`${language === "En" ? "block" : "hidden"}`}>
        <Item
          rules={rules}
          name={
            parentName
              ? Array.isArray(parentName)
                ? [parentName, englishName].flat()
                : [parentName, englishName]
              : englishName
          }
        >
          {textArea ? <TextArea /> : <Input placeholder="Enter" size="large" />}
        </Item>
      </div>
      <div className={`${language === "AR" ? "block" : "hidden"}`}>
        <Item
          rules={rules}
          name={parentName ? [parentName, arabicName] : arabicName}
        >
          {textArea ? <TextArea /> : <Input placeholder="Enter" size="large" />}
        </Item>
      </div>
    </div>
  );
};

export default EnArInput;
