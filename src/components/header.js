import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className={"p-4 inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg font-sans"}
  >
    <div className={"container mx-auto grid grid-cols-2"}>
        <div
            className={"py-0"}
        >
            <button className={"inline-block mr-2"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>

            <Link
              to="/"
              className={"text-white inline-block"}
            >
              {siteTitle}
            </Link>

        </div>
        <div
            className={"text-right"}
        >
            <Link
                to={"/report/"}
                className={"bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white-500 hover:border-transparent rounded"}
            >
                +
            </Link>
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
