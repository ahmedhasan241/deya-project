import Image from "next/image";
import { FaFacebookF, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const getSocialLink = ({ status, userName }) => {
  switch (status) {
    case "face":
    case "facebook":
      return `https://facebook.com/${userName}`;
    case "insta":
    case "instagram":
      return `https://www.instagram.com/${userName}`;
    case "snap":
    case "snapchat":
      return `https://www.snapchat.com/add/${userName}`;
    case "tiktok":
      return `https://www.tiktok.com/@${userName}`;
    case "twitter":
      return `https://twitter.com/${userName}`;
    case "phone":
      return `tel:${userName}`;
    case "whatsapp":
      return `https://wa.me/${userName}`;

    default:
      return userName;
  }
};

export const getSocialIcon = ({ icon, size = 30 }) => {
  switch (icon) {
    case "face":
    case "facebook":
      return (
        <img
          src={"/imgs/social/face.svg"}
          alt={icon}
          width={size}
          height={size}
          style={{ width: size }}
        />
      );
    case "insta":
    case "instagram":
      return (
        <img
          src={"/imgs/social/insta.svg"}
          alt={icon}
          width={size}
          height={size}
          style={{ width: size }}
        />
      );
    case "snap":
    case "snapchat":
      return (
        <img
          src={"/imgs/social/snap.svg"}
          alt={icon}
          width={size}
          height={size}
          style={{ width: size }}
        />
      );
    case "tiktok":
      return (
        <img
          src={"/imgs/social/tiktok.svg"}
          alt={icon}
          width={size}
          height={size}
          style={{ width: size }}
        />
      );
    case "twitter":
      return (
        <img
          src={"/imgs/social/xtwiter.svg"}
          alt={icon}
          width={size}
          height={size}
          style={{ width: size }}
        />
      );

    default:
      break;
  }
};

export const getSocialIconSvg = ({
  icon,
  size = 30,
  color,
}: {
  icon: string;
  size: number;
  color?: string;
}) => {
  switch (icon) {
    case "face":
    case "facebook":
      return <FaFacebookF size={size} color={color} />;
    case "insta":
    case "instagram":
      return <FaInstagram size={size} color={color} />;
    case "snap":
    case "snapchat":
      return <FaSnapchat size={size} color={color} />;
    case "tiktok":
      return <FaTiktok size={size} color={color} />;
    case "twitter":
      return <FaXTwitter size={size} color={color} />;

    default:
      break;
  }
};
