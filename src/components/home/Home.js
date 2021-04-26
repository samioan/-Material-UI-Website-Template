import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import linkDetails from "./util/linkDetails";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    backgroundColor: "#000",
    maxWidth: 800,
    minWidth: "60%",
    margin: "auto",
    minHeight: "100vh",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#f00",
  },
  gridList: {
    height: "100vh",
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box className={classes.page}>
        <Box pt={10} pb={5}>
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

        <GridList className={classes.gridList}>
          {linkDetails.map((item) => (
            <GridListTile
              key={item.img}
              style={{ width: "50%", height: `calc(100% / 3)` }}
              component={Link}
              to={{
                pathname: item.site,
              }}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.img} alt={item.title} />
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
      </Box>
    </div>
  );
};

export { Home };
export default Home;
