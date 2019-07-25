import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    fetchedData: [],
    filters: []
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios(
        "https://dii-test.s3.amazonaws.com/players.json"
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return <div />;
  }
}

export default App;
