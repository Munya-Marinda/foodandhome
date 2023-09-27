import { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import FullWidthPost from "../components/FullWidthPost";
import { FaGreaterThan } from "react-icons/fa";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../js/main";
import ArticleIcons from "../components/ArticleIcons";
import CategoryDateText from "../components/CategoryDateText";

const Markets = ({ state, headerStickyContainerHeight, headerIsSticky }) => {
  const WP_SiteUrl = state.source.url;
  //
  const [adPositions, setAdPositions] = useState(false);
  //
  const postsSet1_categoryID = 1005;
  const [postsSet1, setPostsSet1] = useState(null);
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
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
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
  }, []);

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
        </div>

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

              <div className="next_article_page_parent_1">
                <button className="next_article_button_1">PREVIOUS</button>
                <button className="next_article_button_2">NEXT</button>
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
    </main>
  );
};

export default connect(Markets);
