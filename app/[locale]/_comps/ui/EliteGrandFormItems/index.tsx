import { useAdminStore } from "@/store/adminStore";
import { Checkbox, Form } from "antd";
import React from "react";

// Add This to the submitted form
// ...getTargetedPlatformKeys({
//     isGrand: values.is_grand,
//     isElit: values.is_elit,
//   }),

interface EliteGrandFormItems {
  isVertical?: boolean;
}

const EliteGrandFormItems = (props: EliteGrandFormItems) => {
  const { permissions } = useAdminStore();

  return permissions?.setting.includes("read setting") ? (
    <>
      <h3
        className={` col-span-full my-6 mb-3 ${
          props.isVertical ? "font-medium text-lg" : "text-xl font-semibold"
        }`}
      >
        Target Platform
      </h3>
      <div className={`flex ${props.isVertical ? "flex-col gap-2" : "gap-5 "}`}>
        <Form.Item
          name="is_grand"
          valuePropName="checked"
          style={{ height: 10 }}
        >
          <Checkbox>Grand Community</Checkbox>
        </Form.Item>
        <Form.Item name="is_elit" valuePropName="checked">
          <Checkbox>Elite Platform</Checkbox>
        </Form.Item>
        <Form.Item name="is_lite" valuePropName="checked">
          <Checkbox>Elite Platform</Checkbox>
        </Form.Item>
      </div>
    </>
  ) : (
    <Form.Item
      name="is_grand"
      valuePropName="checked"
      initialValue={true}
      style={{ height: 10 }}
      hidden
    >
      <Checkbox value={true} checked>
        Grand Community
      </Checkbox>
    </Form.Item>
  );
};

export default EliteGrandFormItems;
