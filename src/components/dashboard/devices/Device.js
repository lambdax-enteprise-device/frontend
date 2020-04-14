import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Device = props => {
  console.log(props, "Single device props");
  return (
    <div>
      <TableRow>
        <TableCell>{props.item.id}</TableCell>
        <TableCell>{props.item.company_id}</TableCell>
      </TableRow>
    </div>
  );
};

export default Device;
