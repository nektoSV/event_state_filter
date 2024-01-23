import React from "react";
import PropTypes from "prop-types";
const USID = require("usid");
const usid = new USID();

export default function Toolbar(props) {
  if (!props) {
    console.log("потрачено...");
    return;
  }
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className={"button-block"}>
      {filters.map((filter) => {
        const classActive = filter === selected ? " active" : "";
        return (
          <button
            key={usid.rand()}
            className={"toolbar-item" + classActive}
            onClick={onSelectFilter}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
