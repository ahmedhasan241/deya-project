"use client";

import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Image,
  Upload,
  Form,
  Radio,
  Input,
  Select,
} from "antd";
import type { GetProp, UploadFile, UploadProps, FormProps } from "antd";
import { FaRegBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
import { BsFiles } from "react-icons/bs";
import InputPhoneNumber from "@/app/[locale]/_comps/ui/InputPhoneNumber";

import Loading from "@/app/[locale]/_comps/ui/loading";
import { useUserActions } from "../../_api/actions";
const { Item } = Form;
const { TextArea } = Input;
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface IndividualForm {}

const IndividualForm: React.FC<IndividualForm> = (props: IndividualForm) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [value, setValue] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { userEdit, userEditLoading } = useUserActions();

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button
      style={{ border: 0, background: "none", color: "white" }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [selectedValue, setSelectedValue] = useState("1"); // Initialize state for selected value
  const [form] = Form.useForm();
  const image = Form.useWatch("image", form);
  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    form.resetFields(["company_name"]);
  };
  const [homePhone, setHomePhone] = useState<any>({});
  const [officePhone, setOfficePhone] = useState<any>({});
  const [cellPhone, setCellPhone] = useState<any>({});
  const [officeFaxPhone, setOfficeFaxPhone] = useState<any>({});
  const [initialImage, setInitialImage] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  useEffect(() => {
    const handelImage = async () => {
      if (image) {
        const base64: any = await getBase64(image[0].originFileObj as FileType);
        setImageUrl(base64);
      }
    };
    handelImage();
  }, [image]);

  const home = Form.useWatch("home", form);
  const office = Form.useWatch("office", form);
  const cell = Form.useWatch("cell", form);
  const officeFax = Form.useWatch("office_fax", form);
  const validateAtLeastOne = (_, value) => {
    const home = form.getFieldValue("home");
    const office = form.getFieldValue("office");
    const cell = form.getFieldValue("cell");
    const officeFax = form.getFieldValue("office_fax");

    if (home || office || cell || officeFax) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("At least one phone number is required"));
  };

  const onFinish = async (values) => {
    try {
      const formValuesWithSubbrandId = {
        password: values.password,
        avatar: image?.length ? image[0].originFileObj : null,
        position: values.position,
        title: values.title,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        secondary_email: values.secondary_email,
        website: values.website_url,
        street: values.street,
        street1: values.street_1,
        user_name: values.user_name,
        state: values.state,
        city: values.city,
        country: values.country,
        note: values.note,
        company: values.company_name,
        postcode: values.postcode,
        home_number: values.home.slice(homePhone.dialCode?.length),
        home_code: homePhone.dialCode,
        office_number: values.home.slice(officePhone.dialCode?.length),
        office_code: officePhone.dialCode,
        cell_number: values.home.slice(cellPhone.dialCode?.length),
        cell_code: cellPhone.dialCode,
        fax_number: values.home.slice(officeFaxPhone.dialCode?.length),
        fax_code: officeFaxPhone.dialCode,
        theme: "dark",
      };

      await userEdit({ ...formValuesWithSubbrandId }).then(() => {
        // refetch();
      });
    } catch (error) {
      console.error("Error while Editing Profile:", error);
    }
  };
  return (
    <div className="pt-10">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="!w-full pt-5 flex flex-row"
        form={form}
      >
        <div className="w-2/6 flex flex-col items-center">
          <Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e: any) => {
              console.log("🚀 ~ InformationForm ~ e:", e);
              if (Array.isArray(e)) {
                return e;
              }
              return e?.fileList;
            }}
            className="flex justify-center text-center !mb-0"
          >
            <Upload
              accept="image/*"
              beforeUpload={() => false}
              listType="picture-circle"
              showUploadList={false}
              multiple={false}
              maxCount={1}
              fileList={image || []}
              className="flex justify-center  !mb-0 !ml-3"
            >
              {imageUrl || initialImage ? (
                <div>
                  <Avatar size={125} src={imageUrl || initialImage} />
                </div>
              ) : (
                <button style={{ border: 0, background: "none" }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                  {imageUrl}
                </button>
              )}
            </Upload>
          </Item>
          <h2 className="text-[#F79400] mt-4">Image Profile</h2>

          <Button
            className="mt-3 !text-3xl !rounded-[14px] !w-48 !h-14 !py-4  !bg-[#F79400] !text-white  !border-none"
            icon={<BsShare />}
          >
            Share
          </Button>

          <div className="mt-9 !flex !flex-col !justify-start !justify-items-start !items-start">
            <h2 className="text-[#F79400] text-2xl mb-3 font-semibold">
              Theme Mode
            </h2>
            <div className="flex flex-row gap-6 !justify-start">
              <Avatar
                shape="square"
                size="large"
                className="!bg-black cursor-pointer"
                onClick={() => {}}
              />
              <Avatar
                shape="square"
                size="large"
                className="!bg-white cursor-pointer"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="w-4/6">
          {/* <div className="flex flex-row justify-end items-end ">
                <Button
                  icon={<FaRegEdit size={24} />}
                  iconPosition={"end"}
                  className="!bg-transparent !border-none !text-xl flex items-center justify-center align-baseline !px-2 !text-[#F79400]"
                >
                  Edit
                </Button>
                <Button
                  icon={<FaRegTrashAlt size={24} />}
                  iconPosition={"end"}
                  className="!bg-transparent !border-none !text-xl flex items-center justify-center align-baseline !px-2 !text-[#8E8E8E]"
                >
                  Delete
                </Button>
              </div> */}
          <div className="!w-full">
            <div className="my-16">
              <Item
                label="Profile URL"
                layout="vertical"
                name="profile_url"
                //   rules={[{ required: true, message: "This Field Required" }]}
                className="!w-full profile-link"
              >
                <Input
                  addonAfter={<BsFiles />}
                  placeholder="Link"
                  className="!w-full "
                  size="large"
                />
              </Item>
            </div>
            <div className="mt-24 check-box">
              <Radio.Group
                className="!flex !flex-row !justify-start gap-16"
                onChange={handleRadioChange}
                value={selectedValue}
              >
                <Radio value="1" className="!text-2xl">
                  Individual
                </Radio>
                <Radio value="2" className="!text-2xl">
                  Related to company
                </Radio>
              </Radio.Group>
            </div>
            <div className="mt-4">
              <div className="">
                <Item
                  layout="vertical"
                  label="Company Name"
                  name="company_name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  {selectedValue === "1" ? (
                    <Input className="!w-full " size="large" />
                  ) : null}
                  {selectedValue === "2" ? (
                    <Select
                      allowClear
                      className="!h-full"
                      options={[]}
                      placeholder="Select Company Name"
                    />
                  ) : null}
                </Item>
              </div>
            </div>
            <div className="mt-16 ">
              <div className="">
                <Item layout="vertical" label="Position" name="position">
                  <Input className="!w-full " size="large" />
                </Item>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-5 gap-4">
              <div className="col-span-1">
                <Item
                  layout="vertical"
                  label="Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="!w-full " size="large" />
                </Item>
              </div>
              <div className="col-span-2">
                <Item
                  layout="vertical"
                  label="First Name"
                  name="first_name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="!w-full " size="large" />
                </Item>
              </div>
              <div className="col-span-2">
                <Item layout="vertical" label="Last Name" name="last_name">
                  <Input className="!w-full " size="large" />
                </Item>
              </div>
            </div>

            <div className="mt-16 bg-[#313131] p-6 !h-[350px]">
              <h2 className="text-[17px] text-[#F79400] flex justify-start">
                Phone contact info :
              </h2>
              <div className=" grid grid-cols-2 gap-4 ">
                <div className="col-span-1 mt-6">
                  <Item
                    layout="vertical"
                    label="Home"
                    name="home"
                    rules={[{ validator: validateAtLeastOne }]}
                  >
                    <InputPhoneNumber
                      onCountryChange={(data) => {
                        setHomePhone(data);
                      }}
                    />
                  </Item>
                </div>
                <div className="col-span-1 mt-6">
                  <Item
                    layout="vertical"
                    label="Office"
                    name="office"
                    rules={[{ validator: validateAtLeastOne }]}
                  >
                    <InputPhoneNumber
                      onCountryChange={(data) => {
                        setOfficePhone(data);
                      }}
                    />
                  </Item>
                </div>
                <div className="col-span-1 mt-16">
                  <Item
                    layout="vertical"
                    label="Cell"
                    name="cell"
                    rules={[{ validator: validateAtLeastOne }]}
                  >
                    <InputPhoneNumber
                      onCountryChange={(data) => {
                        setCellPhone(data);
                      }}
                    />
                  </Item>
                </div>
                <div className="col-span-1 mt-16">
                  <Item
                    layout="vertical"
                    label="Office Fax"
                    name="office_fax"
                    rules={[{ validator: validateAtLeastOne }]}
                  >
                    <InputPhoneNumber
                      onCountryChange={(data) => {
                        setOfficeFaxPhone(data);
                      }}
                    />
                  </Item>
                </div>
              </div>
            </div>
            <div className="mt-16 bg-[#313131] p-6 !h-[350px]">
              <h2 className="text-[17px] text-[#F79400] flex justify-start">
                Web :
              </h2>
              <div className=" grid grid-cols-2 gap-4 ">
                <div className="col-span-1 mt-6">
                  <Item
                    layout="vertical"
                    label="Primary Email :"
                    name="email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-1 mt-6">
                  <Item
                    layout="vertical"
                    label="Secondary Email :"
                    name="secondary_email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-2 mt-10">
                  <Item layout="vertical" label="Website" name="website">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
              </div>
            </div>
            <div className="mt-16 bg-[#313131] p-6 !h-[450px]">
              <h2 className="text-[17px] text-[#F79400] flex justify-start">
                Home Address :
              </h2>
              <div className=" grid grid-cols-2 gap-4 ">
                <div className="col-span-1 mt-6">
                  <Item layout="vertical" label="Street" name="street">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-1 mt-6">
                  <Item layout="vertical" label="Street1" name="street_1">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-1 mt-10">
                  <Item layout="vertical" label="State" name="state">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-1 mt-10">
                  <Item layout="vertical" label="City" name="city">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-1 mt-10">
                  <Item layout="vertical" label="Country" name="country">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
                <div className="col-span-1 mt-10">
                  <Item layout="vertical" label="Postcode" name="postcode">
                    <Input className="!w-full " size="large" />
                  </Item>
                </div>
              </div>
            </div>
            <div className="mt-16 bg-[#313131] p-10 !h-[350px]">
              <Item layout="vertical" label="Note :" name="note">
                <TextArea
                  value={value}
                  className="!w-full "
                  onChange={(e) => setValue(e.target.value)}
                  autoSize={{ minRows: 10 }}
                />
              </Item>
            </div>
            <div className="mt-16 grid  grid-cols-2 gap-4 px-10">
              <div className="col-span-1">
                <Item
                  layout="vertical"
                  label="User Name"
                  name="user_name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="!w-full " size="large" />
                </Item>
              </div>
              <div className="col-span-1">
                <Item
                  layout="vertical"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="!w-full " size="large" />
                </Item>
              </div>
            </div>
            <div className="flex my-12 justify-center">
              <Button
                className="mt-11 !rounded-[14px] !w-48 !h-14 !py-4 !text-3xl !bg-[#F79400] !text-white  !border-none"
                icon={<FaRegBookmark />}
                loading={userEditLoading}
                htmlType="submit"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default IndividualForm;
