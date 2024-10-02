import { formatNumber } from "@/utils/formatSocialMediaNumbers";
import { getSocialIcon } from "@/utils/getSocial";
import React from "react";
import { FaLock, FaUserSlash } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

interface InfluencerSocialMediaRowProps {
  social_media: any[];
  setIndex?: (value: number) => void;
}

const InfluencerSocialMediaRow = (props: InfluencerSocialMediaRowProps) => {
  return (
    <div className="w-full flex gap-3 items-center mb-1 overflow-x-auto thin-scroll min-h-14">
      {props.social_media.map((platform, idx) => {
        return platform?.followers || !platform.has_followers ? (
          <div
            key={platform.user_name}
            onMouseEnter={() => props.setIndex && props.setIndex(idx)}
            className="flex items-center pb-2 gap-1 w-[100px] min-w-[100px]  hover:translate-y-1 hover: translate-x-1 hover:scale-105 transition-all duration-100 cursor-pointer"
          >
            <>
              <div className="relative ">
                <a target="_blank" href={platform.base_url}>
                  {getSocialIcon({ icon: platform.icon })}
                  {platform?.verified && platform?.is_exist && (
                    <span>
                      <MdVerifiedUser
                        className="text-green-800 absolute -top-1 z-10 -left-1"
                        size={16}
                      />
                    </span>
                  )}
                  {platform?.is_exist &&
                  (platform.is_private || !platform.has_followers) &&
                  platform.has_followers ? (
                    <FaLock
                      className="text-primary  absolute -top-1 z-10 -right-1"
                      size={16}
                    />
                  ) : null}
                </a>
              </div>
              {platform?.is_exist ? (
                <div>
                  {platform.is_private || !platform.has_followers ? (
                    <>
                      {platform.has_followers ? (
                        <>
                          <p className="text-lg font-semibold text-primary">
                            {formatNumber(platform.followers, true)}
                          </p>
                        </>
                      ) : (
                        <FaLock className="text-primary" size={16} />
                      )}
                    </>
                  ) : (
                    <p className="text-lg font-semibold text-primary">
                      {formatNumber(platform.followers, true)}
                    </p>
                  )}
                </div>
              ) : (
                <FaUserSlash className="text-danger" size={16} />
              )}
            </>
          </div>
        ) : null;
      })}

      {(props.social_media.reduce((acc, curr) => acc + curr.followers, 0) ===
        0 &&
        !props.social_media.every((i) => i.is_exist) &&
        props.social_media.some((i) => i.is_private && !i.has_followers)) ||
      !props.social_media.length
        ? "No channels here yet"
        : null}
    </div>
  );
};

export default InfluencerSocialMediaRow;
