import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuIcon } from '@heroicons/react/solid'


const Header = ({ siteTitle }) => (
  <header
    className={"p-4 inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg font-sans"}
  >
    <div className={"mx-auto grid grid-cols-3"}>
        <div className={"py-0"} >
            <Link
                className={"bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white-500 hover:border-transparent rounded"}
            >
                <MenuIcon className=" inline-block h-5 w-5 "/>
            </Link>
        </div>
        <div className={"text-white text-center"}>
            {siteTitle}
        </div>
        <div className={"text-right"} >
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
