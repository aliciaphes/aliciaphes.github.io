import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Card from "../components/card"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

function Talks({ data }) {
  const talksList = data.allTalksYaml.nodes

  // https://github.com/CookPete/react-player

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Talks | ALicia P.</title>
      </Helmet>
      <div className="row">
        {talksList.map(talk => {
          return (
            <Card
              cardTitle={talk.title}
              cardSubtitle={talk.subtitle}
              link={talk.link}
              key={talk.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Talks

export const query = graphql`
  {
    allTalksYaml {
      nodes {
        title
        subtitle
        link
        id
      }
    }
  }
`
