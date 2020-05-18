import React from "react";
//import "./cardStyles.css";
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: 5,
    width: '25em',
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    flexDirection: 'column'
  },
  toot: {marginTop:20}
})

export default function Cards(props) {
  const classes = useStyles();
  console.log(props.inventoryItems);
  return (
    <Card className={classes.root} elevation={6}>
      
      <p>Company: {props.inventoryItems.company_id}</p>
      <p>Serial Number: {props.inventoryItems.serial_number}</p>
      <p>Internal Id: {props.inventoryItems.internal_id}</p>
    </Card>
  );
}
