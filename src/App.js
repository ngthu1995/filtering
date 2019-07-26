import React, { Component } from "react";
import axios from "axios";

import RadioList from "./utils/Radio";
import CheckboxList from "./utils/Checkbox";
import { status, age, gender } from "./utils/categories";

class App extends Component {
  state = {
    fetchedData: [],
    fetchedStates: [],
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
        "http://dii-test.s3.amazonaws.com/players.json"
      );
      const fetchedData = await response.data;
      this.setState({ fetchedData });
      this.fetchStates();
      console.log(this.state.fetchedData);
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
    console.log(arr);
    return arr;
  };

  handleFilters = (filters, criteria) => {
    const newFilters = this.state.filters;
    newFilters[criteria] = filters;
    const duplicateFilters = { ...newFilters };

    if (criteria === "age") {
      this.handleAge(filters);
    }

    this.setState({
      filters: duplicateFilters
    });
  };
  render() {
    return (
      <div>
        <CheckboxList
          title="States"
          list={this.state.fetchedStates}
          handleFilters={filters => this.handleFilters(filters, "state")}
        />
        <RadioList
          title="Age"
          list={age}
          handleFilters={filters => this.handleFilters(filters, "age")}
        />
        <RadioList
          title="Gender"
          list={gender}
          handleFilters={filters => this.handleFilters(filters, "gender")}
        />
        <RadioList
          title="Status"
          list={status}
          handleFilters={filters => this.handleFilters(filters, "status")}
        />
      </div>
    );
  }
}

export default App;
