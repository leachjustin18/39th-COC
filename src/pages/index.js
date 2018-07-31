import React from 'react';
import Link from 'gatsby-link';
import Button from '@material-ui/core/Button';
import withRoot from '../withRoot';

const IndexPage = () => (
  <div>
    Now go build something great
    <Button variant="contained" color="primary">
      button
    </Button>
    <Button variant="contained" color="secondary">
      button
    </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default withRoot(IndexPage);
