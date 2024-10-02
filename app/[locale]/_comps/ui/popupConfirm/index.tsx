import { useInfluencerAfterAddingToCampaignHistory } from "@/store/influencerAfterAddingToCampaignHistory";
import { Modal } from "antd";
import { ModalProps } from "antd/es/modal";
import { useTranslations } from "next-intl";

import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Tooltip from "../toolTip";

export interface PopupConfirmProps extends ModalProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  afterFonfirmText?: React.ReactNode;
  confirmDesc?: React.ReactNode;
  nodeClassName?: string;
  loadingConfirm?: boolean;
  notOpenableFromOutside?: boolean;
  confirmType?: "cancel" | "success" | "danger" | "primary";
  open?: boolean;
  errorFound?: string | null;
  setErrorFound?: (error: string | null) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  isTypeTwo?: boolean;
  onClose?: any;
  dontThrowError?: boolean;
  disableTimeOut?: boolean;
}
const getButtonShape = (type) => {
  switch (type) {
    case "cancel":
      return {
        ghost: true,
        type: "primary",
        className: "!bg-primary/20 !border-0",
      };
    case "success":
      return {
        type: "primary",
        className: "!bg-success",
      };
    case "danger":
      return {
        type: "primary",
        danger: true,
      };
    default:
      return {
        type: "primary",
      };
  }
};

const PopupConfirm = (props: PopupConfirmProps) => {
  const {
    children,
    content,
    title,
    footer,
    afterFonfirmText,
    onCancel: handleCancel,
    nodeClassName,
    confirmDesc,
    loadingConfirm,
    confirmType,
    notOpenableFromOutside,
    errorFound,
    setErrorFound,
    disabled,
    fullWidth,
    onClose,
    dontThrowError,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(props?.open || false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFailConfirmed, setIsFailConfirmed] = useState(false);

  const { setLogObj, setIsAfterAddingOpen, isAfterAddingOpen, logObj } =
    useInfluencerAfterAddingToCampaignHistory();

  const t = useTranslations();
  const oncancel = (props) => {
    handleCancel && handleCancel(props);
    setIsModalOpen(false);
    setErrorFound && setErrorFound(null);
    setIsConfirmed(false);
  };
  const handleConfirmed = () => {
    setIsConfirmed(true);
    !props.isTypeTwo
      ? !props.disableTimeOut
        ? setTimeout(() => {
            setIsModalOpen(false);
            props?.onClose && props?.onClose();
            setErrorFound && setErrorFound(null);
            setIsConfirmed(false);
          }, 1500)
        : null
      : null;
  };
  const popupBtnsProps: any = {
    okButtonProps: {
      size: "large",
      block: true,
      shape: "round",
      ...getButtonShape(confirmType),
      loading: loadingConfirm,
      disabled: loadingConfirm,
      ...props.okButtonProps,
      onClick: async (e) => {
        try {
          props.onOk ? await props.onOk(e) : null;
          handleConfirmed();
        } catch (error) {
          setIsFailConfirmed(dontThrowError ? false : true);
          handleConfirmed();
        }
      },
    },
    cancelButtonProps: {
      block: true,
      size: "large",
      shape: "round",
      loading: loadingConfirm,
      disabled: loadingConfirm,
      ...getButtonShape("cancel"),
      ...props.cancelButtonProps,
    },
  };
  return (
    <>
      <div
        className={
          nodeClassName +
          `${disabled ? " cursor-not-allowed" : " cursor-pointer"}`
        }
        onClick={() =>
          !notOpenableFromOutside && !disabled && setIsModalOpen(true)
        }
      >
        {children && children}
      </div>
      <Modal
        {...props}
        {...popupBtnsProps}
        closable={props.closable || false}
        title={
          !isConfirmed ? (
            <h3 className="text-center text-2xl font-semibold mb-6">
              {title ? title : t("Common.confirmTitle")}
            </h3>
          ) : null
        }
        open={props?.open || isModalOpen}
        footer={isConfirmed ? null : footer}
        onCancel={oncancel}
        // onOk={async (e) => {
        //   props.onOk ? await props.onOk(e) : null;
        //   handleConfirmed();
        // }}
        styles={{
          ...props.styles,
          body: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            width: isConfirmed ? 470 : fullWidth ? "100%" : "90%",
            height: isConfirmed ? 350 : "auto",
            margin: "auto",
            ...props.styles?.body,
          },
        }}
      >
        {isConfirmed && props.isTypeTwo ? (
          <>
            <img
              src={"/imgs/common/checkmark.svg"}
              width={120}
              height={120}
              alt="check mark"
            />

            {/* <div className="capitalize text-center text-2xl font-semibold">
            {t("Campaigns.influencerAdded")}
          </div> */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2 font-bold">
                <FaRegCheckCircle className="text-success" size={30} />{" "}
                {logObj?.successed} {t("Campaigns.success")}
              </div>
              <div className="flex items-center gap-2 font-bold">
                <IoMdCloseCircleOutline className="text-danger" size={30} />{" "}
                {logObj?.failed} {t("Campaigns.failed")}
              </div>
            </div>
            <ul className="flex flex-col gap-2 w-full list-decimal overflow-y-auto thin-scroll my-2 pr-2">
              {logObj?.failedInfluencers?.map((item, i) => (
                <li key={item.id} className="flex gap-2 items-center">
                  <p className="text-danger w-1/3 text-nowrap overflow-hidden text-ellipsis">
                    {item.Name}
                  </p>
                  <Tooltip title={item.Reason}>
                    <p className="w-2/3 text-nowrap overflow-hidden text-ellipsis">
                      {item.Reason}
                    </p>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </>
        ) : isConfirmed ? (
          <>
            <img
              src={
                errorFound || isFailConfirmed
                  ? "/imgs/common/dislike.svg"
                  : "/imgs/common/checkmark.svg"
              }
              width={120}
              height={120}
              alt="check mark"
              loading="eager"
            />

            {afterFonfirmText ? (
              <div className="capitalize text-2xl font-semibold">
                {errorFound || isFailConfirmed
                  ? "some thing went wrong"
                  : afterFonfirmText}
              </div>
            ) : null}
          </>
        ) : (
          <div className="flex flex-col w-full">
            {confirmDesc ? confirmDesc : null}
            {content ? content : null}
          </div>
        )}
      </Modal>
    </>
  );
};

export default PopupConfirm;
