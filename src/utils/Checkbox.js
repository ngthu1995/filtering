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
    console.log(newChecked);
    console.log(this.state.checked);
  };

  renderList = () => {
    return this.props.list.map(value => (
      <ListItem key={value._id}>
        <ListItemText>{value}</ListItemText>
        <ListItemSecondaryAction>
          <Checkbox
            checked={this.state.checked.indexOf(value._id) !== -1}
            onClick={e => this.handleToggle(value._id)}
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
