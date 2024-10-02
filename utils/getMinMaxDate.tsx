import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

dayjs.extend(minMax);

export const getMinMaxDates = (dates) => {
  const validDateObjects = dates
    .filter((date) => dayjs(date).isValid())
    .map((date) => dayjs(date));

  const maxDate = dayjs.max(validDateObjects);
  const minDate = dayjs.min(validDateObjects);
  return { maxDate, minDate };
};
