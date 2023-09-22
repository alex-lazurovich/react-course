import React, { Component } from "react";

import { animals } from "./animals";
import AnimalsTable from "./components/animals/AnimalsTable";

export default class App extends Component {
  render() {
    return <AnimalsTable animals={animals} />;
  }
}
