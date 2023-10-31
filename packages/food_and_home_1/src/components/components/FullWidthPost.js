import React from "react";
import Link from "@frontity/components/link";
import CategoryDateText from "./CategoryDateText";
import { FaPlayCircle } from "react-icons/fa";

const FullWidthPost = ({ title, link }) => {
  return (
    <div className="full_width_post_parent_1">
      <div className="full_width_post_container_1">
        <div className="full_width_post_text_parent_1">
          <div className="full_width_post_text_container_1">
            <Link link={link}>
              <h1>{title}</h1>
            </Link>
            <CategoryDateText textColor={"white"} />
          </div>
        </div>
        <Link link="#playVideo">
          <div className="playVideo_parent_1">
            <img
              src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/video-icon-0.svg"
              style={{ width: "40px" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FullWidthPost;
