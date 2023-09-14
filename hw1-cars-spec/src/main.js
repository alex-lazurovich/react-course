const container = document.querySelector("#app");
const root = ReactDOM.createRoot(container);

class CarsTable extends React.Component {
  render() {
    const { cars } = this.props;
    return (
      <table>
        {cars.map((car) => (
          <СarBrand key={car.id} car={car} />
        ))}
      </table>
    );
  }
}

class СarBrand extends React.Component {
  render() {
    const { brand, id, models } = this.props.car;
    return (
      <React.Fragment>
        <tr key={id}>
          <th colspan="2" className="car--brand">
            {brand}
          </th>
        </tr>
        {models.map((model) => (
          <CarModel key={model.id} model={model}></CarModel>
        ))}
      </React.Fragment>
    );
  }
}

class CarModel extends React.Component {
  render() {
    const { name, collection } = this.props.model;
    return (
      <React.Fragment>
        <tr>
          <td className="car--model" rowspan={collection.length + 1}>
            <h3>{name}</h3>
          </td>
        </tr>
        {collection.map((model, index) => {
          return (
            <tr key={model[index]}>
              <td>
                <ul>
                  {Object.keys(model)
                    .filter((key) => key !== "id")
                    .map((key, index) => (
                      <li key={index}>
                        {key} : {model[key]}
                      </li>
                    ))}
                </ul>
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }
}

root.render(<CarsTable cars={CARS}></CarsTable>);
