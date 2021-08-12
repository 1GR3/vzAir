import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Chart from "react-google-charts";
import Particles from "../components/charts/particles"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
      <div className={"flex sm:inline-block md:block"}>
          <div className="flex-1 text-gray-700 text-center bg-gradient-to-br from-gray-400 to-gray-500 px-4 py-2 m-2">
              temperatura/tlak/relativna vlaga
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gradient-to-br from-gray-400 to-gray-500 p-1 m-2">

              <Particles/>
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gradient-to-br from-gray-400 to-gray-500 py-2 m-2">
              amonijak/okidacijski/redukcijski
          </div>
      </div>
      <Seo title="Home" />
      <h1>VŽ Air</h1>
      <p>Environmental quality tracker in Varaždin</p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
  </Layout>
)

export default IndexPage
