import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FaBell, FaStar } from "react-icons/fa";

const FullScreenCTA = () => {
  return (
    <div className="FullScreenCTA_parent">
      <div className="FullScreenCTA_parent_child_1">
        <img src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/foodies-club-1.png" />
      </div>
      <div className="FullScreenCTA_parent_child_2">
        <h1>Join our F&H foodies club</h1>
        <div className="FullScreenCTA_child_2_rating">
          <FaStar size={22} color={"black"} />
          <FaStar size={22} color={"black"} />
          <FaStar size={22} color={"black"} />
          <FaStar size={22} color={"black"} />
          <FaStar size={22} color={"black"} />
        </div>
        <p>
          Our F&H Foodies Club provides you with exclusive Master Chef recipes,
          interviews & step-by-step guides to help you create your very own
          masterpieces...
        </p>
        <p>
          <b>PLUS so much more absolutely FREE!</b>
        </p>
        <div className="FullScreenCTA_subscribe_parent_1">
          <div className="FullScreenCTA_subscribe_parent_bell">
            <FaBell width={32} color="white" />
          </div>
          <div className="FullScreenCTA_subscribe_parent_text">SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenCTA;
