import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

export const Status = ({ capStatus, temp, cap, tempStatus }) => {

  return (
    <Grid
      className="plant-status"
      direction="column"
      justify="center"
      alignItems="center"
      container
      wrap="nowrap"
    >
      <Grid item xs={12}>
        <Typography variant="h6" align="center" style={{ paddingBottom: 10 }}>
          {capStatus === "LOW"
            ? "Your plant needs some water!"
            : "Your plant is happy!"}
        </Typography>
        <Typography variant="body2" align="center">
          The surrounding temperature is {temp}º F. That is {tempStatus}.
        </Typography>
        <Typography key={cap} variant="body2" align="center">
          It's got a capacitive moisture reading of {cap}.
        </Typography>
      </Grid>
    </Grid>
  );
};

Status.propTypes = Status.propTypes = {
  cap: PropTypes.string,
  capStatus: PropTypes.string,
  temp: PropTypes.string,
  tempStatus: PropTypes.string
};
