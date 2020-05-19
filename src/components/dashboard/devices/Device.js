import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Device = props => {
  console.log(props, "Single device props");
  return (
    <div>
      <TableCell scope="row" align="right">
        {props.item.id}
      </TableCell>
      <TableCell align="right">{props.item.company_id}</TableCell>
    </div>
  );
};

export default Device;
