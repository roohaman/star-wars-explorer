import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MovieIcon from "@material-ui/icons/Movie";
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

const Movies = ({ setTitle }) => {
  const MOVIE_API = "https://swapi.dev/api/films/";
  const classes = useStyles();
  const [movie, setMovie] = useState(null);
  const loadData = () => {
    axios.get(MOVIE_API).then((response) => {
      setMovie(response.data);
    });
  };
  React.useEffect(() => {
    loadData();
  }, []);

  React.useEffect(() => {
    setTitle("Movies");
  });

  if (!movie?.results) {
    return " ";
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {movie?.results?.map((row, index) => (
              <>
                <Grid
                  container
                  spacing={1}
                  alignItems='flex-end'
                  className={classes.gridContainer}
                >
                  <Grid item>
                    <MovieIcon fontSize='large' />
                  </Grid>
                  <Grid item>
                    <Link
                      className={classes.userName}
                      to={{
                        pathname: "/movies/moviedetails/" + (Number(index) + 1),
                        selectedObject: row,
                      }}
                    >
                      {row.title}
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

export default Movies;
