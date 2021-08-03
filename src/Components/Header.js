// Header Component
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {props.title}
          </Typography>
          <div>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              chorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleMenuClick("/people")}>
                People
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/planets")}>
                Planets
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/movies")}>
                Movies
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
