import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

export const Status = ({ plantStatus, temp, cap }) => {
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
          {plantStatus === "sad"
            ? "Your plant needs some water!"
            : "Your plant is happy!"}
        </Typography>
        <Typography variant="body2" align="center">
          The surrounding temperature is {temp}º F.
        </Typography>
        <Typography variant="body2" align="center">
          It's got a capacitive moisture reading of {cap}.
        </Typography>
      </Grid>
    </Grid>
  );
};

Status.propTypes = Status.propTypes = {
  cap: PropTypes.number,
  plantStatus: PropTypes.string,
  temp: PropTypes.number,
};
