import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn
} from "react-icons/fa"

export default function info() {
  return (
    <>
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Alicia.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Software engineer.
        <br /> Working mostly as a front-end developer but have a passion for Android and Kotlin.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/aleepay">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/aliciaphes">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto:pericia@gmail.com">
          <Mail />
        </a>
        <a className="mr-5 icon" href="https://linkedin.com/in/aliciapr">
          <LinkedIn />
        </a>
      </div>
    </div>
    <small class="text-muted">Theme by <a href="https://github.com/Mr404Found/gatsby-starter-profile-site">
      Mr404Found</a></small>
    </>
  )
}
