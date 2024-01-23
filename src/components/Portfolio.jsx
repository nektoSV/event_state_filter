import React from "react";

import picturesArr from "../db/dataImg";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = {
      activeFilter: "All",
      pictures: picturesArr,
    };
    this.handlerSelectFilter = this.handlerSelectFilter.bind(this);
  }

  handlerSelectFilter(e) {
    const filter = e.target.textContent;
    let imageData;
    console.log(filter, "filter");
    filter === "All"
      ? (imageData = picturesArr)
      : (imageData = [...picturesArr].filter(
          (elem) => elem.category === filter
        ));

    this.setState({ activeFilter: filter, pictures: imageData });
  }

  render() {
    return (
      <div className={"portfolio-container"}>
        <Toolbar
          filters={this.filters}
          selected={this.state.activeFilter}
          onSelectFilter={this.handlerSelectFilter}
        />
        <ProjectList items={this.state.pictures} />
      </div>
    );
  }
}
