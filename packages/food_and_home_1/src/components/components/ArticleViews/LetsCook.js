import { Fragment } from "react";
import { connect } from "frontity";
import { Placeholder } from "react-bootstrap";
import Link from "@frontity/components/link";
import { CustomWPRestServicePostObject } from "../../js/main";
import ArticleIcons from "../ArticleIcons";
import { FaGreaterThan } from "react-icons/fa";

const LetsCook = ({
  blurb,
  header,
  postsSet1,
  total_time,
  WP_SiteUrl,
  serves_count,
  categoryHeader,
  categoryHeaderLink,
  postsSet1_categoryID,
  backgroundColor,
}) => {
  return (
    <Fragment>
      <Link
        link={categoryHeaderLink}
        className="post_block_2_headerLink_1"
        style={{ width: "100%" }}
      >
        <div className="post_block_2_header_parent_1 content_spacing_bottom_3">
          <span className="post_block_2_header_1">{categoryHeader}</span>
          <div className="post_block_2_headerLinks_parent_1">
            <span className="magazine_topNews_icon_2">
              <img src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/arrow-greater-than-2.svg" />
            </span>
          </div>
        </div>
      </Link>

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
                    return (
                      <div
                        key={index}
                        className={
                          "profiles_post_block_parent_1 profiles_post_block_" +
                          backgroundColor
                        }
                      >
                        <div className="profiles_post_block_postImg_1_div">
                          <img
                            alt=""
                            src={customPost.imgUrl}
                            className="profiles_post_block_postImg_1"
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
                        <div className="profiles_post_block_text_parent_3">
                          <div
                            className="profiles_post_block_text_container_3"
                            style={{
                              marginBottom: "20px",
                            }}
                          >
                            <h2
                              style={{
                                fontSize: "25px",
                                marginBottom: "20px",
                                color:
                                  backgroundColor === "gray"
                                    ? "black"
                                    : "inherit",
                              }}
                            >
                              {header}
                            </h2>
                            <h1
                              style={{
                                marginBottom: "20px",
                              }}
                            >
                              {blurb}
                            </h1>
                            <h1
                              style={{
                                marginBottom: "0px",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "800",
                                  marginRight: "5px",
                                }}
                              >
                                TOTAL TIME:
                              </span>
                              {total_time}
                            </h1>
                            <h1>
                              <span
                                style={{
                                  fontWeight: "800",
                                  marginRight: "5px",
                                }}
                              >
                                SERVES:
                              </span>
                              {serves_count}
                            </h1>
                          </div>
                          <Link link={customPost.slug}>
                            <button>LET'S COOK</button>
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
        <div className="profiles_post_block_parent_1 profiles_post_block_black">
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
                <Placeholder xs={32} bg="light" style={{ width: "100%" }} />
                <Placeholder xs={32} bg="light" style={{ width: "75%" }} />
                <Placeholder xs={32} bg="light" style={{ width: "50%" }} />
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
    </Fragment>
  );
};

export default connect(LetsCook);
