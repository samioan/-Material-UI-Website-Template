import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import linkDetails from "./util/linkDetails";

const useStyles = makeStyles({
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#f00",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  clickableIcon: {
    color: "rgba(255, 255, 255, 0.54)",
    "&:hover": {
      color: "rgba(255, 255, 255, 1)",
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Box mt={10} mb={5}>
        <Typography
          className={classes.title}
          variant="h1"
          align="center"
          color="#fff"
          component="h1"
        >
          Selfish Dream
        </Typography>
      </Box>

      <GridList col={4} className={classes.gridList}>
        {linkDetails.map((item) => (
          <GridListTile key={item.img} style={{ width: "50%", height: 230 }}>
            <a href={item.site} target="_blank" rel="noreferrer">
              <img
                src={item.img}
                alt={item.title}
                className="MuiGridListTile-imgFullWidth"
              />
            </a>
            <GridListTileBar
              title={item.title}
              subtitle={item.tagline}
              actionIcon={
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  className={classes.clickableIcon}
                  target="_blank"
                  rel="noreferrer"
                  href={item.site}
                >
                  {item.icon}
                </a>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export { Home };
export default Home;
