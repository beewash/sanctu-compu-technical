import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="w-screen sticky top-0 z-50 shadow-lg bg-red-800 mb-6">
    <div className="mx-auto max-w-4xl py-6 px-7">
      <h1 className="m-0 p-0">
        <Link
          to="/"
          className="text-white no-underline"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
