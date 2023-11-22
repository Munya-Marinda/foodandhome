import { Fragment } from "react";
import Link from "@frontity/components/link";
import { FaGreaterThan } from "react-icons/fa";
import { CustomWPRestServicePostObject } from "../../js/main";
import { Placeholder } from "react-bootstrap";
import ArticleIcons from "../ArticleIcons";

const TwoFeatureArticle = ({
  postsSet1,
  WP_SiteUrl,
  slice_end,
  slice_start,
  categoryHeader,
  categoryHeaderLink,
  postsSet1_categoryID,
}) => {
  return (
    <Fragment>
      <Link
        link={categoryHeaderLink}
        className="post_block_2_headerLink_1 content_spacing_bottom_3"
        style={{ width: "100%" }}
      >
        <div className="post_block_2_header_parent_1">
          <span className="post_block_2_header_1">{categoryHeader}</span>
          <div className="post_block_2_headerLinks_parent_1">
            <span className="magazine_topNews_icon_2">
              <img src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/arrow-greater-than-2.svg" />
            </span>
          </div>
        </div>
      </Link>

      <div className="post_block_4_posts_container_2 content_spacing_bottom_2">
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
                            key={index}
                            className={
                              "post_block_2_postImg_container_1 min_height_200px content_spacing_bottom_2" +
                              (index === 1 ? " hide_on_mobile" : "")
                            }
                          >
                            <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_2">
                              <div>
                                <Link link={customPost.slug}>
                                  <h1
                                    dangerouslySetInnerHTML={customPost.title}
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
                              //
                              showCamera={true}
                              showTopRight={true}
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
          <Placeholder animation="glow" className="placeholder_child_3_parent">
            <Placeholder xs={2} bg="dark" className="placeholder_child_3" />
            <Placeholder xs={2} bg="dark" className="placeholder_child_3" />
          </Placeholder>
        )}
      </div>
    </Fragment>
  );
};

export default TwoFeatureArticle;
