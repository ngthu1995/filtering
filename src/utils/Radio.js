import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { ListItemIcon } from "@material-ui/core";

class RadioList extends Component {
  state = {
    checked: "",
    open: false
  };

  componentDidMount() {
    if (this.props.openState) {
      this.setState({
        open: this.props.openState
      });
    }
  }

  handleClick = e => {
    this.setState({
      checked: e.target.value
    });

    this.props.handleFilters(e.target.value);
  };

  handleCollapse = () => {
    this.setState({
      open: !this.state.open
    });
  };

  renderList = () => {
    return this.props.list.map(value => (
      <FormControlLabel
        key={value._id}
        value={this.props.title !== "Age" ? value.name : `${value._id}`}
        control={<Radio />}
        label={value.name}
        onClick={this.handleClick}
        style={{ padding: "0 16px" }}
      />
    ));
  };

  render() {
    return (
      <div>
        <List>
          <ListItem
            onClick={this.handleCollapse}
            style={{ fontSize: "0.875rem" }}
          >
            <ListItemText>{this.props.title}</ListItemText>
            <ListItemIcon style={{ minWidth: "34px" }}>
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
          <Divider absolute />
          <List component="div" disablePadding>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <RadioGroup>{this.renderList()}</RadioGroup>
            </Collapse>
          </List>
        </List>
      </div>
    );
  }
}

export default RadioList;
