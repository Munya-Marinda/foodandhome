import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const SocialMediaIcons_color = () => {
  return (
    <div className="topbar_socialLinks_parent_2">
      <Link link="#instagram" className="instagram_icon_parent_2">
        <FaInstagram />
      </Link>
      <Link link="#facebook" className="facebook_icon_parent_2">
        <FaFacebookF />
      </Link>
      <Link link="#twitter" className="twitter_icon_parent_2">
        <FaTwitter />
      </Link>
      <Link link="#youtube" className="youtube_icon_parent_2">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default SocialMediaIcons_color;
