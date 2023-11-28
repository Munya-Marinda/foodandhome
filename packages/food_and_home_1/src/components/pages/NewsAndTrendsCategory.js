import { useState, useEffect } from "react";
import { connect } from "frontity";
import FullWidthPost from "../components/FullWidthPost";
import ColumnArticleView from "../components/ArticleViews/ColumnArticleView";
import TwoFeatureArticle from "../components/ArticleViews/TwoFeatureArticle";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";

const NewsAndTrendsCategory = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  const WP_SiteUrl = state.source.url;
  //
  const [adPositions, setAdPositions] = useState(false);
  //
  const postsSet1_categoryID = 48;
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
        //
        const postsData = await response.json();
        setPostsSet1(postsData);
        //
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
              <TwoFeatureArticle
                slice_end={2}
                slice_start={0}
                postsSet1={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                categoryHeader={"Restaurants"}
                categoryHeaderLink={"/news-and-trends/restaurants/"}
                postsSet1_categoryID={postsSet1_categoryID}
              />

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>

              <ColumnArticleView
                slice_start={2}
                slice_end={7}
                postsSet1={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet1_categoryID={postsSet1_categoryID}
              />

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>

              <ColumnArticleView
                slice_start={7}
                slice_end={12}
                postsSet1={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet1_categoryID={postsSet1_categoryID}
              />

              <div className="next_article_page_parent_1">
                <button className="next_article_button_1">PREVIOUS</button>
                <button className="next_article_button_2">NEXT</button>
              </div>
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1">
                <p>[AD]</p>
              </div>

              <SidebarListingWithImages
                title="Heading 1"
                link={"/news-and-trends/restaurants/"}
                postsSet={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"RESTAURANTS"}
                postsSet_categoryID={postsSet1_categoryID}
              />

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
    </main>
  );
};

export default connect(NewsAndTrendsCategory);
