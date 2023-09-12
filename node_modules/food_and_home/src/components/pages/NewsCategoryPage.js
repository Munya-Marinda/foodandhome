import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../components/CategoryDateText";
import ArticleIcons from "../components/ArticleIcons";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import { CustomWPRestServicePostObject, filterAndSortPosts } from "../js/main";
import { Placeholder } from "react-bootstrap";
import LoadMorePosts from "../components/LoadMorePosts";

const NewsCategoryPage = ({
  state,
  headerData,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  // NEWS
  const [adPositions, setAdPositions] = useState(false);
  const [postsSet1, setPostsSet1] = useState(null);
  const [postsSet2, setPostsSet2] = useState(null);
  const WP_SiteUrl = state.source.url;
  // LOAD MORE
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  const [isLoadingNewPosts, setIsLoadingNewPosts] = useState(false);
  //
  //
  //
  //
  //
  //
  //
  //
  const fetch1Posts = async () => {
    try {
      // const url =
      //   WP_SiteUrl +
      //   "/wp-json/wp/v2/posts?categories=" +
      //   headerData.id +
      //   "&page=1&orderby=date&order=desc&_embed";
      const url =
        WP_SiteUrl +
        "/wp-json/wp/v2/posts?categories=" +
        3 +
        "&page=1&orderby=date&order=desc&_embed";
      const response = await fetch(url);
      if (!response.ok) {
        setPageNumber(1);
        setPostsSet1(false);
        setShowLoadMoreButton(false);
        return;
      }
      const postsData = await response.json();
      setPageNumber(1);
      setPostsSet1(postsData);
      setPostsSet2(filterAndSortPosts(postsData));
      //
      if (postsData.length > 0) {
        setShowLoadMoreButton(true);
      } else {
        setShowLoadMoreButton(false);
      }
      //
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPostsSet1(false);
      setPageNumber(1);
    }
  };
  //
  //
  const loadMorePosts = async () => {
    setIsLoadingNewPosts(true);
    try {
      // const url =
      //   WP_SiteUrl +
      //   "/wp-json/wp/v2/posts?categories=" +
      //   headerData.id +
      //   "&page=" +
      //   (pageNumber + 1) +
      //   "&orderby=date&order=desc&_embed";
      const url =
        WP_SiteUrl +
        "/wp-json/wp/v2/posts?categories=" +
        3 +
        "&page=" +
        (pageNumber + 1) +
        "&orderby=date&order=desc&_embed";
      const response = await fetch(url);
      if (!response.ok) {
        setShowLoadMoreButton(false);
        setIsLoadingNewPosts(false);
        return;
      }
      const postsData = await response.json();
      if (
        postsSet1 !== null &&
        postsSet1 !== false &&
        postsSet1 !== undefined
      ) {
        setPostsSet1([...postsSet1, ...postsData]);
        setPageNumber(pageNumber + 1);
      } else {
        setPageNumber(1);
        setPostsSet1(postsData);
        setShowLoadMoreButton(true);
      }
      setPostsSet2(filterAndSortPosts(postsData));
      setIsLoadingNewPosts(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPostsSet1(false);
      setIsLoadingNewPosts(false);
      setShowLoadMoreButton(false);
    }
  };
  //
  useEffect(() => {
    //
    if (headerData.id !== undefined && headerData.id !== null) {
      fetch1Posts();
      setPageNumber(1);
      setShowLoadMoreButton(false);
    }
  }, [headerData]);
  //
  //
  useEffect(() => {
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
  const changeParentPageNumber = () => {
    loadMorePosts();
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
  return (
    <>
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
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">
                  {headerData.id !== undefined &&
                    headerData.id !== null &&
                    headerData.title}
                </span>
              </div>

              <div className="post_block_2_posts_container_1">
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
                                headerData.id
                              );
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
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
                                      <CategoryDateText
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
                                    cameraLink={customPost.slug}
                                    categoryText={
                                      headerData.id !== undefined &&
                                      headerData.id !== null &&
                                      headerData.title
                                    }
                                    videoLink={customPost.slug}
                                    categoryLink={"/news/western-cape/"}
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

              <div className="post_block_2_posts_container_2 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(2, 7).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                headerData.id
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
                                      videoLink={customPost.slug}
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
                                      categoryText={
                                        headerData.id !== undefined &&
                                        headerData.id !== null &&
                                        headerData.title
                                      }
                                      dateText={customPost.date}
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

              <div className="post_block_2_posts_container_2 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(7, 12).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                headerData.id
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
                                      videoLink={customPost.slug}
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
                                      categoryText={
                                        headerData.id !== undefined &&
                                        headerData.id !== null &&
                                        headerData.title
                                      }
                                      dateText={customPost.date}
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

              <div className="post_block_2_posts_container_2 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(12).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                headerData.id
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
                                      videoLink={customPost.slug}
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
                                      categoryText={
                                        headerData.id !== undefined &&
                                        headerData.id !== null &&
                                        headerData.title
                                      }
                                      dateText={customPost.date}
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

              {showLoadMoreButton && (
                <LoadMorePosts
                  newPageNumber={pageNumber}
                  changeParentPageNumber={changeParentPageNumber}
                  isLoadingNewPosts={isLoadingNewPosts}
                />
              )}
            </div>
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
                <div className="magazine_topNews_header_1">
                  <span className="magazine_topNews_headerText_1">
                    Top News
                  </span>
                </div>
                {postsSet2 !== null ? (
                  <>
                    {postsSet2 !== false ? (
                      <>
                        {postsSet2.length !== 0 ? (
                          <>
                            {postsSet2.slice(0, 5)?.map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                headerData.id
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
                                    <h6
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={
                                      headerData.id !== undefined &&
                                      headerData.id !== null &&
                                      headerData.title
                                    }
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
                      <div
                        className="placeholder_child_7_parent_parent"
                        key={n}
                      >
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
      <div className="content_spacing_top_1"></div>
      <DaddysDealsIFrame />
    </>
  );
};

export default connect(NewsCategoryPage);
