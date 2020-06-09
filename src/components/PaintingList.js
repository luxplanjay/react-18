import React from "react";
import PropTypes from "prop-types";
import Painting from "./Painting";

const PaintingList = ({ paintings }) => (
  <ul>
    {paintings.map(({ id, url, title, price, author, quantity }) => (
      <li key={id}>
        <Painting
          url={url}
          title={title}
          price={price}
          profileUrl={author.url}
          tag={author.tag}
          quantity={quantity}
        />
      </li>
    ))}
  </ul>
);

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PaintingList;
