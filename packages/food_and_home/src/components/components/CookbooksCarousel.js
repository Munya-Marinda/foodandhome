import { useEffect, useState } from "react";
import { Carousel, Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject, FixInvalidLink } from "../js/main";
import Link from "@frontity/components/link";

//
//
const CustomPrevButton = ({ onClick }) => {
  return <div onClick={onClick} className="header_prev_button" />;
};
const CustomNextButton = ({ onClick }) => {
  return <div onClick={onClick} className="header_next_button" />;
};
//
//

const CookbooksCarousel = ({ WP_SiteUrl }) => {
  //
  //
  // FEATURED
  const maxCarouselItems = 4;
  const postsSet1_categoryID = 55;
  const [postsSet1, setPostsSet1] = useState(null);
  const [postsChuncksSet1, setPostsChuncksSet1] = useState(null);
  //
  //
  //
  useEffect(() => {
    const fetch1Posts = async () => {
      try {
        const url =
          WP_SiteUrl +
          "/wp-json/wp/v2/posts?categories=" +
          postsSet1_categoryID +
          "&per_page=100&orderby=date&order=desc&_embed";
        const response = await fetch(url);
        if (!response.ok) {
          setPostsSet1(false);
          return;
        }
        const postsData = await response.json();

        // Create an array to hold the chunks of posts
        const chunkSize = 4;
        const postChunks = [];
        for (let i = 0; i < postsData.length; i += chunkSize) {
          postChunks.push(postsData.slice(i, i + chunkSize));
        }
        setPostsChuncksSet1(postChunks);
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
  }, []);
  //
  //
  //
  //
  //
  //
  //
  //

  return (
    <div className="cook_books_parent_1">
      <div className="cook_books_header_parent_1">
        <div className="cook_books_header_1_container">
          <span className="cook_books_header_art_1">{">>>>"}</span>
          <h1 className="cook_books_header_1">Cookbooks</h1>
          <span className="cook_books_header_art_1">{"<<<<"}</span>
        </div>
        <div className="cook_books_header_2_container">
          <h3 className="cook_books_header_2">culinary wisdom unleashed</h3>
        </div>
      </div>
      <div className="cook_books_preview_parent_1">
        {postsSet1 !== null ? (
          <>
            {postsSet1 !== false ? (
              <>
                {postsSet1.length !== 0 ? (
                  <Carousel
                    interval={null}
                    indicators={false}
                    prevIcon={<CustomPrevButton />}
                    nextIcon={<CustomNextButton />}
                  >
                    {postsChuncksSet1
                      .slice(0, maxCarouselItems)
                      .map((postChunk, index1) => (
                        <Carousel.Item key={index1} className="">
                          <div className="cookbook_carousel_item_parent_1">
                            {postChunk.map((post, index2) => {
                              const customPost = CustomWPRestServicePostObject(
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
                                    <img
                                      alt="Image"
                                      className="cookbook_carousel_image_1"
                                      src={customPost.imgUrl}
                                    />
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
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </Carousel.Item>
                      ))}
                  </Carousel>
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
          <div className="nav_wide_placeholder_parent_1">
            <Placeholder animation="glow">
              <Placeholder xs={2} bg="light" />
              <Placeholder xs={2} bg="light" />
              <Placeholder xs={2} bg="light" />
              <Placeholder xs={2} bg="light" />
              <Placeholder xs={2} bg="light" />
            </Placeholder>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookbooksCarousel;
