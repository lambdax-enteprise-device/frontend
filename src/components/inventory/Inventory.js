// Inventory component
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Inventory() {
  const [inventory, setInventory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4545/api/devices")
      .then(res => setInventory(res.data))
      .catch(err => console.log(err));

    
  },[]);
  console.log(inventory)
  return <div>Test</div>;
}
