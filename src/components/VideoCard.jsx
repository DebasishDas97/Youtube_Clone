import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import VideoLength from "../shared/videoLength";
import blurImg from "../images/blurred-background.jpeg"

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <LazyLoadImage src={video?.thumbnails[0]?.url}
            width={600} height={400}
            alt="Image Alt"
            effect="blur"
            placeholderSrc={blurImg}
          />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className="flex text-white mt-3" title={video?.title}>
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img src={video?.author?.avatar[0]?.url} alt="avatar" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {video?.author?.title}
              {
                video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" &&
                (<FcApproval className="ml-1 text-[18px]" />)
              }
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">.</span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;