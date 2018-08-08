import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './header.scss';
import withRoot from '../../withRoot';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  menuButton: {
    width: 25,
    height: 25,
    display: 'flex',
    alignSelf: 'center',
  },
  menuText: {
    color: 'white',
  },
  menuIcon: {
    color: 'white',
  },
};

class Header extends React.PureComponent {
  render() {
    const { headerContent, classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <div className="header__menuContainer">
              <IconButton className={classes.menuButton} aria-label="Menu">
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
              <Typography className={classes.menuText} variant="caption">
                Menu
              </Typography>
            </div>

            <Link to="/" className="header__link">
              <Typography variant="title" color="inherit">
                {headerContent.title.text}
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  headerContent: PropTypes.object.isRequired,
  classes: PropTypes.object,
};

export default withStyles(styles)(withRoot(Header));
