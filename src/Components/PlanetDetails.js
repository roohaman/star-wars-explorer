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
const PlanetDetails = (props) => {
  const classes = useStyles();
  const { history } = props;
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
    return <Redirect to='/' />;
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
                label='Terrain'
                disabled='true'
                value={selectedObject.terrain}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Population'
                disabled='true'
                value={selectedObject.population}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PlanetDetails;
