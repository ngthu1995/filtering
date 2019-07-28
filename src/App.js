import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import RadioList from "./utils/Radio";
import CheckboxList from "./utils/Checkbox";
import PlayersData from "./components/PlayersData";
import { status, age, gender } from "./utils/categories";

class App extends Component {
  state = {
    fetchedData: [],
    fetchedStates: [],
    playersData: [],
    filters: {
      age: [],
      gender: [],
      state: [],
      status: []
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios(
        "https://dii-test.s3.amazonaws.com/players.json"
      );
      const fetchedData = await response.data;
      this.setState({ fetchedData });
      this.fetchStates();
    } catch (error) {
      console.error(error);
    }
  };

  fetchStates = () => {
    const states = this.state.fetchedStates;
    this.state.fetchedData.forEach(player => {
      if (states.indexOf(player.state) === -1) {
        states.push(player.state);
      }
    });
    this.setState({ fetchedStates: states.sort() });
  };

  handleAge = value => {
    const data = age;
    var arr = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        arr = data[key].array;
      }
    }
    return arr;
  };

  handleFilters = (filters, criteria) => {
    const newFilters = this.state.filters;
    newFilters[criteria] = filters;
    const duplicateFilters = { ...newFilters };

    if (criteria === "age") {
      const ageFilter = this.handleAge(filters);
      duplicateFilters[criteria] = ageFilter;
    }

    this.setState({
      filters: duplicateFilters
    });

    this.showFilters(duplicateFilters);
  };

  showFilters = filters => {
    const data = this.state.fetchedData; //array

    const playersData = data.filter(player => {
      for (let key in filters) {
        if (!filters[key] || filters[key].length === 0) {
          continue;
        }

        switch (key) {
          case "gender":
            if (player[key] !== filters[key].toLowerCase()) {
              return false;
            }
            break;
          case "status":
            if (player[key] !== filters[key].toLowerCase()) {
              return false;
            }
            break;
          case "state":
            if (!filters[key].includes(player[key])) {
              return false;
            }
            break;
          case "age":
            if (
              player[key] > parseInt(filters[key][1]) ||
              player[key] < parseInt(filters[key][0])
            ) {
              return false;
            }
            break;
          default:
            break;
        }
      }
      return true;
    });

    this.setState({ playersData: playersData });
  };

  render() {
    return (
      <div className="search">
        <div className="bar">FIND PLAYERS</div>

        <div className="container">
          <div className="left">
            <RadioList
              title="Age"
              list={age}
              handleFilters={filters => this.handleFilters(filters, "age")}
              openState={true}
            />
            <RadioList
              title="Gender"
              list={gender}
              handleFilters={filters => this.handleFilters(filters, "gender")}
              openState={false}
            />
            <RadioList
              title="Status"
              list={status}
              handleFilters={filters => this.handleFilters(filters, "status")}
              openState={false}
            />
            <CheckboxList
              title="State"
              list={this.state.fetchedStates}
              handleFilters={filters => this.handleFilters(filters, "state")}
              openState="false"
            />
          </div>
          <div className="right">
            <PlayersData list={this.state.playersData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
