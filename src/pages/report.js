import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const reportPage = () => (
    <Layout>
        <Seo title="Report" />
        <h1>Prijavite:</h1>
        <ul className={"ml-0 report-list"}>
            <li>
                <Link to="/">Smrad</Link>
            </li>
            <li>
                <Link to="/">Buku</Link>
            </li>
            <li>
                <Link to="/">Otpad</Link>
            </li>
            <li>
                <Link to="/">Zagađenje</Link>
            </li>
        </ul>
    </Layout>
)

export default reportPage
