// Inventory component
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4545/api/devices")
      .then(res => setInventory(res.data))
      .catch(err => console.log(err));
  }, []);

  const companyOne = e => {
    setInventory(inventory.filter(item => item.company_id === 1));
  };

  const companyTwo = e => {
    setInventory(inventory.filter(item => item.company_id === 2));
  };

  const companyThree = e => {
    setInventory(inventory.filter(item => item.company_id === 3));
  };

  return (
    <div>
      <button onClick={companyOne}>Company 1</button>
      <button onClick={companyTwo}>Company 2</button>
      <button onClick={companyThree}>Company 3</button>

      <p>List of items (all of it):</p>

      {inventory.map(inventoryItem => (
        <Card key={inventoryItem.id} inventoryItems={inventoryItem} />
      ))}
    </div>
  );
};

export default Inventory;
