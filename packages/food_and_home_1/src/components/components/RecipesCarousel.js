import { useEffect, useState } from "react";
import { Carousel, Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject, FixInvalidLink } from "../js/main";
import Link from "@frontity/components/link";
import { FaStar } from "react-icons/fa";

//
//
const CustomPrevButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cookbook_carousel_button_prev_parent_1"
      style={{
        transform: "translate(10px, -10px)",
      }}
    >
      <div className="cookbook_carousel_prev_button" />
    </div>
  );
};
const CustomNextButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cookbook_carousel_button_next_parent_1"
      style={{
        transform: "translate(-10px, -10px)",
      }}
    >
      <div className="cookbook_carousel_next_button" />
    </div>
  );
};
//
//

const RecipesCarousel = () => {
  const _postsSet1 = [
    {
      title: "Drinks",
      url: "/recipes/drinks/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Desserts",
      url: "/recipes/desserts/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Salads",
      url: "/recipes/salads/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Soups",
      url: "/recipes/soups/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Chicken",
      url: "/recipes/chicken/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Beef",
      url: "/recipes/beef/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Appetizers",
      url: "/recipes/appetizers/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Seafood",
      url: "/recipes/seafood/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Vegetarian",
      url: "/recipes/vegetarian/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Pasta",
      url: "/recipes/pasta/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Breakfast",
      url: "/recipes/breakfast/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Dinner",
      url: "/recipes/dinner/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Vegan",
      url: "/recipes/vegan/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Gluten-Free",
      url: "/recipes/gluten-free/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Low-Carb",
      url: "/recipes/low-carb/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Asian Cuisine",
      url: "/recipes/asian-cuisine/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Mediterranean",
      url: "/recipes/mediterranean/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Grilling",
      url: "/recipes/grilling/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
    {
      title: "Slow Cooker",
      url: "/recipes/slow-cooker/",
      img: "https://ambassador.daddysdeals.co.za/features/foodandhome-assets/recipe-image-0.png",
    },
  ];
  //
  //
  // FEATURED
  const maxCarouselItems = 6;
  const [postsSet1, setPostsSet1] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [postsChuncksSet1, setPostsChuncksSet1] = useState(null);
  //
  //
  //
  useEffect(() => {
    if (_postsSet1 !== null) {
      if (_postsSet1 !== false && typeof _postsSet1 === "object") {
        if (_postsSet1.length !== 0) {
          const postChunks = [];
          for (let i = 0; i < _postsSet1.length; i += maxCarouselItems) {
            postChunks.push(_postsSet1.slice(i, i + maxCarouselItems));
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
    <div className="recipes_youll_love_parent_1 content_spacing_top_3 content_spacing_bottom_3">
      <div className="cook_books_header_parent_1">
        <div className="cook_books_header_1_container">
          <img
            src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/leaf-left.png"
            className="recipes_youll_love_art_1"
          />
          <h1 className="recipes_youll_love_header_1">
            Recipes
            <span className="recipes_youll_love_header_2"> you'll love</span>
          </h1>
          <img
            src="https://ambassador.daddysdeals.co.za/features/foodandhome-assets/leaf-right-0.png"
            className="recipes_youll_love_art_1"
          />
        </div>
      </div>
      <div className="recipes_youll_love_preview_parent_1">
        <>
          {postsSet1 !== null ? (
            <>
              {postsSet1 !== false ? (
                <>
                  {postsSet1.length !== 0 ? (
                    <>
                      <Carousel
                        indicators={false}
                        onSelect={handleSelect}
                        activeIndex={activeIndex}
                        prevIcon={<CustomPrevButton />}
                        nextIcon={<CustomNextButton />}
                      >
                        {postsChuncksSet1
                          .slice(0, maxCarouselItems)
                          .map((postChunk, index1) => (
                            <Carousel.Item key={index1} className="">
                              <div className="recipes_youll_love_carousel_item_parent_1">
                                {postChunk.map((category, index2) => {
                                  //
                                  //
                                  //
                                  //
                                  return (
                                    <Link key={index2} link={category.url}>
                                      <div className="recipes_youll_love_container">
                                        <img
                                          alt={category.title + " Recipe"}
                                          className="recipes_youll_love_img_1"
                                          src={category.img}
                                        />
                                        <h6 className="recipes_youll_love_text_1">
                                          {category.title}
                                        </h6>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </Carousel.Item>
                          ))}
                      </Carousel>
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
            <div className="recipes_youll_love_placeholder_parent_1">
              <Placeholder animation="glow">
                <Placeholder />
                <Placeholder />
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

export default RecipesCarousel;
