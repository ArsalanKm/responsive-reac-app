import React from "react";

export default function Image({ item, name, toggle }) {
  console.log('item',item);
  return <img onClick={() => toggle(item)} src={item} alt={name} />;
}
