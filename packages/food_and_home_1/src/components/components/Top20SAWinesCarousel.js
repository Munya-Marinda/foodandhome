import { useEffect, useState } from "react";
import { Carousel, Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject, FixInvalidLink } from "../js/main";
import Link from "@frontity/components/link";
import { FaStar } from "react-icons/fa";

//
//
const CustomPrevButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="cookbook_carousel_button_prev_parent_1">
      <div className="cookbook_carousel_prev_button" />
    </div>
  );
};
const CustomNextButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="cookbook_carousel_button_next_parent_1">
      <div className="cookbook_carousel_next_button" />
    </div>
  );
};
//
//

const Top20SAWinesCarousel = ({ WP_SiteUrl, _postsSet1 }) => {
  //
  //
  // FEATURED
  const maxCarouselItems = 4;
  const postsSet1_categoryID = 55;
  const [postsSet1, setPostsSet1] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [postsChuncksSet1, setPostsChuncksSet1] = useState(null);
  //
  //
  //
  useEffect(() => {
    console.log("child", _postsSet1);
    if (_postsSet1 !== null) {
      if (_postsSet1 !== false && typeof _postsSet1 === "object") {
        if (_postsSet1.length !== 0) {
          const chunkSize = 4;
          const postChunks = [];
          for (let i = 0; i < _postsSet1.length; i += chunkSize) {
            postChunks.push(_postsSet1.slice(i, i + chunkSize));
          }
          setPostsChuncksSet1(postChunks);
          setPostsSet1(_postsSet1);
        }
      }
    }
  }, [_postsSet1]);
  //
  //
  //
  //
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  //
  //
  //
  //
  //
  //

  return (
    <div className="cook_books_parent_1 content_spacing_top_2">
      <div className="cook_books_header_parent_1">
        <div className="cook_books_header_1_container">
          <span className="cook_books_header_art_1">{">>>>"}</span>
          <h1 className="cook_books_header_1">Top 20 SA Wines</h1>
          <span className="cook_books_header_art_1">{"<<<<"}</span>
        </div>
        <div className="cook_books_header_2_container">
          <h3 className="cook_books_header_2">and what to pair them with</h3>
        </div>
      </div>
      <div className="cook_books_preview_parent_1">
        <>
          {postsSet1 !== null ? (
            <>
              {postsSet1 !== false ? (
                <>
                  {postsSet1.length !== 0 ? (
                    <>
                      <Carousel
                        onSelect={handleSelect}
                        activeIndex={activeIndex}
                        prevIcon={<CustomPrevButton />}
                        nextIcon={<CustomNextButton />}
                      >
                        {postsChuncksSet1
                          .slice(0, maxCarouselItems)
                          .map((postChunk, index1) => (
                            <Carousel.Item key={index1} className="">
                              <div className="cookbook_carousel_item_parent_1">
                                {postChunk.map((post, index2) => {
                                  const customPost =
                                    CustomWPRestServicePostObject(
                                      WP_SiteUrl,
                                      post,
                                      postsSet1_categoryID
                                    );
                                  const customPost_slug = FixInvalidLink(
                                    customPost.slug
                                  );
                                  //
                                  //
                                  //
                                  //
                                  return (
                                    <div
                                      key={index2}
                                      className="cookbook_carousel_item_container_1"
                                    >
                                      <Link link={customPost_slug}>
                                        <div
                                          className="cookbook_carousel_image_div_1"
                                          style={{
                                            backgroundImage:
                                              "url('https://ambassador.daddysdeals.co.za/features/foodandhome-assets/wine-0.png')",
                                          }}
                                        >
                                          <img
                                            alt="Image"
                                            className="cookbook_carousel_image_1"
                                            src={
                                              "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/wine-0.png"
                                            }
                                          />
                                          <div className="cookbook_carousel_image_div_1_overlay" />
                                        </div>
                                        <div
                                          key={index2}
                                          className="cookbook_carousel_text_parent_1"
                                        >
                                          <h6
                                            dangerouslySetInnerHTML={
                                              customPost.title
                                            }
                                          />
                                        </div>
                                        <div className="cookbook_carousel_rating_parent_1">
                                          <div className="cookbook_carousel_rating_container_1">
                                            <FaStar size={20} />
                                            <FaStar size={20} />
                                            <FaStar size={20} />
                                            <FaStar size={20} />
                                            <FaStar size={20} />
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
                            </Carousel.Item>
                          ))}
                      </Carousel>
                      <div className="cookbook_custom_carousel_indicators">
                        {postsChuncksSet1
                          .slice(0, maxCarouselItems)
                          .map((postChunk, index) => (
                            <div
                              key={index}
                              onClick={() => handleSelect(index)}
                              className={index === activeIndex ? "active" : ""}
                            ></div>
                          ))}
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
            <div className="cook_books_placeholder_parent_1">
              <Placeholder animation="glow">
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </Placeholder>
            </div>
          )}
        </>
      </div>
    </div>
  );
};
export default Top20SAWinesCarousel;
