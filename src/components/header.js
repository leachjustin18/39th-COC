import React from 'react';
import Link from 'gatsby-link';

class Header extends React.PureComponent {
  render() {
    const { siteTitle } = this.props;
    return (
      <header>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </header>
    );
  }
}

export default Header;
