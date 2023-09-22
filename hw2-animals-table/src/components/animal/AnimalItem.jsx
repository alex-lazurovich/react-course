import React, { PureComponent } from "react";
import "./animal.css";

export default class AnimalItem extends PureComponent {
  render() {
    const { selected, type, icon } = this.props;
    return (
      <tr className={selected ? "selected" : ""}>
        <td>{type}</td>
        <td>{icon}</td>
      </tr>
    );
  }
}
