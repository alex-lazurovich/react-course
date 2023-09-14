var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var container = document.querySelector("#app");
var root = ReactDOM.createRoot(container);

var CarsTable = function (_React$Component) {
  _inherits(CarsTable, _React$Component);

  function CarsTable() {
    _classCallCheck(this, CarsTable);

    return _possibleConstructorReturn(this, (CarsTable.__proto__ || Object.getPrototypeOf(CarsTable)).apply(this, arguments));
  }

  _createClass(CarsTable, [{
    key: "render",
    value: function render() {
      var cars = this.props.cars;

      return React.createElement(
        "table",
        null,
        cars.map(function (car) {
          return React.createElement(СarBrand, { key: car.id, car: car });
        })
      );
    }
  }]);

  return CarsTable;
}(React.Component);

var СarBrand = function (_React$Component2) {
  _inherits(СarBrand, _React$Component2);

  function СarBrand() {
    _classCallCheck(this, СarBrand);

    return _possibleConstructorReturn(this, (СarBrand.__proto__ || Object.getPrototypeOf(СarBrand)).apply(this, arguments));
  }

  _createClass(СarBrand, [{
    key: "render",
    value: function render() {
      var _props$car = this.props.car,
          brand = _props$car.brand,
          id = _props$car.id,
          models = _props$car.models;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "tr",
          { key: id },
          React.createElement(
            "th",
            { colspan: "2", className: "car--brand" },
            brand
          )
        ),
        models.map(function (model) {
          return React.createElement(CarModel, { key: model.id, model: model });
        })
      );
    }
  }]);

  return СarBrand;
}(React.Component);

var CarModel = function (_React$Component3) {
  _inherits(CarModel, _React$Component3);

  function CarModel() {
    _classCallCheck(this, CarModel);

    return _possibleConstructorReturn(this, (CarModel.__proto__ || Object.getPrototypeOf(CarModel)).apply(this, arguments));
  }

  _createClass(CarModel, [{
    key: "render",
    value: function render() {
      var _props$model = this.props.model,
          name = _props$model.name,
          collection = _props$model.collection;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { className: "car--model", rowspan: collection.length + 1 },
            React.createElement(
              "h3",
              null,
              name
            )
          )
        ),
        collection.map(function (model, index) {
          return React.createElement(
            "tr",
            { key: model[index] },
            React.createElement(
              "td",
              null,
              React.createElement(
                "ul",
                null,
                Object.keys(model).filter(function (key) {
                  return key !== "id";
                }).map(function (key, index) {
                  return React.createElement(
                    "li",
                    { key: index },
                    key,
                    " : ",
                    model[key]
                  );
                })
              )
            )
          );
        })
      );
    }
  }]);

  return CarModel;
}(React.Component);

root.render(React.createElement(CarsTable, { cars: CARS }));