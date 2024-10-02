// *for use this component*
// <DraggerImage imageUrl={imageUrl} setImageUrl={setImageUrl} label="Image" />
// when pass values to backend, make key file:null to ignore send extra data = > {...values, image:imageUrl, file:null} ,
// file key used for ability to reset Dragger value , if component used at modal form

import { getBase64 } from "@/utils/getBase64";
import { Form, UploadProps } from "antd";
import Dragger from "antd/es/upload/Dragger";
import Image from "next/image";
import React from "react";
import { SlCloudUpload } from "react-icons/sl";
const { Item } = Form;

const DraggerImage = ({
  imageUrl,
  setImageUrl,
  label,
  special = false,
}: {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
  label?: string;
  special?: boolean;
}) => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".png, .jpg, .jpeg",
    action: undefined,
    showUploadList: false,
    maxCount: 1,
    onChange: async (info) => {
      // const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      // if (info.file.status === "done") {
      const base64: any = await getBase64(info.file.originFileObj);
      setImageUrl(base64);
      // }
    },
    onRemove: () => {
      setImageUrl(null);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    style: {
      backgroundColor: "#A9690026",
      color: "#9B7029",
      marginTop: 12,
    },
  };
  return (
    <Item
      rules={
        !special
          ? [{ required: !imageUrl, message: "Please input your image!" }]
          : [{ required: false, message: "Please input your image!" }]
      }
      label={label}
      name="file"
    >
      <Dragger {...props}>
        {imageUrl ? (
          <div className="mt-3 flex justify-center">
            <img src={imageUrl} alt="office image" width={200} height={200} />
          </div>
        ) : (
          <div className="flex flex-col gap-3 justify-center items-center">
            <SlCloudUpload size={50} />
            <p className="text-sm font-medium">
              Click or drag file to this area to upload
            </p>
          </div>
        )}
      </Dragger>
    </Item>
  );
};

export default DraggerImage;
