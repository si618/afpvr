import NavLink from './nav-link';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
  <nav
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
  }}
  >
    <Link
        to="/"
        style={{
            color: `white`,
            fontWeight: 700,
            marginRight: '1rem',
            textDecoration: `none`
        }}
    >
      {siteTitle}
    </Link>
    <NavLink to="/where">Where we fly</NavLink>
    <NavLink to="/when">When we fly</NavLink>
    <NavLink to="/history">Our history</NavLink>
    <NavLink to="/faq">Get involved</NavLink>
    <NavLink to="/contact">Contact us</NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;