import dayjs from "dayjs";

export const getDaysArray = (startDate, endDate) => {
  const daysArray: any = [];
  let currentDay = dayjs(startDate);
  while (currentDay.isBefore(endDate) || currentDay.isSame(endDate, "day")) {
    daysArray.push(currentDay.format("YYYY-MM-DD"));
    currentDay = currentDay.add(1, "day");
  }

  return daysArray;
};
