// Inventory component
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    marginBottom: 5
  }
}));

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("http://localhost:4545/api/devices")
      .then(res => setInventory(res.data))
      .catch(err => console.log(err));
  }, [filteredInventory]);

  const companyOne = e => {
    setFilteredInventory(inventory.filter(item => item.company_id === 1));
  };

  const companyTwo = e => {
    setFilteredInventory(inventory.filter(item => item.company_id === 2));
  };

  const companyThree = e => {
    setFilteredInventory(inventory.filter(item => item.company_id === 3));
  };

  const allCompanies = e => {
    setFilteredInventory(inventory);
  };

  return (
    <div>
      <Container maxWidth='md'>
        <Grid
          container
          width={10}
          direction='row'
          justify='space-evenly'
          alignItems='space-between'
          className={classes.root}
        >
          <Button
            className={classes.submit}
            color='primary'
            onClick={allCompanies}
            variant='contained'
          >
            All Companies
          </Button>
          <Button color='primary' variant='contained' onClick={companyOne}>
            Company 1
          </Button>
          <Button color='primary' variant='contained' onClick={companyTwo}>
            Company 2
          </Button>
          <Button color='primary' variant='contained' onClick={companyThree}>
            Company 3
          </Button>
        </Grid>
        <Grid
          container
          width={10}
          direction='column'
          justify='center'
          alignItems='center'
        >
          <p>List of items (all of it):</p>

          {filteredInventory.length == 0
            ? inventory.map(inventoryItem => (
                <Cards key={inventoryItem.id} inventoryItems={inventoryItem} />
              ))
            : filteredInventory.map(inventoryItem => (
                <Cards key={inventoryItem.id} inventoryItems={inventoryItem} />
              ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Inventory;
