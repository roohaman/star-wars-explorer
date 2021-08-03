import React, { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
const People = ({ setTitle }) => {
  const PEOPLE_API = "https://swapi.dev/api/people/";
  const [people, setPeople] = useState(null);
  const classes = useStyles();
  const loadData = () => {
    axios.get(PEOPLE_API).then((response) => {
      setPeople(response.data);
    });
  };

  React.useEffect(() => {
    loadData();
  }, []);
  React.useEffect(() => {
    setTitle("People");
  });
  //
  if (!people?.results) {
    return " ";
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {people?.results?.map((row, index) => (
              <>
                <Grid
                  container
                  spacing={1}
                  alignItems='flex-end'
                  className={classes.gridContainer}
                >
                  <Grid item>
                    <AccountCircleIcon fontSize='large' />
                  </Grid>
                  <Grid item>
                    <Link
                      className={classes.userName}
                      to={{
                        pathname:
                          "/people/peopledetails/" + (Number(index) + 1),
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

export default People;
