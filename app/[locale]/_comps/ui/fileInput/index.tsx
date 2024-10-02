import type { UploadProps } from "antd";
import { Form, Upload } from "antd";
import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
const UploadFile = styled(Upload)`
  div {
    width: 100%;
  }
`;

const { Item } = Form;

const FileInput = ({
  form,
  name,
  label,
  rules,
}: {
  form: any;
  name: string | string[];
  label: string;
  rules?: any;
}) => {
  const [fileNames, setFileNames] = React.useState("");
  console.log("🚀 ~ fileNamessdcsdcsdc", form.getFieldValue(name));
  const props: UploadProps = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      const { status } = info.file;
      console.log("🚀 ~ onChange ~ info.file:", info.file);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      form.setFieldValue(name, info.file);
      setFileNames(info.file.name);
      // setFile(info.file);
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
    beforeUpload(file, FileList) {
      console.log("🚀 ~ beforeUpload ~ file:", file);
      // form.setFieldValue("file", file);
      return false;
    },
    style: {
      //   width: "100%",
      backgroundColor: "red",
    },

    showUploadList: false,
  };
  return (
    <Item name={name} label={label} rules={rules}>
      <UploadFile {...props}>
        <div className="  border border-gray-300 rounded-lg p-2 pl-3  flex  justify-start  cursor-pointer w-full">
          {fileNames ? (
            <div className="flex justify-between items-center gap-3 w-full ">
              <span>{fileNames}</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setFileNames("");
                  form.setFieldValue(name, "");
                }}
              >
                <MdDeleteOutline />
              </span>
            </div>
          ) : (
            <span className=" border-b border-gray-300 cursor-pointer flex items-center gap-3">
              {checkImageUrl(form.getFieldValue(name)) &&
                (checkVideoUrl(form.getFieldValue(name)) ? (
                  <video className="w-7 h-7">
                    <source src={form.getFieldValue(name)} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={form.getFieldValue(name)}
                    alt="upload"
                    width={20}
                    height={20}
                    className="round-full"
                  />
                ))}
              choose file
            </span>
          )}
        </div>
      </UploadFile>
    </Item>
  );
};

export default FileInput;

const checkImageUrl = (url: string) => {
  //it must start with a leading slash "/" or be an absolute URL (http:// or https://)
  const regex = /^\/|http(s)?:/;
  return regex.test(url);
};
const checkVideoUrl = (url) => {
  const regex = /^\/|http(s)?:/;
  const videoExtensions = /\.(mp4|avi|mov|wmv|flv)$/i;

  return regex.test(url) && videoExtensions.test(url);
};
