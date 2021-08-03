import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";
const People = React.lazy(() => import("./Components/People"));
const Planets = React.lazy(() => import("./Components/Planets"));
const Movies = React.lazy(() => import("./Components/Movies"));
const Home = React.lazy(() => import("./Components/Home"));
const PeopleDetails = React.lazy(() => import("./Components/PeopleDetails"));
const PlanetDetails = React.lazy(() => import("./Components/PlanetDetails"));
const MovieDetails = React.lazy(() => import("./Components/MovieDetails"));

const useStyles = makeStyles({});

const App = () => {
  const [title, setTitle] = React.useState("");
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header title={title} />
      <React.Suspense fallback={<p>Loading ..</p>}>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Home setTitle={setTitle} {...props} />}
          />
          <Route
            exact
            path='/people'
            render={(props) => <People setTitle={setTitle} {...props} />}
          />
          <Route
            exact
            path='/movies'
            render={(props) => <Movies setTitle={setTitle} {...props} />}
          />
          <Route
            exact
            path='/planets'
            render={(props) => <Planets setTitle={setTitle} {...props} />}
          />
          <Route
            exact
            path='/people/peopledetails/:id'
            render={(props) => <PeopleDetails {...props} />}
          />
          <Route
            exact
            path='/planets/planetdetails/:id'
            render={(props) => <PlanetDetails {...props} />}
          />
          <Route
            exact
            path='/movies/moviedetails/:id'
            render={(props) => <MovieDetails {...props} />}
          />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default App;
