import React from "react";
import { Link } from "react-router-dom";


let getDate = (note) => {
    return new Date(note.updated).toLocaleDateString()
}
let getTime = (note) => {
    return new Date(note.updated).toLocaleTimeString()
}

const Items = ({ note }) => {

  return (
    <Link to={`/api/strapi/${note.id}`}>
      <h1>{note.title} </h1>
      <span>{getDate(note)} </span>
      <span>{getTime(note)}</span>
    </Link>
  );
};

export default Items;
