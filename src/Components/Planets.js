import React, { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    fontSize: 15,
  },
  userName: {
    textDecoration: "none",
    position: "absolute",
    top: 12,
  },
  gridContainer: {
    position: "relative",
  },
});

const Planets = ({ setTitle }) => {
  const PLANETS_API = "https://swapi.dev/api/planets/";
  const [planets, setPlanets] = useState(null);
  const classes = useStyles();
  const loadData = () => {
    axios.get(PLANETS_API).then((response) => {
      setPlanets(response.data);
    });
  };

  React.useEffect(() => {
    loadData();
  }, []);
  React.useEffect(() => {
    setTitle("Planets");
  });
  //
  if (!planets?.results) {
    return "";
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {planets?.results?.map((row, index) => (
              <>
                <Grid
                  container
                  spacing={1}
                  alignItems='flex-end'
                  className={classes.gridContainer}
                >
                  <Grid item>
                    <PublicIcon fontSize='large' />
                  </Grid>
                  <Grid item>
                    <Link
                      className={classes.userName}
                      to={{
                        pathname:
                          "/planets/planetdetails/" + (Number(index) + 1),
                        selectedObject: row,
                      }}
                    >
                      {row.name}
                    </Link>
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Planets;
