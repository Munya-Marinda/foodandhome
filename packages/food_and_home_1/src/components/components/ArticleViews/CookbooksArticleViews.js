import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { Carousel, Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject, FixInvalidLink } from "../../js/main";
import { FaStar } from "react-icons/fa";

const CookbooksArticleViews = ({
  slice_end,
  slice_start,
  postsSet1,
  WP_SiteUrl,
  postsSet1_categoryID,
}) => {
  return (
    <>
      {postsSet1 !== null ? (
        <>
          {postsSet1 !== false ? (
            <>
              {postsSet1.length !== 0 ? (
                <>
                  <div className="cookbook_carousel_item_parent_2 content_spacing_top_3">
                    {postsSet1
                      .slice(slice_start, slice_end)
                      .map((post, index) => {
                        const customPost = CustomWPRestServicePostObject(
                          WP_SiteUrl,
                          post,
                          postsSet1_categoryID
                        );
                        const customPost_slug = FixInvalidLink(customPost.slug);
                        //
                        //
                        //
                        //
                        return (
                          <div
                            key={index}
                            className="cookbook_carousel_item_container_2"
                          >
                            <Link link={customPost_slug}>
                              <div
                                className="cookbook_carousel_image_div_2"
                                style={{
                                  backgroundImage:
                                    "url('" + customPost.imgUrl + "')",
                                }}
                              >
                                <img
                                  alt="Image"
                                  className="cookbook_carousel_image_2"
                                  src={customPost.imgUrl}
                                />
                                <div className="cookbook_carousel_image_div_2_overlay" />
                              </div>
                              <div className="cookbook_carousel_text_parent_1">
                                <h6
                                  dangerouslySetInnerHTML={customPost.title}
                                />
                              </div>
                              <div className="cookbook_carousel_rating_parent_1">
                                <div className="cookbook_carousel_rating_container_1">
                                  <FaStar size={15} />
                                  <FaStar size={15} />
                                  <FaStar size={15} />
                                  <FaStar size={15} />
                                  <FaStar size={15} />
                                </div>
                                <div className="cookbook_carousel_rating_container_2">
                                  <span>(10 Reviews)</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                <div className="spinner_parent_0">
                  <></>
                </div>
              )}
            </>
          ) : (
            <div className="spinner_parent_0">
              <></>
            </div>
          )}
        </>
      ) : (
        <div className="cook_books_placeholder_parent_2 content_spacing_top_3">
          <Placeholder animation="glow">
            {[
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ]
              .slice(slice_start, slice_end)
              .map((m, n) => (
                <Placeholder key={n} />
              ))}
          </Placeholder>
        </div>
      )}
    </>
  );
};

export default connect(CookbooksArticleViews);
