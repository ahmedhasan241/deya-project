import { ExcelRenderer } from "react-excel-renderer";
import { useState, useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import classNames from "classnames";
import ImportHideListPopup from "@/app/[locale]/settings/hideList/_comps/hideListForm/importHideListPopup";
const ExcelToArrayOfObjects = ({
  onChange,
  onRemove,
  title,
  disabled,
}: {
  onChange: (data: any) => void;
  onRemove?: () => void;
  title?: string;
  disabled?: boolean;
}) => {
  const [fileNames, setFileNames] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const convertRowsToArray = (rows: any) => {
    console.log("🚀 ~ convertRowsToArray ~ rows:", rows);
    const header = rows[0];
    console.log("🚀 ~ convertRowsToArray ~ header:", header);
    const data = rows.slice(1);
    console.log("🚀 ~ convertRowsToArray ~ data:", data);
    const result = data.map((row) => {
      let obj = {};
      row.forEach((cell, index) => {
        if (!isNaN(cell)) {
          cell = Number(cell);
        }
        if (
          typeof cell === "string" &&
          cell?.includes("[") &&
          cell?.includes("]")
        ) {
          cell = JSON.parse(cell);
        }
        obj[header[index]] = cell;
      });
      return obj;
    });
    console.log("🚀 ~ result ~ result:", result);
    onChange(result);
  };

  const fileHandler = (fileObj) => {
    console.log("🚀 ~ fileHandler ~ event:", event);
    // let fileObj = event.target.files[0];
    setFileNames(fileObj.name);
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        toast.error(err);
      } else {
        convertRowsToArray(resp.rows);
      }
    });
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex gap-3 items-center">
      {isOpen ? (
        <ImportHideListPopup
          open={isOpen}
          onCancel={onCancel}
          fileHandler={fileHandler}
        />
      ) : null}
      {/* {fileNames ? (
        <button  className="flex gap-2 px-3  py-2 rounded-full bg-primary text-white items-center ">
          {fileNames}
          <MdDeleteOutline
            onClick={() => {
              setFileNames("");
              if (inputRef.current) {
                // @ts-ignore
                inputRef.current.value = "";
              }
              onRemove && onRemove();
            }}
            className="cursor-pointer"
          />
        </button>
      ) : ( */}
      <button
        onClick={() => setIsOpen(true)}
        className={classNames(
          "w-fit bg-primary text-white text-center py-2 px-4 rounded-full ",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
        type="button"
        disabled={disabled}
        // htmlFor="file"
      >
        {title || "Upload Excel"}
      </button>
      {/* )} */}

      {/* <input
        id="file"
        type="file"
        accept=".xlsx"
        disabled={disabled}
        style={{ display: "none" }}
        onChange={fileHandler}
        ref={inputRef}
      /> */}
    </div>
  );
};

export default ExcelToArrayOfObjects;
