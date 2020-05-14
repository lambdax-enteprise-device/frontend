import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { Menu, MenuItem, MenuList } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

export const MainListItems = props => {
  return (
    <List>

      <ListItem button component={Link} to={"/#"}>
        <ListItemIcon>
          <AddCircleIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Add device" />
      </ListItem>

      <ListItem button component={Link} to={"/#"}>
        <ListItemIcon>
          <CalendarTodayIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Company Info" />
      </ListItem>

      <ListItem button component={Link} to={"/#"}>
        <ListItemIcon>
          <PeopleIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>

        <ListItemText primary="Devices" />
      </ListItem>

      <ListItem button component={Link} to={"/#"}>
        <ListItemIcon>
          <PeopleIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItem>

      <ListItem button component={Link} to={"/#"}>
        <ListItemIcon>
          <MessageIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Requests" />
      </ListItem>

      <ListItem button component={Link} to={"/#"}>
        <ListItemIcon>
          <AccountBoxIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  );
};

//* Would use this secondarylistitems compononet to display admin options.
export const SecondaryListItems = props => {
  return (
    <List>
      <ListSubheader inset>Admin</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <VerifiedUserIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Admin stuff?" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AddBoxIcon style={{ color: "#ff9800" }} />
        </ListItemIcon>
        <ListItemText primary="Let's do some admin things!" />
      </ListItem>
    </List>
  );
};
