import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class PlayerData extends Component {
  state = {
    edit: false,
    editList: {},
    name: "",
    age: 0,
    gender: "",
    status: ""
  };
  componentDidUpdate() {
    !this.state.name &&
      this.setState({
        name: this.props.player.name,
        age: this.props.player.age,
        gender: this.props.player.gender,
        status: this.props.player.status
      });
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     Object.keys(nextProps.player).forEach(key => {
  //       if (nextProps[key] !== this.props.player[key]) {
  //         console.log(this.props.player[key], nextProps.player[key]);
  //         return false;
  //       }
  //     });
  //     return true;
  //   }
  onEdit = value => {
    console.log("clicked");
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
              Edit
            </button>
          </TableCell>
          <TableCell>
            <button onClick={e => this.onEdit(this.props.player._id)}>
              Cancel
            </button>
          </TableCell>
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
            <button onClick={e => this.onSave()}>Save</button>
          </TableCell>
          <TableCell>
            <button onClick={e => this.onEdit()}>Cancel</button>
          </TableCell>
          <TableCell>
            <input
              defaultValue={this.state.name}
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

export default PlayerData;
