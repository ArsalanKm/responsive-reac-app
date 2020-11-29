import React from "react";
import Hero from "../../components/Hero/heroComponent";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../../context/context";
import RoomsContainer from "../../components/RoomsContainer/RoomsContainer.Component";
const RoomsPage = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/rooms" className="btn-primary">
            rooms
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};
export default RoomsPage;
