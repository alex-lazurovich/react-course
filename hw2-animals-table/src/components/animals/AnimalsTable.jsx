import React, { PureComponent } from "react";
import AnimalItem from "../animal/AnimalItem";
import "./AnimalsTable.styles.css";

const getArrayRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

export default class AnimalsTable extends PureComponent {
  constructor(props) {
    super(props);
    let { animals } = props;
    animals = animals.map((item) => ({ ...item, selected: false }));
    const notSelectedAnimals = [...animals.keys()];
    this.state = { animals, notSelectedAnimals, interval: 0 };
  }
  componentDidMount() {
    const interval = setInterval(() => {
      const selectIndex = getArrayRandomIndex(this.state.notSelectedAnimals);
      this.setState(
        ({ animals, notSelectedAnimals }) => ({
          animals: animals.map((animal, index) => {
            if (index === notSelectedAnimals[selectIndex]) {
              animal.selected = true;
            }
            return animal;
          }),
          notSelectedAnimals: notSelectedAnimals.toSpliced(selectIndex, 1),
        }),
        () => {
          if (this.state.notSelectedAnimals.length === 0) {
            clearInterval(interval);
          }
        }
      );
    }, 2000);
    this.setState((state) => ({ interval }));
  }

  componentWillUnmount() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  tableStyle() {
    const { notSelectedAnimals, animals } = this.state;
    if (notSelectedAnimals.length === 0) {
      return "all-selected";
    }
    if (notSelectedAnimals.length <= animals.length / 2) {
      return "half-selected";
    }
  }

  render() {
    return (
      <table className={this.tableStyle()}>
        <tbody>
          <tr>
            <th>Type</th>
            <th>Icon</th>
          </tr>
          {this.state.animals
            ? this.state.animals.map(({ type, icon, selected }, index) => (
                <AnimalItem
                  key={index}
                  type={type}
                  icon={icon}
                  selected={selected}
                ></AnimalItem>
              ))
            : null}
        </tbody>
      </table>
    );
  }
}
