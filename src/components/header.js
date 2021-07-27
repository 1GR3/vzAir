import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className={"padding-4 inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg font-sans"}
  >
    <div

    >

        <Link
          to="/"
          className={"text-white"}
        >
          {siteTitle}
        </Link>

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
