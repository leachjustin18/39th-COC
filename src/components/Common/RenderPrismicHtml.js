import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from '../../services/prismic/createMarkup';

class RenderPrismicHtml extends React.PureComponent {
  render() {
    const { children, isSpanTag, className } = this.props;

    return isSpanTag ? (
      <span
        className={className}
        dangerouslySetInnerHTML={createMarkup(children)}
      />
    ) : (
      <div
        className={className}
        dangerouslySetInnerHTML={createMarkup(children)}
      />
    );
  }
}

RenderPrismicHtml.propTypes = {
  children: PropTypes.string.isRequired,
  isSpanTag: PropTypes.bool,
  className: PropTypes.string,
};

export default RenderPrismicHtml;
