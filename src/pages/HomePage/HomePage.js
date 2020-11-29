import React from "react";
import Hero from "../../components/Hero/heroComponent";
import Banner from "../../components/banner/banner";
import Services from '../../components/services/ServicesComponent'
import FeaturedRoom from "../../components/FeaturedRoom/featuredRoom.component"
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe room starting at $229">
        <Link to="rooms" className="btn-primary">
          rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeaturedRoom/>
    </>
  );
};

export default HomePage;
