const settings = {
  name: "foodandhome",
  state: {
    frontity: {
      url: "",
      title: "Food &amp; Home Magazine",
      description:
        "Find the best recipes for any occasion at Food &amp; Home. Find quick and easy recipes, gourmet feast, and more. Get the scoop on the latest foodie news.",
    },
  },
  packages: [
    {
      name: "capetownetc-theme-1",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://staging.foodandhome.com",
          api: "https://staging.foodandhome.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
