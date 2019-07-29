import React, { Component } from "react";
import "../App.css";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";

class Row extends Component {
  state = {
    edit: false,
    editList: {}
  };

  onEdit = value => {
    this.setState({
      edit: !this.state.edit
    });
  };

  onSave = () => {
    this.props.handleUpdate(this.state.editList);
    this.setState({
      edit: !this.state.edit
    });
  };

  handleChange = (e, criteria) => {
    const data = { ...this.state.editList };
    data["_id"] = this.props.id;
    data[criteria] = e.target.value;
    this.setState({
      [criteria]: e.target.value,
      editList: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <TableRow className={this.state.edit ? "hidden" : "table-row"}>
          <TableCell component="th" scope="row">
            <button onClick={e => this.onEdit(this.props.player._id)}>
              <Edit />
            </button>
          </TableCell>
          <TableCell />
          <TableCell key={this.props.player.name}>
            {this.props.player.name}
          </TableCell>
          <TableCell key={this.props.player.gender}>
            {this.props.player.gender}
          </TableCell>
          <TableCell key={this.props.player.age}>
            {this.props.player.age}
          </TableCell>
          <TableCell key={this.props.player.status}>
            {this.props.player.status}
          </TableCell>
          <TableCell key={this.props.player.state}>
            {this.props.player.state}
          </TableCell>
        </TableRow>
        <TableRow className={this.state.edit ? "table-row-edit" : "hidden"}>
          <TableCell component="th" scope="row">
            <button onClick={e => this.onSave()}>
              <Save />
            </button>
          </TableCell>
          <TableCell>
            <button onClick={e => this.onEdit()}>
              <Cancel />
            </button>
          </TableCell>
          <TableCell>
            <input
              defaultValue={this.props.player.name}
              key={this.props.player.name}
              onChange={e => this.handleChange(e, "name")}
            />
          </TableCell>
          <TableCell>
            <select
              onChange={e => this.handleChange(e, "gender")}
              defaultValue={this.props.player.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </TableCell>
          <TableCell>
            <input
              defaultValue={this.props.player.age}
              onChange={e => this.handleChange(e, "age")}
            />
          </TableCell>
          <TableCell>
            <select
              onChange={e => this.handleChange(e, "status")}
              defaultValue={this.props.player.status}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </TableCell>
          <TableCell>
            <input
              defaultValue={this.props.player.state}
              onChange={e => this.handleChange(e, "state")}
            />
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

export default Row;
