import React from 'react';
import Button from '@material-ui/core/Button';
import withRoot from '../withRoot';

class Index extends React.PureComponent {
  render() {
    return (
      <div>
        Now go build something great
        <Button variant="contained" color="primary">
          button
        </Button>
        <Button variant="contained" color="secondary">
          button
        </Button>
      </div>
    );
  }
}
export default withRoot(Index);
