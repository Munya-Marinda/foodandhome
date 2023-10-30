import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Modal from "react-bootstrap/Modal";
import SocialMediaIcons_color from "./SocialMediaIcons_color";

const Footer = ({ menu, _toggledleSubmitYourContentModal }) => {
  const [menuObject, setMenuObject] = useState(null);
  const [toggleSubmitYourContentModal, setToggledleSubmitYourContentModal] =
    useState(false);
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      <div className="footer_parent_1">
        <div className="footer_container_1">
          <div className="footer_subToday_container_1">
            <span>Subscribe Today</span>
            <div className="subscribe_to_newsletter_checkbox_parent">
              <div className="subscribe_to_newsletter">
                <input name="subscribe_to_newsletter" type="checkbox" />
                <label>Newsletter</label>
              </div>
              <div className="subscribe_to_promomailer">
                <input name="subscribe_to_promomailer" type="checkbox" />
                <label>Promotional Mailer</label>
              </div>
            </div>
            <div className="footer_enterEmail_container_2">
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <SocialMediaIcons_color />
        </div>
        <div className="footer_container_2">
          <div className="footer_container_2_1">
            <div className="footer_container_2_1_links_parent">
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">Reciepts</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">How To</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">News & Trending</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">Foodie Deals</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">Videos</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">Win</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
              <div className="footer_container_2_1_1">
                <h1 className="footer_header_1">Advertise</h1>
                <ul className="footer_ul_1">
                  <li>
                    <a href="/reciepts/" target="_self"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_habari_parent_1">
              <h1 className="footer_habari_poweredBy_text_1">Powered By</h1>
              <img
                src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/habari-logo-2.png"
                className="footer_habari_logo_1"
              />
            </div>
          </div>
          <div className="footer_container_2_2">
            <div id="footer-company-address">
              <strong>CAPE TOWN OFFICE: </strong> 36 Old Mill Road, Ndabeni,
              Maitland, 7405, Western Cape | Telephone: (021) 530 3300 | Fax:
              (021) 530 3333
            </div>
            <div id="footer-copyright">© Copyright 2023 Food & Home</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(Footer);
