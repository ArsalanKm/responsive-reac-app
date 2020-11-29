import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context/context";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomsFilter({ sortedRooms }) {
  const context = useContext(RoomContext);
  const {
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
    rooms,
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="type">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}
        {/* prices */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end prices */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        {/* end of sizze */}
        <div className="form-group">
          <div className="single-extra">
            <input
              onChange={handleChange}
              checked={breakfast}
              type="checkbox"
              id="breakfast"
              name="breakfast"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input
              onChange={handleChange}
              checked={pets}
              type="checkbox"
              id="pets"
              name="pets"
            />
            <label htmlFor="pets">pets </label>
          </div>
        </div>
      </form>
    </section>
  );
}
