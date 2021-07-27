import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className={"p-4 inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg font-sans"}
  >
    <div className={"container mx-auto grid grid-cols-2"}>
        <div
            className={"py-2"}
        >

            <Link
              to="/"
              className={"text-white py-2"}
            >
              {siteTitle}
            </Link>

        </div>
        <div
            className={"text-right"}
        >
            <button
                className={"bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white-500 hover:border-transparent rounded"}
            >
                +
            </button>
        </div>
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
