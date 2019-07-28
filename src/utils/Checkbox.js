import React, { Component } from "react";
import "../App.css";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { ListItemIcon } from "@material-ui/core";

class CheckboxList extends Component {
  state = {
    open: false,
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
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  renderList = () => {
    return this.props.list.map((value, index) => (
      <ListItem key={index}>
        <ListItemText primary={value} />
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
        <List>
          <List>
            <ListItem onClick={this.handleClick}>
              <ListItemText>{this.props.title}</ListItemText>
              <ListItemIcon style={{ minWidth: "34px" }}>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider absolute />
          <List component="div" disablePadding>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List>{this.renderList()}</List>
            </Collapse>
          </List>
        </List>
      </div>
    );
  }
}

export default CheckboxList;
