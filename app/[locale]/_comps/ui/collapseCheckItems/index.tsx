import { Checkbox } from "antd";
import CollapsedItem from "../collapsedItem";

const CollapsedBox = ({ label, data, checkedData, setCheckedData }) => {
  return (
    <CollapsedItem
      label={
        <div className=" flex items-center gap-2">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Checkbox
              checked={checkedData.length === data.length}
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedData(data.map((item) => item.value));
                } else {
                  setCheckedData([]);
                }
              }}
            />
          </div>
          <h4 className="text-3xl text-primary font-medium">{label}</h4>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div key={item.value}>
            <Checkbox
              checked={checkedData.includes(item.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedData([...checkedData, item.value]);
                } else {
                  setCheckedData(
                    checkedData.filter((data) => data !== item.value)
                  );
                }
              }}
            >
              {item.title}
            </Checkbox>
          </div>
        ))}
      </div>
    </CollapsedItem>
  );
};

export default CollapsedBox;
