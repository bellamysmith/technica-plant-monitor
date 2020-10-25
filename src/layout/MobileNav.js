import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EcoIcon from "@material-ui/icons/Eco";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#e9e8df",
  },
});

export const MobileNav = () => {
  const [value, setValue] = React.useState("recents");
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      role="contentinfo"
      value={value}
      onChange={handleChange}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="Add" value="All" icon={<AddIcon />} />
      <BottomNavigationAction
        label="View All"
        value="View All"
        icon={<EcoIcon />}
      />
      <BottomNavigationAction
        label="Settings"
        value="Settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
};

// MobileNav.propTypes = {};
