export const menuItems = {
  news: {
    title: "News",
    children: [
      { title: "Trending", slug: "" },
      { title: "Western Cape", slug: "/western-cape" },
      { title: "South Africa", slug: "/south-africa" },
      { title: "World", slug: "/world" },
      { title: "Opinion", slug: "/opinion" },
      { title: "Good News", slug: "/good-news" },
      { title: "Business", slug: "/business" },
      { title: "Sport", slug: "/sport" },
    ],
  },
  "things-to-do": {
    title: "Things To Do",
    children: [
      { title: "Trending", slug: "" },
      { title: "Food & Drink", slug: "/food-&-drink" },
      { title: "Adventure", slug: "/adventure" },
      { title: "Arts & Culture", slug: "/arts-&-culture" },
      { title: "Family", slug: "/family" },
      { title: "Travel & Stay", slug: "/travel-&-stay" },
      { title: "Events & Entertainment", slug: "/events-&-entertainment" },
      { title: "Top Guides", slug: "/top-guides" },
    ],
  },
  competitions: {
    title: "Win",
    children: [
      { title: "Trending", slug: "" },
      { title: "Competitions", slug: "/competitions" },
      { title: "Photo Of The Month", slug: "/photo-of-the-month" },
      { title: "Video Of The Month", slug: "/video-of-the-month" },
    ],
  },
  vouchers: {
    title: "Vouchers",
    children: [],
  },
  videos: {
    title: "Videos",
    children: [
      { title: "Trending", slug: "" },
      { title: "News", slug: "/news" },
      { title: "Things To Do", slug: "/things-to-do" },
    ],
  },
  subscribe: {
    title: "Subscribe",
    children: [],
  },
  advertise: {
    title: "Advertise",
    children: [
      { title: "Contact", slug: "/contact" },
      { title: "Rate Card", slug: "/rate-card" },
    ],
  },
};

export const GetCategoryName = (postCategoriesArray, categoryID) => {
  let postCategoryText = "";
  if (postCategoriesArray.length > 0) {
    postCategoriesArray.forEach((category) => {
      if (categoryID !== null && categoryID !== undefined) {
        if (category.id.toString() === categoryID.toString()) {
          postCategoryText = category.name;
        }
      }
    });
  }
  return postCategoryText;
};

export const CustomWPRestServicePostObject = (
  WP_SiteUrl,
  post,
  post_categoryID,
  substrContent = null,
  substrExerpt = null
) => {
  const postTitle = {
    __html: post.title.rendered,
  };
  const postContent = {
    __html:
      substrContent === null
        ? post.content.rendered
        : post.content.rendered.substring(0, substrContent),
  };
  const postExcerpt = {
    __html:
      substrExerpt === null
        ? post.excerpt.rendered
        : post.excerpt.rendered.substring(0, substrExerpt) +
          (post.excerpt.rendered.length > substrExerpt
            ? "..."
            : ""),
  };
  const postSlug = "//" + post.link.substring(WP_SiteUrl.length);
  const postDate = formatDate(post.date);
  const postCommentsSlug = post._links.replies[0].href;
  //
  let postImgUrl =
    "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  if (post._embedded["wp:featuredmedia"] !== undefined) {
    if (post._embedded["wp:featuredmedia"].length > 0) {
      postImgUrl = post._embedded["wp:featuredmedia"][0].source_url;
    }
  }
  //
  let postViews = post.meta?.Views;
  //
  const postCategoriesArray = post._embedded["wp:term"][0];
  let postCategoryText = GetCategoryName(postCategoriesArray, post_categoryID);
  return {
    title: postTitle,
    slug: postSlug,
    commentsSlug: postCommentsSlug,
    imgUrl: postImgUrl,
    categoryText: postCategoryText,
    date: postDate,
    views: postViews,
    content: postContent,
    excerpt: postExcerpt,
  };
};

export const filterAndSortPosts = (posts) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  // Filter the posts with a date not older than four days ago
  const filteredPosts = posts;
  // const filteredPosts = posts.filter((post) => {
  //     const postDate = new Date(post.date);
  //     return currentDate.getTime() - postDate.getTime() <= 4 * 24 * 60 * 60 * 1000;
  // });

  // Sort the filtered posts by the highest to lowest "Views" meta
  const sortedPosts = filteredPosts.sort((a, b) => {
    const viewsA = parseInt(a.meta.Views, 10);
    const viewsB = parseInt(b.meta.Views, 10);

    // If "Views" meta is not a number or missing, consider it as 0
    const viewsValueA = isNaN(viewsA) ? 0 : viewsA;
    const viewsValueB = isNaN(viewsB) ? 0 : viewsB;

    return viewsValueB - viewsValueA;
  });

  return sortedPosts;
};

export const FixInvalidLink = (link) => {
  if (link === "" || link === undefined || typeof link !== "string") {
    return "#";
  }
  return link;
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

export function formatDate(inputDate) {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const date = new Date(inputDate);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
