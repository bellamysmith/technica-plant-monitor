import React from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";

import { Grid } from "@material-ui/core";

import sadPlantAnimation from "../styles/assets/lottie/sad-plant.json";
import happyPlantAnimation from "../styles/assets/lottie/happy-plant.json";

export const PlantGraphic = ({ plantStatus }) => {
  return (
    <Grid
      className="plant-graphic"
      direction="column"
      justify="center"
      alignItems="center"
      container
    >
      <Grid item xs={12} style={{ minWidth: 200 }}>
        <Lottie
          animationData={
            plantStatus === "LOW" ? sadPlantAnimation : happyPlantAnimation
          }
        />
      </Grid>
    </Grid>
  );
};

PlantGraphic.propTypes = {
  plantStatus: PropTypes.string,
};
