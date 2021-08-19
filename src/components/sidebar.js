import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CogIcon, LocationMarkerIcon } from '@heroicons/react/solid'


const Sidebar = () => (
    <aside
        className={"p-4 inset-0 bg-gradient-to-b from-gray-800 to-gray-900"}
    >
        <nav
            className={"font-sans color-white"}
        >
            <ul className={"m-0"}>
                <li>
                    <Link to={""}>
                        <LocationMarkerIcon className={"w-5 h-5 align-center inline-block"}/>
                        karta
                    </Link>
                </li>
                <li>
                    <Link to={""}>
                        <CogIcon className={"w-5 h-5 align-center inline-block"}/>
                        postavke
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
)


export default Sidebar