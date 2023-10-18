import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { CustomWPRestServicePostObject } from "../../js/main";
import ArticleIcons from "../ArticleIcons";
import CategoryDateText from "../CategoryDateText";
import { Placeholder } from "react-bootstrap";

const ThreeByThreeArticleView = ({
  postsSet1,
  WP_SiteUrl,
  slice_end,
  slice_start,
  postsSet1_categoryID,
}) => {
  return (
    <div className="post_block_3_posts_container_1 content_spacing_top_2">
      {postsSet1 !== null ? (
        <>
          {postsSet1 !== false ? (
            <>
              {postsSet1.length !== 0 ? (
                <>
                  {postsSet1
                    .slice(slice_start, slice_end)
                    ?.map((post, index) => {
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
                          className="post_block_3_post_container_1"
                          key={index}
                        >
                          <div className="post_block_3_postImg_container_1">
                            <img
                              className="post_block_3_postImg_1"
                              src={customPost.imgUrl}
                              alt=""
                            />
                            <ArticleIcons
                              showCamera={true}
                              showTopRight={true}
                              //
                              videoLink={customPost.slug}
                              cameraLink={customPost.slug}
                              commentsLink={customPost.commentsSlug}
                            />
                          </div>
                          <div className="post_block_3_postText_1">
                            <CategoryDateText
                              categoryText={customPost.categoryText}
                              dateText={customPost.date}
                            />
                            <Link link={customPost.slug}>
                              <h1 dangerouslySetInnerHTML={customPost.title} />
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
  );
};

export default connect(ThreeByThreeArticleView);
