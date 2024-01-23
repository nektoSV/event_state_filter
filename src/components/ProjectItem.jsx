import React from "react";
import PropTypes from "prop-types";


export default function ProjectItem(props) {
  const { img, category } = props;

  return (
    <div data-category={category} className={"images-wrap"}>
      <img className={"images"} src={img} alt={"project description"} />
    </div>
  );
}

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

