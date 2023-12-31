import React, { useState, useEffect } from "react";
import Switch from "@frontity/components/switch";
import { HelmetProvider, connect } from "frontity";
import GlobalStyles from "./styles/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import fetchMenu from "./handlers/handleMenu";
import NewsAndTrendsCategory from "./pages/NewsAndTrendsCategory";
import NewsAndTrends from "./pages/NewsAndTrends";
import Markets from "./pages/Markets";
import Cookbooks from "./pages/Cookbooks";
import Profiles from "./pages/Profiles";

const Root = ({ state }) => {
  const [headerData, setHeaderData] = useState("/");
  const [formOpen, setFormOpen] = useState(false);
  const [headerStickyContainerHeight, setHeaderStickyContainerHeight] =
    useState(0);
  const [headerIsSticky, setHeaderIsSticky] = useState(false);
  const [menu, setMenu] = useState(null);
  const data = state.source.get(state.router.link);

  //
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const newMenu = await fetchMenu(state);
        setMenu(newMenu);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMenuData();
  }, []);

  const updateHeaderData = (data) => {
    setHeaderData(data);
  };

  const _toggledleSubmitYourContentModal = (bool) => {
    setFormOpen(bool);
  };

  const change_headerStickyContainerHeight = (newHeight) => {
    setHeaderStickyContainerHeight(newHeight);
  };

  const change_headerIsSticky = (isSticky) => {
    setHeaderIsSticky(isSticky);
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
  return (
    <>
      <HelmetProvider>
        {/* REACT-BOOTSTART-CDN START */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        {/* REACT-BOOTSTART-CDN END */}
        {/* FONT DEFINITIONS START */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,900&family=Ms+Madi&family=Noto+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* FONT DEFINITIONS END */}
      </HelmetProvider>
      <GlobalStyles />
      <Header
        menu={menu}
        formOpen={formOpen}
        updateHeaderData={updateHeaderData}
        change_headerIsSticky={change_headerIsSticky}
        change_headerStickyContainerHeight={change_headerStickyContainerHeight}
      />
      <Switch>
        <HomePage
          when={data.route === "/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
        <NewsAndTrends
          when={data.route === "/news-and-trends/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
        <NewsAndTrendsCategory
          when={data.route === "/news-and-trends/restaurants/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
        <Markets
          when={data.route === "/news-and-trends/markets/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
        <Cookbooks
          when={data.route === "/news-and-trends/cookbooks/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
        <Profiles
          when={data.route === "/news-and-trends/profiles/"}
          headerStickyContainerHeight={headerStickyContainerHeight}
          headerIsSticky={headerIsSticky}
        />
      </Switch>
      <Footer
        menu={menu}
        _toggledleSubmitYourContentModal={_toggledleSubmitYourContentModal}
      />
    </>
  );
};

export default connect(Root);
