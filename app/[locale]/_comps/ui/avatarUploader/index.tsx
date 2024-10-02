import { Form, message } from "antd";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Upload, { RcFile } from "antd/es/upload";

import { useTranslations } from "next-intl";
import { getBase64 } from "@/utils/getBase64";
import { UploadChangeParam, UploadListType } from "antd/es/upload/interface";

const { Item } = Form;

const AvatarUploader = ({
  form,
  fieldName = "avatar",
  label,
  listType = "picture-card",
  single = false,
}: {
  form: any;
  fieldName?: string;
  label?: any;
  listType?: UploadListType | undefined;
  single?: boolean;
}) => {
  const t = useTranslations();
  const [fileList, setFileList] = useState<any>([]);
  console.log("🚀 ~ fileList:", fileList);
  const [messageApi, contextHolder] = message.useMessage();

  const [loadingImage, setLoadingImage] = useState(false);

  const beforeUpload = (file: RcFile) => {
    const isLt2M = file.size / 1024 / 1024 < 10;

    if (!isLt2M) {
      messageApi.error("large image");
    }
    return false;
  };

  const handleOnChange = async (info: UploadChangeParam) => {
    const finalData = info.fileList[0];
    const imageUrl = await getBase64(info.fileList[0]);
    console.log("🚀 ~ handleOnChange ~ imageUrl:", imageUrl);
    // const formData = new FormData();
    // formData.append("image", finalData,);
    // console.log('formData', formData);
    form.setFieldValue(fieldName, imageUrl);
  };

  return (
    <Item
      label={label}
      name={fieldName}
      valuePropName="file"
      getValueFromEvent={async (e: any) => {
        setLoadingImage(true);

        console.log("🚀 ~ imageUrl ~ getBase64:", await getBase64(e.file));
        const imageUrl = await getBase64(e.file).then((value) => {
          setFileList((old) => [
            ...old,
            {
              uid: e.file.uid,
              name: e.file.name,
              status: "done",
              url: value || "",
              thumbUrl: value || "",
            },
          ]);

          setLoadingImage(false);
          form.setFieldValue(fieldName, imageUrl);
        });

        return imageUrl;
      }}
      style={{ marginBottom: "8px" }}
    >
      <Upload
        name="avatar"
        listType={listType}
        accept="image/*"
        // className="avatar-uploader"
        //showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleOnChange}
        fileList={fileList}
      >
        {fileList.length < 1 && single && (
          <div>
            {loadingImage ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
        Upload
      </Upload>
    </Item>
  );
};

export default AvatarUploader;
