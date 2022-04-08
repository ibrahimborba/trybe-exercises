import React, { Component } from "react";

class FilterButton extends Component {
  render() {
    const { type, clickEvent } = this.props;
    return  <button onClick={clickEvent} value={type}>{type}</button>
  }
}

export default FilterButton;
