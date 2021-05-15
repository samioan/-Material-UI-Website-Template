import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import linkDetails from "./util/linkDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = styles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Box className={classes.page}>
        <Box pt={10} pb={5}>
          <Typography className={classes.title} variant="h2" align="center">
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
