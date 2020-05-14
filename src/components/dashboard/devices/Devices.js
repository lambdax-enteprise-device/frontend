import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Devices = (props) => {
  const classes = useStyles();

  let devicesData = props.devices.devices.data;
  // console.log(relevant, "relevant");

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
            <TableCell>Serial Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(devicesData || []).map((item) => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.company_id}</TableCell>
              <TableCell>{item.device_type_id}</TableCell>
              <TableCell>{item.serial_number}</TableCell>
            </TableRow>
          ))}{" "}
          */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Devices;

/*
   {(relevant || []).map(item => {
              return <Device item={item} />;
            })}

*/
