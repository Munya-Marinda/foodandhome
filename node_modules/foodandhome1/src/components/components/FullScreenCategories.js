import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const FullScreenCategories = () => {
  return (
    <>
      <div className="fullScreenCategories_slider_parent">
        <div className="fullScreenCategories_slider_parent_slide-track">
          {[
            [
              "FOOD & DRINK",
              "/things-to-do/food-and-drink/",
              "foodAndDrink_wallpaper_1",
            ],
            [
              "TRAVEL & STAY",
              "/things-to-do/travel/",
              "travelAndStay_wallpaper_1",
            ],
            ["FAMILY", "/things-to-do/family/", "family_wallpaper_1"],
            ["ADVENTURE", "/things-to-do/adventure/", "adventure_wallpaper_1"],
            [
              "EVENTS & ENTERTAINMENT",
              "/things-to-do/entertainment/",
              "eventsAndEntertainment_wallpaper_1",
            ],
            [
              "ARTS & CULTURE",
              "/things-to-do/culture/",
              "artsAndCulture_wallpaper_1",
            ],
            [
              "TOP GUIDES",
              "/things-to-do/things-to-do-top-guides/",
              "topGuides_wallpaper_1",
            ],
            [
              "FOOD & DRINK",
              "/things-to-do/food-and-drink/",
              "foodAndDrink_wallpaper_1",
            ],
            [
              "TRAVEL & STAY",
              "/things-to-do/travel/",
              "travelAndStay_wallpaper_1",
            ],
            ["FAMILY", "/things-to-do/family/", "family_wallpaper_1"],
            ["ADVENTURE", "/things-to-do/adventure/", "adventure_wallpaper_1"],
            [
              "EVENTS & ENTERTAINMENT",
              "/things-to-do/entertainment/",
              "eventsAndEntertainment_wallpaper_1",
            ],
            [
              "ARTS & CULTURE",
              "/things-to-do/culture/",
              "artsAndCulture_wallpaper_1",
            ],
            [
              "TOP GUIDES",
              "/things-to-do/things-to-do-top-guides/",
              "topGuides_wallpaper_1",
            ],
          ].map((category, n) => {
            return (
              <Link
                key={n}
                link={category[1]}
                className="fullScreenCategories_slider_parent_slide"
              >
                <div className="full_screen_categories_container_1">
                  <div className={"category_wallpaper_1 " + category[2]}></div>
                  <div className="category_overlay_1"></div>
                  <span>{category[0]}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* <div className="full_screen_categories_parent_1">
      <Link link="/things-to-do/food-and-drink/">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 foodAndDrink_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> FOOD & DRINK </span>
        </div>
      </Link>
      <Link link="/things-to-do/travel/">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 travelAndStay_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> TRAVEL & STAY </span>
        </div>
      </Link>
      <Link link="/things-to-do/family">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 family_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> FAMILY </span>
        </div>
      </Link>
      <Link link="/things-to-do/adventure">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 adventure_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> ADVENTURE </span>
        </div>
      </Link>
      <Link link="/things-to-do/entertainment/">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 eventsAndEntertainment_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> EVENTS & ENTERTAINMENT </span>
        </div>
      </Link>
      <Link link="/things-to-do/culture/">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 artsAndCulture_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> ARTS & CULTURE </span>
        </div>
      </Link>
      <Link link="/things-to-do/things-to-do-top-guides/">
        <div className="full_screen_categories_container_1">
          <div className="category_wallpaper_1 topGuides_wallpaper_1"></div>
          <div className="category_overlay_1"></div>
          <span> TOP GUIDES </span>
        </div>
      </Link>
    </div> */}
    </>
  );
};

export default connect(FullScreenCategories);
