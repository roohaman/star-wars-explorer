import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MovieIcon from "@material-ui/icons/Movie";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PublicIcon from "@material-ui/icons/Public";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: "100px",
  },
}));
const Home = ({ setTitle }) => {
  const classes = useStyles();
  React.useEffect(() => {
    setTitle("Star Wars Explorer");
  });
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Link to='/people' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<EmojiPeopleIcon />}
            >
              People
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to='/planets' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<PublicIcon />}
            >
              Planets
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to='/movies' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<MovieIcon />}
            >
              Movies
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
