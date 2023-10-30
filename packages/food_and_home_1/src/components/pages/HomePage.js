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
import RecipesCarousel from "../components/RecipesCarousel";
import CategoryDateText_2 from "../components/CategoryDateText_2";
import LetsCook from "../components/ArticleViews/LetsCook";
import ThreeByThreeArticleView from "../components/ArticleViews/ThreeByThreeArticleView";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import TwoFeatureArticle from "../components/ArticleViews/TwoFeatureArticle";
import ColumnArticleView from "../components/ArticleViews/ColumnArticleView";
import SidebarListingWithOutImages from "../components/sidebars/SidebarListingWithOutImages";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";

const HomePage = ({ state, headerStickyContainerHeight, headerIsSticky }) => {
  const [adPositions, setAdPositions] = useState(false);
  //
  const postsSet1_categoryID = 25282;
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
    <main className="homepage_main_parent_1 content_spacing_bottom_2">
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
          <div className="post_block_1_container_1_full_parent_1">
            <div className="post_block_1_container_1_full_1">
              <div className="post_block_1_container_1_full_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 1)?.map((post, index) => {
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
                                  className="post_block_1_featureImg_container_1"
                                  key={index}
                                >
                                  <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_2">
                                    <div
                                      style={{
                                        boxShadow: "3px 3px 1px #b5cf37ff",
                                      }}
                                    >
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
                                    className="post_block_1_featureImg_1"
                                  />
                                  <ArticleIcons
                                    commentsLink={customPost.commentsSlug}
                                    videoLink={customPost.slug}
                                    cameraLink={customPost.slug}
                                    categoryText={customPost.categoryText}
                                    categoryLink={"/news/"}
                                    //
                                    showVideo={true}
                                    showCamera={true}
                                    showTopRight={true}
                                  />
                                </div>
                              );
                            })}

                            <div className="post_block_1_featureImgs_parent_1 hide_on_mobile">
                              {postsSet1.slice(1, 3)?.map((post, index) => {
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
                                    className="post_block_1_featureImgs_container_1"
                                    key={index}
                                  >
                                    <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_2">
                                      <div
                                        style={{
                                          boxShadow: "3px 3px 1px #b5cf37ff",
                                        }}
                                      >
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
                                      className="post_block_1_featureImgs_1"
                                      src={customPost.imgUrl}
                                      alt=""
                                    />
                                    <ArticleIcons
                                      commentsLink={customPost.commentsSlug}
                                      videoLink={customPost.slug}
                                      cameraLink={customPost.slug}
                                      categoryText={customPost.categoryText}
                                      categoryLink={"/news/"}
                                      //
                                      showCamera={true}
                                      showTopRight={true}
                                    />
                                  </div>
                                );
                              })}
                            </div>
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
                  <div className="placeholder_parent_1">
                    <Placeholder
                      animation="glow"
                      className="placeholder_child_1_parent"
                    >
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_1"
                      />
                    </Placeholder>
                    <Placeholder
                      animation="glow"
                      className="placeholder_child_2_parent"
                    >
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_2"
                      />
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_child_2"
                      />
                    </Placeholder>
                  </div>
                )}
              </div>

              <Link link="#search-recipes">
                <img
                  width={"945px"}
                  className="submit_your_recipe_banner_img_1 content_spacing_top_2"
                  src={
                    "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/search-recipes-banner-00.png"
                  }
                />
              </Link>

              <RecipesCarousel
                WP_SiteUrl={WP_SiteUrl}
                _postsSet1={cookbookPosts1}
              />

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
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

      <CookbooksCarousel
        WP_SiteUrl={WP_SiteUrl}
        _postsSet1={cookbookPosts1}
        _title={"Dinner Made Easy"}
        _subTitle={"quick, delicious, and guaranteed"}
      />

      <div className="post_block_1_parent_2 content_spacing_top_3 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_3_posts_container_2">
                <LetsCook
                  serves_count={"4"}
                  postsSet1={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  total_time={"40 minutes"}
                  categoryHeader={"Recipes"}
                  backgroundColor={"green"}
                  categoryHeaderLink={"/recipes/"}
                  postsSet1_categoryID={postsSet1_categoryID}
                  header={"Carrot falafel with lemon yogurt"}
                  blurb={"Tasty and simple homemade falafels."}
                />

                <div className="ad_horizontal_2_parent content_spacing_top_2">
                  <h6 className="ad_text_1">ADVERTISEMENT</h6>
                  <div className="ad_horizontal_2"></div>
                </div>

                <ThreeByThreeArticleView
                  slice_end={4}
                  slice_start={1}
                  postsSet1={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  postsSet1_categoryID={postsSet1_categoryID}
                />

                <img
                  width={"660px"}
                  className="submit_your_recipe_banner_img_1 content_spacing_top_2  content_spacing_bottom_2"
                  src={
                    "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/submit-your-recipe-banner-0.png"
                  }
                />

                <LetsCook
                  serves_count={"4"}
                  postsSet1={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  total_time={"40 minutes"}
                  categoryHeader={"How To"}
                  backgroundColor={"gray"}
                  categoryHeaderLink={"/how-to/"}
                  postsSet1_categoryID={postsSet1_categoryID}
                  header={"Carrot falafel with lemon yogurt"}
                  blurb={"Tasty and simple homemade falafels."}
                />

                <div className="ad_horizontal_2_parent content_spacing_top_2">
                  <h6 className="ad_text_1">ADVERTISEMENT</h6>
                  <div className="ad_horizontal_2"></div>
                </div>

                <ThreeByThreeArticleView
                  slice_end={4}
                  slice_start={1}
                  postsSet1={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  postsSet1_categoryID={postsSet1_categoryID}
                />
              </div>
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="magazine_preview_parent_1">
                <img
                  className="magazine_preview_img_1"
                  src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/mag-cover-0.png"
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

              <SidebarListingWithImages
                title="Top Recipes"
                link={"/top-recipes/"}
                postsSet={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"RECIPES"}
                postsSet_categoryID={postsSet1_categoryID}
              />

              <div className="ad_square_1">
                <p>[AD]</p>
              </div>

              <div
                className="ad_vertical_2"
                style={{
                  marginTop: "25px",
                }}
              >
                <p>[AD]</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>

      <DaddysDealsIFrame />

      <div className="post_block_1_parent_2 content_spacing_top_2">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_3_posts_container_2">
                <TwoFeatureArticle
                  postsSet1={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  categoryHeader={"News & Trends"}
                  categoryHeaderLink={"/news-and-trends/"}
                  postsSet1_categoryID={postsSet1_categoryID}
                />

                <div className="ad_horizontal_2_parent content_spacing_top_2">
                  <h6 className="ad_text_1">ADVERTISEMENT</h6>
                  <div className="ad_horizontal_2"></div>
                </div>

                <ColumnArticleView
                  slice_end={5}
                  slice_start={2}
                  postsSet1={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  postsSet1_categoryID={postsSet1_categoryID}
                />
              </div>
            </div>
            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1">
                <p>[AD]</p>
              </div>

              <SidebarListingWithOutImages
                link={"/news/"}
                title={"Top News"}
                postsSet={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"NEWS"}
                postsSet_categoryID={postsSet1_categoryID}
              />

              <div className="ad_square_1">
                <p>[AD]</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>
    </main>
  );
};

export default connect(HomePage);
