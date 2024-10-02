import dayjs from "dayjs";

interface DateFormatterProps {
  date?: string;
  formatting:
    | "DD/MM/YYYY"
    | "MMMM YYYY"
    | "dddd, D MMMM YYYY - h:mmA"
    | "DD/MM/YYYY - h:mm A"
    | "dddd, D MMMM YYYY";
}

export const DateFormatter = ({ date, formatting }: DateFormatterProps) => {
  return dayjs(date || undefined)
    .locale("ar")
    .format(formatting);
};
