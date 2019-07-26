import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class RadioList extends Component {
  state = {
    checked: ""
  };

  handleClick = e => {
    this.setState({
      checked: e.target.value
    });

    this.props.handleFilters(e.target.value);
  };

  renderList = () => {
    return this.props.list.map(value => (
      <FormControlLabel
        key={value._id}
        value={`${value._id}`}
        control={<Radio />}
        label={value.name}
      />
    ));
  };
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <RadioGroup onClick={this.handleClick}>{this.renderList()}</RadioGroup>
      </div>
    );
  }
}

export default RadioList;
