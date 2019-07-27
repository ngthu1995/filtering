import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>State</TableCell>
            </TableHead>
            <TableBody>
              {props.list.map((player, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {player.name}
                  </TableCell>
                  <TableCell>{player.gender}</TableCell>
                  <TableCell>{player.status}</TableCell>
                  <TableCell>{player.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <div>There are no results that match your search</div>
      )}
    </div>
  );
};

export default PlayersData;
