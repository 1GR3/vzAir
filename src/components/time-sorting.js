import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CogIcon, LocationMarkerIcon } from '@heroicons/react/solid'


const Sorting = () => (
    <div className={""}>
        <div className="flex justify-center rounded-lg text-lg mb-4" role="group" id={"sorting"}>
            <button
                className="rounded-l-lg">
                D
            </button>
            <button
                className="">
                T
            </button>
            <button
                className="rounded-r-lg">
                M
            </button>
        </div>
    </div>
)


export default Sorting