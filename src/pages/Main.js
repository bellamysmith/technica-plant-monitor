import React from "react";

import styled from "styled-components";
import { IconButton, Typography, Container } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { palette, spacing, typography } from "@material-ui/system";

import { MobileNav } from "../layout";
import { PlantGraphic, Status } from "../components";

import usePlantData from "../hooks/usePlantData";



const Box = styled.div`
  ${palette}${spacing}${typography}
`;

const useStyles = makeStyles({
  list: {
    height: "40vh",
  },
  pb: {
    paddingBottom: 10,
  },
  container: {
    height: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 40,
  },
  fullWidth: {
    width: "100%",
  },
  containerColor: {
    backgroundColor: "#e9e8df",
  },
});

export const Main = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { plantData } = usePlantData({ id: "Bellamy1" });

  console.log("plantData:", plantData );

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className="test" p={{ xs: 2, sm: 3, md: 4 }}>
        <Typography variant="h6" className={classes.pb}>
          How to Use
        </Typography>
        <Typography variant="body2" className={classes.pb}>
          Get a sense of how much water your plant needs at a glance! Use this
          app with the capacitive moisture sensor to get an understanding of how
          damp the soil is.
        </Typography>
        <Typography variant="body2">
          If the plant leaves are brown, show your plant a little love today.
        </Typography>
      </Box>
    </div>
  );

  return (
    <>
      <Container maxWidth='sm' className={classes.container}>
        <div className={classes.fullWidth}>
          <IconButton aria-label='info' onClick={toggleDrawer("top", true)}>
            <InfoIcon fontSize='small' />
          </IconButton>
        </div>
        <SwipeableDrawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
          PaperProps={{ className: classes.containerColor }}
        >
          {list("top")}
        </SwipeableDrawer>
        <Typography variant='h4' align='center'>
          {plantData.loading ? "Loading..." : plantData.data.id}
        </Typography>
        {plantData.loading ? null : (
          <PlantGraphic plantStatus={plantData.data.capStatus} />
        )}
        {plantData.loading ? null :
        <Status
          tempStatus={plantData.data.tempStatus}
          capStatus={plantData.data.capStatus}
          temp={plantData.data.temp}
          cap={plantData.data.cap}
        />
        }

      </Container>
      <MobileNav />
    </>
  );
};
