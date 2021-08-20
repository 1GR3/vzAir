//import * as React from "react"
import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuIcon } from '@heroicons/react/solid'


const Header = ({ siteTitle }) => {

    const [toggle, setToggle] = useState(false);

    const ToggleClass = () => {
        setToggle( !toggle );
    }

    return(

  <header
    className={"p-4 position-sticky inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg font-sans"}
  >
    <div className={"mx-auto grid grid-cols-3"}>
        <div className={"py-0"} >
            <a
                id={"burgerButton"}
                onClick={ToggleClass}
                className={`bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white-500 hover:border-transparent rounded ${toggle ? 'active' : ''}`}
                //className={"bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white-500 hover:border-transparent rounded"}
            >
                <MenuIcon className=" inline-block h-5 w-5 "/>
            </a>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
