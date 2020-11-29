import React, { Component } from "react";
import { RoomContext } from "../../context/context";
import Loading from "../../components/loading/loading";
import Room from "../Room/room.component";
import Title from "../Title/title";

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms, loading } = this.context;
    const mapedRooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : mapedRooms}
        </div>
      </section>
    );
  }
}
