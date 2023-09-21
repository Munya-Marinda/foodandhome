const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\food_and_home_1\src\index.js</pre>
    </>
  );
};

export default {
  name: "food_and_home_1",
  roots: {
    food_and_home_1: Root
  },
  state: {
    food_and_home_1: {}
  },
  actions: {
    food_and_home_1: {}
  }
};
