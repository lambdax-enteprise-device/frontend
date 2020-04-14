import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Device from "./Device.js";

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

const Devices = props => {
  const classes = useStyles();
  console.log("Devices comp props,", props.devices);
  console.log("Finding path", props.devices.devices.data);

  let relevant = props.devices.devices.data;
  console.log(relevant, "relevant");

  // relevant.map(item => {
  //   console.log(item);
  // });
  return (
    <div>
      <h1>Devices</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Company ID</TableCell>
            <TableCell>Device Type</TableCell>
            <TableCell>Serial Numer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Need another component here to map over, display in the table body*/}

          {(relevant || []).map(item => {
            return <Device item={item} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Devices;

/*
  {relevant.map(item => {
            return <Device item={item} />;
          })}

*/
