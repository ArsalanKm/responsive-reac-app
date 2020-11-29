import React, { Component } from "react";
import items from "../data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSized: 0,
    breakfast: false,
    pets: false,
  };
  // Get data
  componentDidMount() {
    let rooms = this.fromatData(items);
    const featuredRooms = rooms.filter((item) => item.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize: maxSize,
    });
  }
  fromatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };
  getRoom = (slug) => {
    return this.state.rooms.find((item) => item.slug === slug);
  };
  handleChange = (event) => {
    const target = event.target;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      handleChange,
      type,
      capacity,
      price,
      maxPrice,
      minPrice,
      minSize,
      maxSize,
      pets,
      breakfast,
    } = this.state;
    let tempItems = [...rooms];
    capacity = parseInt(capacity);
    // filter type
    if (type !== "all") {
      tempItems = tempItems.filter((item) => item.type === type);
    }
    // filter capacity
    if (capacity !== 1) {
      tempItems = tempItems.filter((item) => item.capacity > capacity);
    }
    // filter price
    tempItems = tempItems.filter((item) => item.price < price);
    // size
    tempItems = tempItems.filter(
      (item) => item.size >= minSize && item.size <= maxSize
    );
    // breackfast
    if (breakfast)
      tempItems = tempItems.filter((item) => item.breakfast === true);
    // pets
    if (pets) tempItems = tempItems.filter((item) => item.pets === true);

    this.setState({
      sortedRooms: tempItems,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// export function withRoomConsumer(Component) {
//   return (props) => {
//     return (
//       <RoomConsumer>
//         {(value) => <Component {...props} context={value}></Component>}
//       </RoomConsumer>
//     );
//   };
// }
export { RoomProvider, RoomConsumer, RoomContext };
