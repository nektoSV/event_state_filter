import React from "react";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css"

const USID = require("usid");
const usid = new USID();


export default function ProjectList(props) {
  const projects = props;

  if (!props) {
    console.log("Нет проектов...");
    return null;
  }

const breakpoints = {
  default:3,
  1100:2,
  700:1,
}
  return (
    <div className="projectList-wrap">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >{projects.items.map((elem) => {
          return (
            <div className={"item"} key={usid.rand()}>
              {ProjectItem(elem)}
            </div>
          );
        })}
     </Masonry>
    </div>
  );
}

ProjectList.propTypes = {
  items: PropTypes.array.isRequired,
};
