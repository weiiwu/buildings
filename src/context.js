import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentful";

const BuildingContext = React.createContext();

export default class BuildingProvider extends Component {
  state = {
    buildings: [],
    sortedBuildings: [],
    awardedDesigns: [],
    loading: true,
    type: "all",
    level: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    investment: false,
    smoking: false
  };

  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "strayaArch",
        //order: "sys.createdAt"
        //order: "-fields.price"
        order: "fields.price"
      });

      let buildings = this.formatData(response.items);

      let awardedDesigns = buildings.filter(
        building => building.awarded === true
      );

      let maxPrice = Math.max(...buildings.map(item => item.price));
      let maxSize = Math.max(...buildings.map(item => item.size));

      this.setState({
        buildings,
        sortedBuildings: buildings,
        awardedDesigns,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let building = { ...item.fields, images, id };
      return building;
    });
    return tempItems;
  }

  getBuilding = slug => {
    let tempBuildings = [...this.state.buildings];
    const building = tempBuildings.find(building => building.slug === slug);

    return building;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterBuildings
    );
  };

  filterBuildings = () => {
    let {
      buildings,
      type,
      level,
      price,
      minSize,
      maxSize,
      smoking,
      investment
    } = this.state;

    // all buildings
    let tempBuildings = [...buildings];
    // transform value
    level = parseInt(level);
    price = parseInt(price);

    // transform value
    level = parseInt(level);

    // filter by type
    if (type !== "all") {
      tempBuildings = tempBuildings.filter(building => building.type === type);
    }

    // filter by level
    if (level !== 1) {
      tempBuildings = tempBuildings.filter(building => building.level >= level);
    }

    // filter by price
    tempBuildings = tempBuildings.filter(building => building.price <= price);

    // filter by size
    tempBuildings = tempBuildings.filter(
      building => building.size >= minSize && building.size <= maxSize
    );

    // filter by investment
    if (investment) {
      tempBuildings = tempBuildings.filter(
        building => building.investment === true
      );
    }

    // filter by smoking
    if (smoking) {
      tempBuildings = tempBuildings.filter(
        building => building.smoking === true
      );
    }

    // change state
    this.setState({
      sortedBuildings: tempBuildings
    });
  };

  render() {
    return (
      <BuildingContext.Provider
        value={{
          ...this.state,
          getBuilding: this.getBuilding,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </BuildingContext.Provider>
    );
  }
}

const BuildingConsumer = BuildingContext.Consumer;

export function withBuildingConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BuildingConsumer>
        {value => <Component {...props} context={value} />}
      </BuildingConsumer>
    );
  };
}

export { BuildingProvider, BuildingConsumer, BuildingContext };
