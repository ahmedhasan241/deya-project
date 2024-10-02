import { Empty } from "antd";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const ReadOnlyInputInformation = ({
  label,
  type = "default",
  value,
}: {
  label: string;
  value: any;
  type?: "date" | "color" | "default" | "location" | "image" | string;
}) => {
  const getValueType = (typ) => {
    switch (typ) {
      case "date":
        return (
          <div className="flex items-center justify-between">
            {value}
            <FaCalendarAlt className="text-primary" />
          </div>
        );
      case "location":
        return (
          <div className="flex items-center justify-between">
            {value}
            <FaMapLocationDot className="text-primary" />
          </div>
        );
      case "color":
        return (
          <div className="w-2/3 h-full" style={{ backgroundColor: value }} />
        );
      case "image":
        return (
          <div className="grid grid-cols-2 gap-2">
            {value?.map((item, i) => (
              <div key={i} className="min-h-24">
                <Image
                  src={item.url}
                  alt={item.name}
                  fill
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        );

      default:
        return value;
    }
  };
  return value ? (
    <div className="flex flex-col gap-1">
      {type === "image" ? (
        getValueType(type)
      ) : (
        <>
          <span className="text-lg font-medium">{label}</span>
          <div className="rounded-md border border-Gray3 px-3 py-4 w-full h-full">
            {getValueType(type)}
          </div>
        </>
      )}
    </div>
  ) : (
    <Empty />
  );
};

export default ReadOnlyInputInformation;
