// import "bootstrap/dist/css/bootstrap.min.css"; // oldest
import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import SocialMediaIcons from "./SocialMediaIcons";
import Switch from "@frontity/components/switch";
import Link from "@frontity/components/link";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa";
import { Carousel, Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject, FixInvalidLink } from "../js/main";
import CategoryDateText from "./CategoryDateText";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import SocialMediaIcons_sm from "./SocialMediaIcons_sm";
import SubmitYourContentForm from "./SubmitYourContentForm";
import fetchMenu from "../handlers/handleMenu";
import CategoryDateText_2 from "./CategoryDateText_2";

const CustomPrevButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="header_prev_button">
      <FaAngleLeft size={20} />
    </div>
  );
};

const CustomNextButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="header_next_button">
      <FaAngleRight size={20} />
    </div>
  );
};

const Header = ({
  menu,
  state,
  formOpen,
  updateHeaderData,
  change_headerIsSticky,
  change_headerStickyContainerHeight,
}) => {
  const maxCarouselItems = 4;
  const postsSet1_categoryID = 25282;
  const [postsSet1, setPostsSet1] = useState(null);
  const [postsChuncksSet1, setPostsChuncksSet1] = useState(null);
  const [menuChildren, setmenuChildren] = useState(null);
  const [menuParentTitle, setmenuParentTitle] = useState(null);
  const [menuParentUrl, setmenuParentUrl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyContainerHeight, setStickyContainerHeight] = useState(0);
  const [menuObject, setMenuObject] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  //
  const data = state.source.get(state.router.link);
  const WP_SiteUrl = state.source.url;

  useEffect(() => {
    //
    //
    const fetch1Posts = async () => {
      try {
        const url =
          WP_SiteUrl +
          "/wp-json/wp/v2/posts?categories=" +
          postsSet1_categoryID +
          "&per_page=100&orderby=date&order=desc&_embed";
        const response = await fetch(url);
        if (!response.ok) {
          setPostsSet1(false);
          return;
        }
        const _postsData = await response.json();
        const postsData = [
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
          _postsData[0],
        ];

        // Create an array to hold the chunks of posts
        const chunkSize = 4;
        const postChunks = [];
        for (let i = 0; i < postsData.length; i += chunkSize) {
          postChunks.push(postsData.slice(i, i + chunkSize));
        }
        setPostsChuncksSet1(postChunks);
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
    //
  }, []);

  useEffect(() => {
    updateNavBar(null);
  }, [data.route]);

  useEffect(() => {
    if (menu === null || menu === undefined) {
      const fetchMenuData = async () => {
        try {
          const newMenu = await fetchMenu(state);
          setMenuObject(
            !newMenu || newMenu === undefined || newMenu === null ? [] : newMenu
          );
          updateNavBar(
            !newMenu || newMenu === undefined || newMenu === null ? [] : newMenu
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchMenuData();
    } else {
      setMenuObject(!menu || menu === undefined || menu === null ? [] : menu);
      updateNavBar(!menu || menu === undefined || menu === null ? [] : menu);
    }
  }, [menu]);

  const updateNavBar = (menu) => {
    const newRouteParent = data.route.split("/")[1];
    let categoryTitle = "";
    let categoryUrl = "";
    let categoryID = null;
    let parentChildren = null;
    if (newRouteParent !== "") {
      categoryTitle =
        newRouteParent[0].toUpperCase() +
        newRouteParent.substring(1).toLowerCase();
      let tempMenu = null;
      if (menuObject === null) {
        tempMenu = menu;
      } else {
        tempMenu = menuObject;
      }
      if (tempMenu !== null) {
        Object.keys(tempMenu).forEach((key) => {
          if (tempMenu[key].url === "/" + newRouteParent + "/") {
            setmenuChildren(tempMenu[key].children);
            setmenuParentTitle(tempMenu[key].title);
            setmenuParentUrl(tempMenu[key].url);
            categoryID = tempMenu[key].id;
            if (tempMenu[key].children.length > 0) {
              tempMenu[key].children.forEach((child) => {
                if (child.url === data.route) {
                  categoryTitle = child.title;
                  categoryUrl = child.url;
                  categoryID = child.id;
                }
              });
            }
            parentChildren = tempMenu[key].children;
          }
        });
      }
    } else {
      setmenuChildren([]);
      setmenuParentTitle("Home");
      categoryTitle = "Home";
      categoryUrl = "/";
      parentChildren = [];
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const specificElement = document.getElementById("ad_make_sticky");
      const specificElementPosition =
        specificElement.getBoundingClientRect().bottom + 100;
      const shouldStick = window.scrollY > specificElementPosition;
      changeHeight();
      setIsSticky(shouldStick);
      change_headerIsSticky(shouldStick);
    };

    const changeHeight = () => {
      let element = document.getElementById(
        "header_carousel_header_parent_1_id"
      );
      let height = 0;

      if (element !== null) {
        height = element.clientHeight;
      }

      setStickyContainerHeight(height);
      change_headerStickyContainerHeight(height);
    };

    changeHeight();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      <div className="ad_horizontal_parent_1">
        <div className="ad_horizontal_1">[AD]</div>
      </div>

      {/* MOBILE */}
      <div className="nav_mobile_header_parent_1">
        <Link link="/">
          <img
            className="nav_mobile_logo_img_1"
            src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/logo-1.png"
          />
        </Link>
        <SocialMediaIcons_sm />
        <span
          className="nav_mobile_toggle_1"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <FaBars />
        </span>
      </div>
      {menuObject !== null ? (
        <>
          {menuObject !== false ? (
            <>
              {menuObject.length !== 0 ? (
                <>
                  <div
                    className={
                      "nav_mobile_parent_1" +
                      (showMobileMenu ? " showMobileMenu" : " hideMobileMenu")
                    }
                  >
                    <Accordion defaultActiveKey="0">
                      {Object.keys(menuObject).map((key, index) => {
                        const menuParent = menuObject[key];
                        const title = menuParent.title;
                        let url = FixInvalidLink(menuParent.url);
                        const pagesWithChildrenBool = title === "Home";
                        //
                        //
                        //
                        return (
                          <div key={index} className="xxxxxxxx">
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header style={{ padding: "0px" }}>
                                {pagesWithChildrenBool ? (
                                  <Link
                                    link={url}
                                    onClick={() => {
                                      setShowMobileMenu(false);
                                    }}
                                  >
                                    <span className="nav_wide_links_span_1">
                                      {title}
                                    </span>
                                  </Link>
                                ) : (
                                  <span className="nav_wide_links_span_1">
                                    {title}
                                  </span>
                                )}
                              </Accordion.Header>
                              {!pagesWithChildrenBool && (
                                <Accordion.Body
                                  onClick={() => {
                                    setShowMobileMenu(false);
                                  }}
                                >
                                  {!pagesWithChildrenBool && (
                                    <Link link={menuParentUrl}>
                                      <div className="nav_mobile_sub_menu_parent_1">
                                        <span
                                          className="nav_wide_links_span_1"
                                          style={{ opacity: 0.8 }}
                                        >
                                          Trending
                                        </span>
                                      </div>
                                    </Link>
                                  )}

                                  {menuParent.children !== null ? (
                                    <>
                                      {menuParent.children !== false ? (
                                        <>
                                          {menuParent.children.length !== 0 ? (
                                            <>
                                              {menuParent.children.map(
                                                (child, index) => {
                                                  const child_url =
                                                    FixInvalidLink(child.url);
                                                  //
                                                  //
                                                  return (
                                                    <Link
                                                      key={index}
                                                      link={child_url}
                                                    >
                                                      <div className="nav_mobile_sub_menu_parent_1">
                                                        <span
                                                          className="nav_wide_links_span_1"
                                                          style={{
                                                            opacity: 0.8,
                                                          }}
                                                        >
                                                          {child.title}
                                                        </span>
                                                      </div>
                                                    </Link>
                                                  );
                                                }
                                              )}
                                            </>
                                          ) : (
                                            <></>
                                          )}
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </Accordion.Body>
                              )}
                            </Accordion.Item>
                          </div>
                        );
                      })}
                    </Accordion>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {/* DESKTOP */}
      <div className="nav_parent_1">
        <div className="nav_container_1">
          <div className="nav_logo_parent_1">
            <Link link="/">
              <img
                className="nav_logo_img_1"
                src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/logo-1.png"
              />
            </Link>
          </div>
          <div className="topbar_socialLinks_submit_parent_1">
            <SocialMediaIcons />
            <button className="submitYourContent_parent_1">
              SUBMIT YOUR RECIPE
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="nav_parent_2">
        <div className="nav_container_1">
          <div className="nav_wide_links_parent_1">
            {menuObject !== null ? (
              <>
                {menuObject !== false ? (
                  <>
                    {menuObject.length !== 0 ? (
                      <>
                        {Object.keys(menuObject).map((key, index) => {
                          const menuParent = menuObject[key];
                          const title = menuParent.title;
                          let url = FixInvalidLink(menuParent.url);
                          const isActiveParentLink = menuParentTitle === title;
                          const children = menuParent.children;
                          //
                          return (
                            <span
                              key={index}
                              link={url}
                              onClick={() => {
                                updateNavBar(null);
                              }}
                            >
                              <div className="nav_wide_links_container_1">
                                <span className="nav_wide_links_span_1">
                                  {children.length === 0 ? (
                                    <Link
                                      key={index}
                                      link={url}
                                      onClick={() => {
                                        updateNavBar(null);
                                      }}
                                    >
                                      {title}
                                    </Link>
                                  ) : (
                                    <span>
                                      {title} <FaAngleDown size={10} />
                                    </span>
                                  )}
                                  {children.length !== 0 && (
                                    <div className="nav_wide_links_dropdown_container_1">
                                      {children.map((child, index) => {
                                        //
                                        return (
                                          <Link key={index} link={child.url}>
                                            {child.title}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  )}
                                </span>
                                {isActiveParentLink && (
                                  <div className="nav_wide_links_active_1"></div>
                                )}
                              </div>
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <div className="spinner_parent_0">
                        {/* <h1>NO NEW POSTS FOUND</h1> */}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="spinner_parent_0">
                    {/* <h1>FAILED TO FETCH MENU</h1> */}
                  </div>
                )}
              </>
            ) : (
              <div className="nav_wide_placeholder_parent_1">
                <Placeholder animation="glow">
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                </Placeholder>
              </div>
            )}
          </div>
          <div className="nav_search_parent_1">
            <input type="search" placeholder="Search for 'stir fry'" />
          </div>
        </div>
      </div>

      {/* CAROUSEL DESKTOP */}
      <Switch>
        <div
          className="header_carousel_header_parent_1"
          id="header_carousel_header_parent_1_id"
          style={
            isSticky
              ? {
                  position: "fixed",
                  top: "0",
                }
              : {}
          }
        >
          <div className="header_carousel_header_parent_2">
            {postsSet1 !== null ? (
              <>
                {postsSet1 !== false ? (
                  <>
                    {postsSet1.length !== 0 ? (
                      <Carousel
                        interval={null}
                        indicators={false}
                        prevIcon={<CustomPrevButton />}
                        nextIcon={<CustomNextButton />}
                      >
                        {postsChuncksSet1
                          .slice(0, maxCarouselItems)
                          .map((postChunk, index1) => (
                            <Carousel.Item key={index1} className="">
                              <div className="header_carousel_item_parent_1">
                                {postChunk.map((post, index2) => {
                                  const customPost =
                                    CustomWPRestServicePostObject(
                                      WP_SiteUrl,
                                      post,
                                      postsSet1_categoryID
                                    );
                                  const customPost_slug = FixInvalidLink(
                                    customPost.slug
                                  );
                                  //
                                  //
                                  //
                                  //
                                  return (
                                    <div
                                      key={index2}
                                      className="header_carousel_item_container_1"
                                    >
                                      <img
                                        alt="Image"
                                        className="header_carousel_image_1"
                                        src={customPost.imgUrl}
                                      />
                                      <div
                                        key={index2}
                                        className="header_carousel_text_parent_1"
                                      >
                                        <CategoryDateText_2
                                          dateText={customPost.date}
                                          categoryText={customPost.categoryText}
                                        />
                                        <div className="header_carousel_parent_1">
                                          <Link
                                            link={customPost_slug}
                                            className="header_carousel_header_1"
                                          >
                                            <h6
                                              dangerouslySetInnerHTML={
                                                customPost.title
                                              }
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </Carousel.Item>
                          ))}
                      </Carousel>
                    ) : (
                      <div className="spinner_parent_0">
                        <>False 2</>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="spinner_parent_0">
                    <>False 1</>
                  </div>
                )}
              </>
            ) : (
              <div className="nav_wide_placeholder_parent_1">
                <Placeholder animation="glow">
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                  <Placeholder xs={2} bg="light" />
                </Placeholder>
              </div>
            )}
          </div>
        </div>
      </Switch>

      <div id="ad_make_sticky"></div>
    </>
  );
};

export default connect(Header);
