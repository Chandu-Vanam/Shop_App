import React from "react";
import Categories from "../components/Categories";
import Products2 from "../components/Products2";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FooterCopyright from "../components/FooterCopyright";
import Slider from "../components/Slider";
import Navbar2 from "../components/Navbar2";
import Announcement from "../components/Announcement";

const Judul = styled.div`
  padding-left: 20px;
  font-size: 25px;
  font-weight: 800;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar2 />
      <Slider />
      <Categories />
      <Judul>NEW RELEASE</Judul>
      <Products2 />
      <Newsletter />
      <Footer />
      <FooterCopyright />
    </div>
  );
};

export default Home;
