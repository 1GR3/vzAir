import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Chart from "react-google-charts";
import Particles from "../components/charts/particles"
import TPH from "../components/charts/tph"
import Gas from "../components/charts/gas"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sorting from "../components/time-sorting";

const IndexPage = () => (
  <Layout>
      <Sorting/>
      <div className={"flex sm:inline-block md:block"}>
          <div className="flex-1 text-gray-700 text-center bg-gradient-to-br from-gray-400 to-gray-500 px-4 py-2 m-2">
              <TPH/>
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gradient-to-br from-gray-400 to-gray-500 p-1 m-2">

              <Particles/>
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gradient-to-br from-gray-400 to-gray-500 py-2 m-2">
              amonijak/okidacijski/redukcijski
              <Gas/>
          </div>
      </div>
      <Seo title="Home" />
      <h1>VŽ Air - GIT test</h1>
      <p>Environmental quality tracker in Varaždin</p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
  </Layout>
)

export default IndexPage
