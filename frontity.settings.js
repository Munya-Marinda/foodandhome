const settings = {
  name: "foodandhome",
  state: {
    frontity: {
      url: "",
      title: "Food &amp; Home Magazine",
      description:
        "Find the best recipes for any occasion at Food &amp; Home. Find quick and easy recipes, gourmet feast, and more. Get the scoop on the latest foodie news.",
      port: 3001, // Add this line
    },
  },
  packages: [
    {
      name: "food_and_home",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://staging.foodandhome.co.za",
          api: "https://staging.foodandhome.co.za/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
