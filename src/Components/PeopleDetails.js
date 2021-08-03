import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    fontSize: 15,
  },
});
const PeopleDetails = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [selectedObject, setObject] = useState(null);

  const state = { redirect: null };

  const checkHistory = () => {
    if (history.location.selectedObject === undefined) {
      state.redirect = true;
    }
  };

  const loadComponent = () => {
    checkHistory();
  };

  loadComponent();

  React.useEffect(() => {
    setObject(history.location.selectedObject);
  });

  if (state.redirect) {
    return <Redirect to='/home' />;
  }

  if (!selectedObject) {
    return "Loading... ";
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <h2> {selectedObject.name}</h2>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Height'
                disabled='true'
                value={selectedObject.height}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Mass'
                disabled='true'
                value={selectedObject.mass}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Hair Color'
                disabled='true'
                value={selectedObject.hair_color}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Eye Color'
                disabled='true'
                value={selectedObject.eye_color}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Birth Year'
                disabled='true'
                value={selectedObject.birth_year}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Gender'
                disabled='true'
                value={selectedObject.gender}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PeopleDetails;
