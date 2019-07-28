import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    margin: "auto",
    align: "center"
  },
  table: {
    minWidth: 650
  }
}));

const PlayersData = props => {
  const classes = styles();
  return (
    <div>
      {props.list.length !== 0 ? (
        <Paper className={classes.root} style={{ marginTop: "0" }}>
          <Toolbar style={{ padding: "0 40px 14px 16px" }}>
            <div>
              <h3>Players found: {props.list.length}</h3>
            </div>
          </Toolbar>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.list.map((player, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>

                  <TableCell>{player.gender}</TableCell>
                  <TableCell>{player.age}</TableCell>
                  <TableCell>{player.status}</TableCell>
                  <TableCell>{player.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <div style={{ textAlign: "center", padding: "60px ", margin: "auto" }}>
          There are no results that match your search
        </div>
      )}
    </div>
  );
};

export default PlayersData;
