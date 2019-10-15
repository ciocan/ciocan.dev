import React from "react"
import Link from "next/link"
import GithubIcon from "../icons/github.svg"
import LinkedinIcon from "../icons/linkedin.svg"
import CVIcon from "../icons/cv.svg"

export const Ciocan = () => (
  <div className="container">
    <div className="name-container">
      <svg viewBox="0 0 100 70">
        <foreignObject width="100%" height="100%">
          <div className="name">
            <h1>Radu</h1>
            <h2>Ciocan</h2>
          </div>
        </foreignObject>
      </svg>
    </div>
    <div className="links">
      <Link href="https://github.com/ciocan" prefetch={false}>
        <a title="GitHub Profile" target="_new">
          <GithubIcon />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/ciocan" prefetch={false}>
        <a title="Linkedin Profile" target="_new">
          <LinkedinIcon />
        </a>
      </Link>
      <Link href="/radu-ciocan-resume.pdf">
        <a title="CV PDF Resume " target="_new">
          <CVIcon />
        </a>
      </Link>
    </div>

    <style jsx>{`
      .container {
        border: 3px solid lightgrey;
        margin: 0 auto;
        padding: 20px;
        width: 30%;
        margin-top: 20%;
        display: flex;
        flex-direction: column;
        font-family: "Orbitron", sans-serif;
      }

      .name-container {
        display: flex;
        flex-direction: column;
        color: lightgrey;
        margin: 0;
        padding: 0;
      }

      .name {
      }

      h1,
      h2 {
        font-weight: 400;
        margin: 0;
        padding: 0;
        text-align: center;
        display: block;
      }

      h1 {
        font-size: 1.4em;
        letter-spacing: 12px;
      }

      h2 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.3em;
        letter-spacing: 2px;
      }

      .links {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      }
    `}</style>
  </div>
)
