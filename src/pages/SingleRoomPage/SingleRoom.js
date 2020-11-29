import React, { Component } from "react";
import Hero from "../../components/Hero/heroComponent";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../../context/context";
import StyledeHero from "../../components/StyledHero/styledHero";
import Image from "../../components/ImageComponent/Image";

class SingleRoom extends Component {
  static contextType = RoomContext;
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: "",
    };
  }
  toggle = (src) => {
    this.setState({ defaultBcg: src });
  };
  render() {
    console.log("slug", this.state.slug);
    const room = this.context.getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found....</h3>
          <Link to="/rooms" className="btn-primary">
            rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
      
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledeHero img={this.state.defaultBcg} hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              rooms
            </Link>
          </Banner>
        </StyledeHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <Image toggle={this.toggle} item={item} key={index} name={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>detais</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3> info</h3>
              <h6> price : ${price}</h6>
              <h6> size : {size}</h6>
              <h6> max capacity :{capacity} person</h6>
              <h6> {pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6> {breakfast && "free breackfast"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6> extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
