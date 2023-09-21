const settings = {
  name: "foodandhome",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "food_and_home_1",
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
