import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FaGreaterThan } from "react-icons/fa";
import ArticleIcons from "../components/ArticleIcons";
import CategoryDateText from "../components/CategoryDateText";
import FullWidthPost from "../components/FullWidthPost";
import { CustomWPRestServicePostObject, filterAndSortPosts } from "../js/main";
import { Placeholder } from "react-bootstrap";
import CookbooksCarousel from "../components/CookbooksCarousel";
import FullScreenCTA from "../components/FullScreenCTA";
import Top20SAWinesCarousel from "../components/Top20SAWinesCarousel";
// import CategoryDateText_2 from "../components/CategoryDateText_2";

const NewsAndTrends = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  const [adPositions, setAdPositions] = useState(false);
  //
  const postsSet1_categoryID = 1005;
  const [postsSet1, setPostsSet1] = useState(null);
  //
  const cookbookPosts1_categoryID = 55;
  const [cookbookPosts1, setCookbookPosts1] = useState(null);
  //
  //
  const WP_SiteUrl = state.source.url;
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    // POSTS
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
        setPostsSet1([
          postsData[0],
          postsData[0],
          postsData[0],
          postsData[0],
          postsData[0],
          postsData[0],
          postsData[0],
          postsData[0],
          postsData[0],
        ]);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
    //
    //

    // COOKBOOK POSTS
    const fetchCookbookPosts1 = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            cookbookPosts1_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setCookbookPosts1(false);
          return;
        }
        const postsData = await response.json();
        setCookbookPosts1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setCookbookPosts1(false);
      }
    };
    fetchCookbookPosts1();
    //
    //
    //
    //
    //
    const setAdPositionsFunc = () => {
      const verticalAd1Left = document
        .getElementById("ad_vertical_1_id_1_position")
        .getBoundingClientRect().left;
      const verticalAd2Left = document
        .getElementById("ad_vertical_1_id_2_position")
        .getBoundingClientRect().left;
      setAdPositions({
        verticalAd1Left: verticalAd1Left,
        verticalAd2Left: verticalAd2Left,
      });
    };
    setAdPositionsFunc();
    window.addEventListener("resize", setAdPositionsFunc);
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
  //
  //
  //
  //
  //

  return (
    <main className="homepage_main_parent_1">
      <FullWidthPost
        title={
          "Carrot falafel with lemon yogurt Carrot falafel with lemon yogurt"
        }
        link={"#"}
      />
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
          <div
            className="ad_vertical_1_ zero_opacity"
            id="ad_vertical_1_id_1_position"
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Restaurants</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/restaurants/"
                    className="post_block_2_headerLink_1"
                  >
                    <span className="magazine_topNews_icon_2">
                      <FaGreaterThan />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="post_block_2_posts_container_1 content_spacing_bottom_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 2).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  key={index}
                                  className={
                                    "post_block_2_postImg_container_1 min_height_200px" +
                                    (index === 1 ? " hide_on_mobile" : "")
                                  }
                                >
                                  <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_2">
                                    <div>
                                      <Link link={customPost.slug}>
                                        <h1
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1 "
                                  />
                                  <ArticleIcons
                                    commentsLink={customPost.commentsSlug}
                                    cameraLink={customPost.slug}
                                    categoryText={customPost.categoryText}
                                    categoryLink={"/news/"}
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
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                    />
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                    />
                  </Placeholder>
                )}
              </div>

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>

              <div className="post_block_2_posts_container_2 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(2, 5).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
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
                                      commentsLink={customPost.commentsSlug}
                                      cameraLink={customPost.slug}
                                    />
                                  </div>
                                  <div className="post_block_2_postText_1">
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
                                    <CategoryDateText
                                      dateText={customPost.date}
                                      categoryText={customPost.categoryText}
                                    />
                                    <div
                                      className="post_block_2_postText_content_parent_1"
                                      dangerouslySetInnerHTML={
                                        customPost.excerpt
                                      }
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
                    {["", "", ""].map((m, n) => (
                      <div className="placeholder_child_4_parent" key={n}>
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

              <div className="post_block_2_header_parent_1 content_spacing_top_2">
                <span className="post_block_2_header_1">
                  Events & Festivals
                </span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/events-and-festivals/"
                    className="post_block_2_headerLink_1"
                  >
                    <span className="magazine_topNews_icon_2">
                      <FaGreaterThan />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="post_block_2_posts_container_1 content_spacing_bottom_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 2).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  key={index}
                                  className={
                                    "post_block_2_postImg_container_1 min_height_200px" +
                                    (index === 1 ? " hide_on_mobile" : "")
                                  }
                                >
                                  <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_2">
                                    <div>
                                      <Link link={customPost.slug}>
                                        <h1
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1 "
                                  />
                                  <ArticleIcons
                                    commentsLink={customPost.commentsSlug}
                                    cameraLink={customPost.slug}
                                    categoryText={customPost.categoryText}
                                    categoryLink={"/news/"}
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
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                    />
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                    />
                  </Placeholder>
                )}
              </div>

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>

              <div className="post_block_2_posts_container_2 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(2, 5).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
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
                                      commentsLink={customPost.commentsSlug}
                                      cameraLink={customPost.slug}
                                    />
                                  </div>
                                  <div className="post_block_2_postText_1">
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
                                    <CategoryDateText
                                      dateText={customPost.date}
                                      categoryText={customPost.categoryText}
                                    />
                                    <div
                                      className="post_block_2_postText_content_parent_1"
                                      dangerouslySetInnerHTML={
                                        customPost.excerpt
                                      }
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
                    {["", "", ""].map((m, n) => (
                      <div className="placeholder_child_4_parent" key={n}>
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

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1">
                <p>[AD]</p>
              </div>
              <div className="magazine_topNews_parent_1">
                <Link link="#top-news">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Heading 1
                    </span>
                    <span className="magazine_topNews_icon_1">
                      <FaGreaterThan />
                    </span>
                  </div>
                </Link>

                <div className="topGuides_parent_1">
                  {postsSet1 !== null ? (
                    <>
                      {postsSet1 !== false ? (
                        <>
                          {postsSet1.length !== 0 ? (
                            <>
                              {postsSet1.slice(0, 4)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    postsSet1_categoryID
                                  );
                                //
                                //
                                //
                                //
                                //
                                return (
                                  <div
                                    className="topGuides_container_1"
                                    key={index}
                                  >
                                    <div className="topGuides_postImg_1">
                                      <img
                                        alt=""
                                        src={customPost.imgUrl}
                                        className="post_block_3_postImg_2"
                                      />
                                    </div>
                                    <div className="topGuides_textContainer_1">
                                      {/* <CategoryDateText_2
                                        categoryText={customPost.categoryText}
                                        dateText={customPost.date}
                                      /> */}
                                      <Link link={customPost.slug}>
                                        <h6
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
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
                    <div className="topGuides_parent_1">
                      {["", "", "", ""].map((m, n) => (
                        <div
                          className="placeholder_child_8_parent_parent"
                          key={n}
                        >
                          <Placeholder animation="glow" className="">
                            <Placeholder className="placeholder_child_8_1" />
                          </Placeholder>
                          <Placeholder animation="glow" className="">
                            <Placeholder
                              xs={10}
                              className="placeholder_child_8_2"
                            />
                            <Placeholder
                              xs={5}
                              className="placeholder_child_8_2"
                            />
                          </Placeholder>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="ad_rectangle_1">
                <p>[AD]</p>
              </div>
            </div>
          </div>
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
          <div
            className="ad_vertical_1_ zero_opacity"
            id="ad_vertical_1_id_2_position"
          ></div>
        </div>
      </div>
      <FullScreenCTA />
      <div className="post_block_1_parent_2 content_spacing_top_2">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Markets</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/events-and-festivals/"
                    className="post_block_2_headerLink_1"
                  >
                    <span className="magazine_topNews_icon_2">
                      <FaGreaterThan />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="post_block_3_posts_container_2 content_spacing_top_3">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 4).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  key={index}
                                  className="post_block_4_postImg_2_container_1"
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      alt=""
                                      src={customPost.imgUrl}
                                      className="post_block_4_postImg_2"
                                    />
                                  </div>
                                  <div className="post_block_3_postText_1">
                                    <div
                                      style={{
                                        width: "100%",
                                        margin: "5px 0px",
                                      }}
                                    >
                                      <CategoryDateText
                                        categoryText={customPost.categoryText}
                                        dateText={customPost.date}
                                      />
                                    </div>
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
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
                  <Placeholder
                    animation="glow"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                      style={{ marginBottom: "10px" }}
                    />
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                      style={{ marginBottom: "10px" }}
                    />
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                      style={{ marginBottom: "10px" }}
                    />
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_3"
                      style={{ marginBottom: "10px" }}
                    />
                  </Placeholder>
                )}
              </div>

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1">
                <p>[AD]</p>
              </div>
              <div className="magazine_topNews_parent_1">
                <Link link="#top-news">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Heading 1
                    </span>
                    <span className="magazine_topNews_icon_1">
                      <FaGreaterThan />
                    </span>
                  </div>
                </Link>

                <div className="topGuides_parent_1">
                  {postsSet1 !== null ? (
                    <>
                      {postsSet1 !== false ? (
                        <>
                          {postsSet1.length !== 0 ? (
                            <>
                              {postsSet1.slice(0, 4)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    postsSet1_categoryID
                                  );
                                //
                                //
                                //
                                //
                                //
                                return (
                                  <div
                                    className="topGuides_container_1"
                                    key={index}
                                  >
                                    <div className="topGuides_postImg_1">
                                      <img
                                        alt=""
                                        src={customPost.imgUrl}
                                        className="post_block_3_postImg_2"
                                      />
                                    </div>
                                    <div className="topGuides_textContainer_1">
                                      {/* <CategoryDateText_2
                                        categoryText={customPost.categoryText}
                                        dateText={customPost.date}
                                      /> */}
                                      <Link link={customPost.slug}>
                                        <h6
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
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
                    <div className="topGuides_parent_1">
                      {["", "", "", ""].map((m, n) => (
                        <div
                          className="placeholder_child_8_parent_parent"
                          key={n}
                        >
                          <Placeholder animation="glow" className="">
                            <Placeholder className="placeholder_child_8_1" />
                          </Placeholder>
                          <Placeholder animation="glow" className="">
                            <Placeholder
                              xs={10}
                              className="placeholder_child_8_2"
                            />
                            <Placeholder
                              xs={5}
                              className="placeholder_child_8_2"
                            />
                          </Placeholder>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>
      <CookbooksCarousel
        WP_SiteUrl={WP_SiteUrl}
        _postsSet1={cookbookPosts1}
        _title={"Cookbooks"}
        _subTitle={"culinary wisdom unleashed"}
      />
      <div className="post_block_1_parent_2 content_spacing_top_2">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Profiles</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/events-and-festivals/"
                    className="post_block_2_headerLink_1"
                  >
                    <span className="magazine_topNews_icon_2">
                      <FaGreaterThan />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="post_block_3_posts_container_2 content_spacing_top_3">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 1).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  key={index}
                                  className="profiles_post_block_parent_1"
                                >
                                  <div className="profiles_post_block_postImg_1_div">
                                    <img
                                      alt=""
                                      src={customPost.imgUrl}
                                      className="profiles_post_block_postImg_1"
                                    />
                                  </div>
                                  <div className="profiles_post_block_text_parent_1">
                                    <div className="profiles_post_block_text_container_1">
                                      <h1>
                                        Foodie of the
                                        <br />
                                        month
                                      </h1>
                                      <h2>Reuben Riffel</h2>
                                    </div>
                                    <button>LET'S TALK</button>
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
                  <div className="profiles_post_block_parent_1">
                    <Placeholder
                      animation="glow"
                      className="profiles_post_block_text_parent_1"
                    >
                      <Placeholder className="profiles_post_block_postImg_1_div" />
                    </Placeholder>
                    <div
                      className="profiles_post_block_text_parent_1"
                      style={{
                        width: "40%",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="profiles_post_block_text_container_1"
                        style={{ width: "100%" }}
                      >
                        <Placeholder animation="glow">
                          <Placeholder
                            xs={32}
                            bg="light"
                            style={{ width: "100%" }}
                          />
                          <Placeholder
                            xs={32}
                            bg="light"
                            style={{ width: "75%" }}
                          />
                          <Placeholder
                            xs={32}
                            bg="light"
                            style={{ width: "50%" }}
                          />
                        </Placeholder>
                      </div>
                      <Placeholder animation="glow" style={{ width: "100%" }}>
                        <Placeholder
                          xs={32}
                          bg="light"
                          style={{ width: "100%", height: "25px" }}
                        />
                      </Placeholder>
                    </div>
                  </div>
                )}

                <div className="ad_horizontal_2_parent content_spacing_top_2">
                  <h6 className="ad_text_1">ADVERTISEMENT</h6>
                  <div className="ad_horizontal_2"></div>
                </div>

                <div className="post_block_3_posts_container_1 content_spacing_top_2">
                  {postsSet1 !== null ? (
                    <>
                      {postsSet1 !== false ? (
                        <>
                          {postsSet1.length !== 0 ? (
                            <>
                              {postsSet1.slice(1, 4)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    postsSet1_categoryID
                                  );
                                //
                                //
                                //
                                //
                                //
                                return (
                                  <div
                                    className="post_block_3_post_container_1"
                                    key={index}
                                  >
                                    <div className="post_block_3_postImg_container_1">
                                      <img
                                        className="post_block_3_postImg_1"
                                        src={customPost.imgUrl}
                                        alt=""
                                      />
                                      <ArticleIcons showCategory={false} />
                                    </div>
                                    <div className="post_block_3_postText_1">
                                      <CategoryDateText
                                        categoryText={customPost.categoryText}
                                        dateText={customPost.date}
                                      />
                                      <Link link={customPost.slug}>
                                        <h1
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
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
                    <div className="post_block_3_posts_container_1 content_spacing_top_2">
                      {["", "", ""].map((m, n) => (
                        <div className="post_block_3_post_container_1" key={n}>
                          <Placeholder
                            animation="glow"
                            className="placeholder_child_6_parent"
                          >
                            <Placeholder className="placeholder_child_6_1" />
                            <br />
                            <Placeholder xs={4} bg="dark" className="" />
                            <br />
                            <Placeholder xs={8} bg="dark" className="" />
                          </Placeholder>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <img
                  className="submit_your_recipe_banner_img_2 content_spacing_top_2"
                  src={
                    "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/submit-your-recipe-banner-0.png"
                  }
                />
              </div>
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1">
                <p>[AD]</p>
              </div>
              <div className="magazine_topNews_parent_1">
                <Link link="#top-news">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Heading 1
                    </span>
                    <span className="magazine_topNews_icon_1">
                      <FaGreaterThan />
                    </span>
                  </div>
                </Link>

                <div className="topGuides_parent_1">
                  {postsSet1 !== null ? (
                    <>
                      {postsSet1 !== false ? (
                        <>
                          {postsSet1.length !== 0 ? (
                            <>
                              {postsSet1.slice(0, 4)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    postsSet1_categoryID
                                  );
                                //
                                //
                                //
                                //
                                //
                                return (
                                  <div
                                    className="topGuides_container_1"
                                    key={index}
                                  >
                                    <div className="topGuides_postImg_1">
                                      <img
                                        alt=""
                                        src={customPost.imgUrl}
                                        className="post_block_3_postImg_2"
                                      />
                                    </div>
                                    <div className="topGuides_textContainer_1">
                                      {/* <CategoryDateText_2
                                        categoryText={customPost.categoryText}
                                        dateText={customPost.date}
                                      /> */}
                                      <Link link={customPost.slug}>
                                        <h6
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
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
                    <div className="topGuides_parent_1">
                      {["", "", "", ""].map((m, n) => (
                        <div
                          className="placeholder_child_8_parent_parent"
                          key={n}
                        >
                          <Placeholder animation="glow" className="">
                            <Placeholder className="placeholder_child_8_1" />
                          </Placeholder>
                          <Placeholder animation="glow" className="">
                            <Placeholder
                              xs={10}
                              className="placeholder_child_8_2"
                            />
                            <Placeholder
                              xs={5}
                              className="placeholder_child_8_2"
                            />
                          </Placeholder>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>

      <div
        className="bg_peach_1 content_spacing_top_2"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Top20SAWinesCarousel
          WP_SiteUrl={WP_SiteUrl}
          _postsSet1={cookbookPosts1}
        />
        <div className="post_block_1_parent_2 content_spacing_top_2 content_spacing_bottom_2">
          <div className="ad_vertical_1_parent"></div>
          <div className="post_block_1_parent_2">
            <div className="post_block_1_container_1">
              <div className="post_block_2_header_container_1">
                <div className="post_block_2_header_parent_1">
                  <span className="post_block_2_header_1">Wine Pairing</span>
                  <div className="post_block_2_headerLinks_parent_1">
                    <Link
                      link="/events-and-festivals/"
                      className="post_block_2_headerLink_1"
                    >
                      <span className="magazine_topNews_icon_2">
                        <FaGreaterThan />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="post_block_3_posts_container_2 content_spacing_top_3">
                  {postsSet1 !== null ? (
                    <>
                      {postsSet1 !== false ? (
                        <>
                          {postsSet1.length !== 0 ? (
                            <>
                              {postsSet1.slice(0, 4).map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    postsSet1_categoryID
                                  );
                                //
                                //
                                //
                                //
                                //
                                return (
                                  <div
                                    key={index}
                                    className="post_block_4_postImg_2_container_1"
                                  >
                                    <div className="post_block_3_postImg_container_1">
                                      <img
                                        alt=""
                                        src={customPost.imgUrl}
                                        className="post_block_4_postImg_2"
                                      />
                                    </div>
                                    <div className="post_block_3_postText_1">
                                      <div
                                        style={{
                                          width: "100%",
                                          margin: "5px 0px",
                                        }}
                                      >
                                        <CategoryDateText
                                          categoryText={customPost.categoryText}
                                          dateText={customPost.date}
                                        />
                                      </div>
                                      <Link link={customPost.slug}>
                                        <h1
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
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
                    <Placeholder
                      animation="glow"
                      style={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_3"
                        style={{ marginBottom: "10px" }}
                      />
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_3"
                        style={{ marginBottom: "10px" }}
                      />
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_3"
                        style={{ marginBottom: "10px" }}
                      />
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_3"
                        style={{ marginBottom: "10px" }}
                      />
                    </Placeholder>
                  )}
                </div>
              </div>

              <div className="post_block_2_right_bar_parent_1">
                <div className="ad_square_1">
                  <p>[AD]</p>
                </div>
                <div className="magazine_topNews_parent_1">
                  <Link link="#top-news">
                    <div className="magazine_topNews_header_1">
                      <span className="magazine_topNews_headerText_1">
                        Heading 1
                      </span>
                      <span className="magazine_topNews_icon_1">
                        <FaGreaterThan />
                      </span>
                    </div>
                  </Link>

                  <div className="topGuides_parent_1">
                    {postsSet1 !== null ? (
                      <>
                        {postsSet1 !== false ? (
                          <>
                            {postsSet1.length !== 0 ? (
                              <>
                                {postsSet1.slice(0, 4)?.map((post, index) => {
                                  const customPost =
                                    CustomWPRestServicePostObject(
                                      WP_SiteUrl,
                                      post,
                                      postsSet1_categoryID
                                    );
                                  //
                                  //
                                  //
                                  //
                                  //
                                  return (
                                    <div
                                      className="topGuides_container_1"
                                      key={index}
                                    >
                                      <div className="topGuides_postImg_1">
                                        <img
                                          alt=""
                                          src={customPost.imgUrl}
                                          className="post_block_3_postImg_2"
                                        />
                                      </div>
                                      <div className="topGuides_textContainer_1">
                                        {/* <CategoryDateText_2
                                        categoryText={customPost.categoryText}
                                        dateText={customPost.date}
                                      /> */}
                                        <Link link={customPost.slug}>
                                          <h6
                                            dangerouslySetInnerHTML={
                                              customPost.title
                                            }
                                          />
                                        </Link>
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
                      <div className="topGuides_parent_1">
                        {["", "", "", ""].map((m, n) => (
                          <div
                            className="placeholder_child_8_parent_parent"
                            key={n}
                          >
                            <Placeholder animation="glow" className="">
                              <Placeholder className="placeholder_child_8_1" />
                            </Placeholder>
                            <Placeholder animation="glow" className="">
                              <Placeholder
                                xs={10}
                                className="placeholder_child_8_2"
                              />
                              <Placeholder
                                xs={5}
                                className="placeholder_child_8_2"
                              />
                            </Placeholder>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ad_vertical_1_parent"></div>
        </div>
      </div>
    </main>
  );
};

export default connect(NewsAndTrends);
