import React from "react";
import { Placeholder } from "react-bootstrap";
import Link from "@frontity/components/link";
import { CustomWPRestServicePostObject } from "../../js/main";
import ArticleIcons from "../ArticleIcons";
import CategoryDateText from "../CategoryDateText";

const ColumnArticleView = ({
  slice_end,
  slice_start,
  postsSet1,
  WP_SiteUrl,
  postsSet1_categoryID,
}) => {
  return (
    <div className="post_block_2_posts_container_2 content_spacing_top_2">
      {postsSet1 !== null ? (
        <>
          {postsSet1 !== false ? (
            <>
              {postsSet1.length !== 0 ? (
                <>
                  {postsSet1
                    .slice(slice_start, slice_end)
                    .map((post, index) => {
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
                              //
                              showCamera={true}
                              showTopRight={true}
                            />
                          </div>
                          <div className="post_block_2_postText_1">
                            <Link
                              link={customPost.slug}
                              style={{
                                marginBottom: "15px",
                              }}
                            >
                              <h1 dangerouslySetInnerHTML={customPost.title} />
                            </Link>
                            <CategoryDateText
                              dateText={customPost.date}
                              categoryText={customPost.categoryText}
                            />
                            <div
                              style={{
                                marginTop: "15px",
                              }}
                              className="post_block_2_postText_content_parent_1"
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
          {["", "", "", "", "", "", "", "", "", ""]
            .slice(slice_start, slice_end)
            .map((m, n) => (
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
  );
};

export default ColumnArticleView;
