import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
const format = "hh:mm a";
const formatDate = "YYYY-MM-DD";

export const getDateIsValid = (date, time = false) => {
  return time
    ? dayjs(date, "HH:mm").isValid()
      ? dayjs(date, "HH:mm")
      : undefined
    : dayjs(date).isValid()
    ? dayjs(date)
    : undefined;
};
