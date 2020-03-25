import React from "react";
import "./cardStyles.css";

export default function Card(props) {
  console.log(props.inventoryItems);
  return (
    <div className='singleCard'>
      <h4>Card: {props.inventoryItems.id} </h4>
      <p>Company: {props.inventoryItems.company_id}</p>
      <p>Serial Number: {props.inventoryItems.serial_number}</p>
      <p>Internal Id: {props.inventoryItems.internal_id}</p>
    </div>
  );
}
