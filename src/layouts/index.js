import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import getPrismicSingleton from '../services/prismic/getSingleton';
import '../styles/root.scss';
class Layout extends React.PureComponent {
  render() {
    const { children, data } = this.props;

    const headerContent = getPrismicSingleton(data.header);

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Header headerContent={headerContent} />

        <div>{children()}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }

    header: allPrismicHeader {
      edges {
        node {
          data {
            title {
              text
            }
            mobile_menu_title {
              text
            }
          }
        }
      }
    }
  }
`;
