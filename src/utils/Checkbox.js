import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

class CheckboxList extends Component {
  state = {
    checked: []
  };

  handleToggle = value => {
    var checked = this.state.checked;
    const valueIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (valueIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(valueIndex, 1);
    }

    this.setState({ checked: newChecked });
    this.props.handleFilters(newChecked);
    console.log(newChecked);
    console.log(this.state.checked);
  };

  renderList = () => {
    return this.props.list.map((value, index) => (
      <ListItem key={index}>
        <ListItemText>{value}</ListItemText>
        <ListItemSecondaryAction>
          <Checkbox
            checked={this.state.checked.indexOf(value) !== -1}
            onClick={e => this.handleToggle(value)}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <List>{this.renderList()}</List>
      </div>
    );
  }
}

export default CheckboxList;
