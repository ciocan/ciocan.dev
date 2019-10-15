import React from "react"
import Head from "../components/head"
import { Ciocan } from "../components/ciocan"

const Home = () => (
  <>
    <Head title="ciocan.dev" />
    <Ciocan />

    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </>
)

export default Home
