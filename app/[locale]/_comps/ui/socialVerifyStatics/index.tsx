import { Badge, Tooltip } from "antd";
import { MdVerified } from "react-icons/md";
import CountStatics from "../countStatics";
import { getSocialIcon, getSocialLink } from "@/utils/getSocial";

// function simplifyNumber(number) {
//   const units = ["k", "m", "b", "t"];
//   const order = Math.floor(Math.log10(number) / 3);
//   if (order === 0) return number;
//   const unitName = units[(order - 1) % 4];
//   const num = number / Math.pow(10, order * 3);
//   return num.toFixed(1) + unitName;
// }
export function simplifyNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "m";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "k";
  } else {
    return number.toString();
  }
}

const SocialVerifyStatics = ({
  name,
  value,
  vertical = false,
  simpleCount = false,
}) => {
  return (
    <div
      className={
        "flex gap-2 items-center " + (vertical ? "flex-col gap-0" : "")
      }
    >
      <Badge
        count={
          value.verified ? <MdVerified className="text-[#179cf0]" /> : null
        }
        styles={{ root: { padding: 0, minWidth: 30 } }}
      >
        <Tooltip placement="top" title={value.username || value.user_name}>
          <a
            // className="h-fit w-fit flex p-2 rounded-lg cursor-pointer bg-[#D59B3F]/25"
            target="_blank"
            href={getSocialLink({
              status: name,
              userName: value.username || value.user_name,
            })}
          >
            {getSocialIcon({ icon: name })}
          </a>
        </Tooltip>
      </Badge>
      {value.count || value.followers ? (
        <CountStatics
          // label={t("Influencers.followers")}
          value={
            (simpleCount
              ? simplifyNumber(value.count || value.followers)
              : value.count || value.followers) + ""
          }
          valueStyle={{
            color: "#D59B3F",
            fontSize: 16,
            fontWeight: 600,
          }}
        />
      ) : null}
    </div>
  );
};

export default SocialVerifyStatics;
