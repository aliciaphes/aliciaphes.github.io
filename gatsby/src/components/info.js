import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
  FaRegFilePdf as Resume
} from "react-icons/fa"

export default function info() {
  // <div className="h1 code mt-4 mb-3">async {"{"}</div>
  return (
    <>
    <div className="container">
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        ALicia.
      </div>
      <div className="h1 code mt-4 mb-3">fun outline(summary: String) {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Software engineer.
        <br /> Working mostly as a front-end developer but have a passion for Android and Kotlin.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <span className="text-muted text-justify info note">Yes, this would cause a compilation error</span>
      <div className="h1 mt-5">
        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/aleepay">
          <Twitter />
        </a>
        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/aliciaphes">
          <Github />
        </a>
        <a className="icon" href="mailto:pericia@gmail.com">
          <Mail />
        </a>
        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aliciapr">
          <LinkedIn />
        </a>
        <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/aliciaphes/Resume_AliciaPerez/blob/master/Resume_AliciaPerez.pdf">
          <Resume />
        </a>
      </div>
    </div>
    <small class="text-muted">Theme by <a href="https://github.com/Mr404Found/gatsby-starter-profile-site">
      Mr404Found</a></small>
    </>
  )
}
