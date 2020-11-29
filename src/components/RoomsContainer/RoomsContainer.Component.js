import React from "react";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import { RoomConsumer } from "../../context/context";
import Loading from "../loading/loading";
import Title from "../Title/title";
export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, rooms, sortedRooms } = value;
        if (loading) return <Loading />;
        return (
          <div>
            <Title title="Search Rooms" />
            <RoomsFilter sortedRooms={sortedRooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
