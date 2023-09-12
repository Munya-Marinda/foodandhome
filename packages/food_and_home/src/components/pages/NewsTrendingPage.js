import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../components/CategoryDateText";
import ArticleIcons from "../components/ArticleIcons";
import { FaGreaterThan } from "react-icons/fa";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../js/main";

const NewsTrendingPage = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  // WESTERN CAPE  | 10375
  const postsSet1_categoryID = 3;
  const [postsSet1, setPostsSet1] = useState(null);
  //
  // SOUTH AFRICA | 10376
  const postsSet2_categoryID = 3;
  const [postsSet2, setPostsSet2] = useState(null);
  //
  // World | 7747;
  const postsSet3_categoryID = 3;
  const [postsSet3, setPostsSet3] = useState(null);
  //
  // Opinion | 10378
  const postsSet4_categoryID = 3;
  const [postsSet4, setPostsSet4] = useState(null);
  //
  // Good News | 10379
  const postsSet5_categoryID = 3;
  const [postsSet5, setPostsSet5] = useState(null);
  //
  // Sport | 10381
  const postsSet6_categoryID = 3;
  const [postsSet6, setPostsSet6] = useState(null);
  //
  const WP_SiteUrl = state.source.url;
  const [adPositions, setAdPositions] = useState(false);
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    // FEATURED
    const fetch1Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet1_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet1(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
    //
    //
    //
    //
    // SOUTH AFRICA
    const fetch2Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet2_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet2(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet2(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet2(false);
      }
    };
    fetch2Posts();
    //
    //
    //
    //
    // World
    const fetch3Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet3_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet3(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet3(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet3(false);
      }
    };
    fetch3Posts();
    //
    //
    //
    //
    // Opinion
    const fetch4Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet4_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet4(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet4(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet4(false);
      }
    };
    fetch4Posts();
    //
    //
    //
    //
    // Good News
    const fetch5Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet5_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet5(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet5(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet5(false);
      }
    };
    fetch5Posts();
    //
    //
    //
    //
    // Sport
    const fetch6Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet6_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet6(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet6(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet6(false);
      }
    };
    fetch6Posts();
    //
    //
    //
    const setAdPositionsFunc = () => {
      const verticalAd1Left = document
        .getElementById("ad_vertical_1_id_1")
        .getBoundingClientRect().left;
      const verticalAd2Left = document
        .getElementById("ad_vertical_1_id_2")
        .getBoundingClientRect().left;
      setAdPositions({
        verticalAd1Left: verticalAd1Left,
        verticalAd2Left: verticalAd2Left,
      });
    };
    setAdPositionsFunc();
    //
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
  const RightBarWithOutMagazine = ({
    sideTitleLink,
    sideTitle,
    sidePosts,
    categoryID,
  }) => {
    return (
      <div className="post_block_2_right_bar_parent_1">
        <div className="ad_square_1"></div>
        <div className="magazine_topNews_parent_1">
          <Link link={sideTitleLink}>
            <div className="magazine_topNews_header_1">
              <span className="magazine_topNews_headerText_1">{sideTitle}</span>
              <span className="magazine_topNews_icon_1">
                <FaGreaterThan />
              </span>
            </div>
          </Link>

          {sidePosts !== null ? (
            <>
              {sidePosts !== false ? (
                <>
                  {sidePosts.length !== 0 ? (
                    <>
                      {sidePosts.slice(7, 13)?.map((post, index) => {
                        const customPost = CustomWPRestServicePostObject(
                          WP_SiteUrl,
                          post,
                          categoryID
                        );
                        //
                        //
                        //
                        //
                        //
                        return (
                          <div
                            className="magazine_topNews_container_1"
                            key={index}
                          >
                            <Link link={customPost.slug}>
                              <h6 dangerouslySetInnerHTML={customPost.title} />
                            </Link>
                            <CategoryDateText
                              categoryText={customPost.categoryText}
                              dateText={customPost.date}
                            />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="spinner_parent_1">
                      <h1>NO NEW POSTS FOUND</h1>
                    </div>
                  )}
                </>
              ) : (
                <div className="spinner_parent_1">
                  <h1>FAILED TO FETCH POSTS</h1>
                </div>
              )}
            </>
          ) : (
            <div className="post_block_3_posts_container_1">
              {["", "", "", "", "", "", "", "", ""].map((m, n) => (
                <div className="placeholder_child_7_parent_parent" key={n}>
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_7_parent"
                  >
                    <Placeholder
                      xs={7}
                      bg="dark"
                      className="placeholder_child_7_1"
                    />
                    <Placeholder
                      xs={4}
                      bg="dark"
                      className="placeholder_child_7_1"
                    />
                  </Placeholder>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
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
  const RightBarWithMagazine = ({
    sideTitleLink,
    sideTitle,
    sidePosts,
    categoryID,
  }) => {
    return (
      <div className="post_block_2_right_bar_parent_1">
        <div className="magazine_preview_parent_1">
          <img
            className="magazine_preview_img_1"
            src="https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg"
            alt="Latest CapeETC cover"
          />
          <div className="magazine_preview_btn_parent_1">
            <div className="magazine_preview_btn_subscribe_1">
              <Link link="#subscribe-today">
                <span>Subscribe Today</span>
              </Link>
            </div>
            <div className="magazine_preview_btn_get_copy_parent_1">
              <Link link="#print-magazine">
                <span>print</span>
              </Link>
              <Link link="#digital-magazine">
                <span>digital</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="magazine_topNews_parent_1">
          <Link link={sideTitleLink}>
            <div className="magazine_topNews_header_1">
              <span className="magazine_topNews_headerText_1">{sideTitle}</span>
              <span className="magazine_topNews_icon_1">
                <FaGreaterThan />
              </span>
            </div>
          </Link>

          {sidePosts !== null ? (
            <>
              {sidePosts !== false ? (
                <>
                  {sidePosts.length !== 0 ? (
                    <>
                      {sidePosts.slice(7, 13)?.map((post, index) => {
                        const customPost = CustomWPRestServicePostObject(
                          WP_SiteUrl,
                          post,
                          categoryID
                        );
                        //
                        //
                        //
                        //
                        //
                        return (
                          <div
                            className="magazine_topNews_container_1"
                            key={index}
                          >
                            <Link link={customPost.slug}>
                              <h6 dangerouslySetInnerHTML={customPost.title} />
                            </Link>
                            <CategoryDateText
                              categoryText={customPost.categoryText}
                              dateText={customPost.date}
                            />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="spinner_parent_1">
                      <h1>NO NEW POSTS FOUND</h1>
                    </div>
                  )}
                </>
              ) : (
                <div className="spinner_parent_1">
                  <h1>FAILED TO FETCH POSTS</h1>
                </div>
              )}
            </>
          ) : (
            <div className="post_block_3_posts_container_1">
              {["", "", "", "", "", "", "", "", ""].map((m, n) => (
                <div className="placeholder_child_7_parent_parent" key={n}>
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_7_parent"
                  >
                    <Placeholder
                      xs={7}
                      bg="dark"
                      className="placeholder_child_7_1"
                    />
                    <Placeholder
                      xs={4}
                      bg="dark"
                      className="placeholder_child_7_1"
                    />
                  </Placeholder>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="ad_square_1"></div>
      </div>
    );
  };

  //
  //
  //
  //
  //
  //
  //
  //

  const PostBlock = ({
    mainTitle,
    navigationID,
    see_all_link,
    see_latest_link,
    featurePosts,
    featurePosts_categoryID,
    sideTitle,
    sideTitleLink,
    sideBarType,
  }) => {
    //
    //
    //
    //
    //
    return (
      <div className="post_block_1_container_1">
        <div className="post_block_2_header_container_1">
          <div className="post_block_2_header_parent_1">
            <span className="post_block_2_header_1" id={navigationID}>
              {mainTitle}
            </span>
            <div className="post_block_2_headerLinks_parent_1">
              <Link link={see_all_link} className="post_block_2_headerLink_1">
                <span> SEE ALL </span>
              </Link>
              <span className="post_block_2_headerLink_spacer_1"> | </span>
              <Link
                link={see_latest_link}
                className="post_block_2_headerLink_1"
              >
                <span> THE LATEST </span>
              </Link>
            </div>
          </div>
          <div className="post_block_2_posts_container_1">
            {featurePosts !== null ? (
              <>
                {featurePosts !== false ? (
                  <>
                    {featurePosts.length !== 0 ? (
                      <>
                        {featurePosts.slice(0, 2).map((post, index) => {
                          const customPost = CustomWPRestServicePostObject(
                            WP_SiteUrl,
                            post,
                            featurePosts_categoryID
                          );
                          //
                          //
                          //
                          //
                          //
                          return (
                            <div
                              key={index}
                              className="post_block_2_postImg_container_1"
                            >
                              <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_1">
                                <div>
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    textColor={"white"}
                                    dateText={customPost.date}
                                  />
                                </div>
                              </div>
                              <img
                                alt=""
                                src={customPost.imgUrl}
                                className="post_block_2_featureImg_1"
                              />
                              <ArticleIcons
                                commentsLink={customPost.commentsSlug}
                                videoLink={customPost.slug}
                                cameraLink={customPost.slug}
                              />
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div className="spinner_parent_1">
                        <h1>NO NEW POSTS FOUND</h1>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="spinner_parent_1">
                    <h1>FAILED TO FETCH POSTS</h1>
                  </div>
                )}
              </>
            ) : (
              <Placeholder
                animation="glow"
                className="placeholder_child_3_parent"
              >
                <Placeholder xs={2} bg="dark" className="placeholder_child_3" />
                <Placeholder xs={2} bg="dark" className="placeholder_child_3" />
              </Placeholder>
            )}
          </div>

          <div className="post_block_2_posts_container_2 content_spacing_top_2">
            {featurePosts !== null ? (
              <>
                {featurePosts !== false ? (
                  <>
                    {featurePosts.length !== 0 ? (
                      <>
                        {featurePosts.slice(2, 7).map((post, index) => {
                          const customPost = CustomWPRestServicePostObject(
                            WP_SiteUrl,
                            post,
                            featurePosts_categoryID,
                            null,
                            120
                          );
                          //
                          //
                          //
                          //
                          //
                          return (
                            <div
                              className="post_block_2_post_container_1"
                              key={index}
                            >
                              <div className="post_block_2_postImg_container_1">
                                <img
                                  alt=""
                                  src={customPost.imgUrl}
                                  className="post_block_2_postImg_2"
                                />
                                <ArticleIcons
                                  showCategory={false}
                                  commentsLink={customPost.commentsSlug}
                                  videoLink={customPost.slug}
                                  cameraLink={customPost.slug}
                                />
                              </div>
                              <div className="post_block_2_postText_1">
                                <Link link={customPost.slug}>
                                  <h1
                                    dangerouslySetInnerHTML={customPost.title}
                                  />
                                </Link>
                                <CategoryDateText
                                  categoryText={customPost.categoryText}
                                  dateText={customPost.date}
                                />
                                <div
                                  dangerouslySetInnerHTML={customPost.excerpt}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div className="spinner_parent_1">
                        <h1>NO NEW POSTS FOUND</h1>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="spinner_parent_1">
                    <h1>FAILED TO FETCH POSTS</h1>
                  </div>
                )}
              </>
            ) : (
              <>
                {["", "", "", "", ""].map((m, n) => (
                  <div key={n} className="placeholder_child_4_parent">
                    <Placeholder animation="glow">
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_4"
                      />
                    </Placeholder>
                    <Placeholder
                      animation="glow"
                      className="width100 placeholder_child_4_parent_2"
                    >
                      <Placeholder
                        xs={4}
                        bg="dark"
                        className="placeholder_child_4_1"
                      />
                      <br />
                      <Placeholder xs={2} bg="dark" />
                      <br />
                      <Placeholder xs={9} bg="dark" />
                      <br />
                      <Placeholder xs={8} bg="dark" />
                      <br />
                    </Placeholder>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {sideBarType === "RightBarWithMagazine" && (
          <RightBarWithMagazine
            categoryID={featurePosts_categoryID}
            sideTitleLink={sideTitleLink}
            sideTitle={sideTitle}
            sidePosts={featurePosts}
          />
        )}
        {sideBarType === "RightBarWithOutMagazine" && (
          <RightBarWithOutMagazine
            categoryID={featurePosts_categoryID}
            sideTitleLink={sideTitleLink}
            sideTitle={sideTitle}
            sidePosts={featurePosts}
          />
        )}
      </div>
    );
  };
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
      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"Western Cape"}
            see_all_link={"/news/western-cape/"}
            see_latest_link={"/news/western-cape/"}
            featurePosts={postsSet1}
            featurePosts_categoryID={postsSet1_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/western-cape/"}
            sidePosts={postsSet1}
            sideBarType={"RightBarWithMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>

      <DaddysDealsIFrame />

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"South Africa"}
            navigationID={"south-africa"}
            see_all_link={"/news/south-africa/"}
            see_latest_link={"/news/south-africa/"}
            featurePosts={postsSet2}
            featurePosts_categoryID={postsSet2_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/south-africa/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"World"}
            see_all_link={"/news/world/"}
            see_latest_link={"/news/world/"}
            featurePosts={postsSet3}
            featurePosts_categoryID={postsSet3_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/world/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"Opinion"}
            see_all_link={"/news/opinion/"}
            see_latest_link={"/news/opinion/"}
            featurePosts={postsSet4}
            featurePosts_categoryID={postsSet4_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/opinion/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"Good News"}
            see_all_link={"/news/good-news/"}
            see_latest_link={"/news/good-news/"}
            featurePosts={postsSet5}
            featurePosts_categoryID={postsSet5_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/good-news/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"Business"}
            see_all_link={"/news/business/"}
            see_latest_link={"/news/business/"}
            featurePosts={postsSet6}
            featurePosts_categoryID={postsSet6_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/business/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <PostBlock
            mainTitle={"Sport"}
            see_all_link={"/news/sport/"}
            see_latest_link={"/news/sport/"}
            featurePosts={postsSet6}
            featurePosts_categoryID={postsSet6_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/sport/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default connect(NewsTrendingPage);
