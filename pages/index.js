import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <section className="home-simple">
      <Head>
        <title>Keshav — Home</title>
      </Head>
      <div className="home-content">
        <img src="/headshot.JPG" alt="Keshav Badrinath" className="headshot" />
        <h1 className="name">Keshav Badrinath</h1>
        <p className="role">
          Computer Science at the University of Illinois, Urbana-Champaign
        </p>
        <p className="blurb">
          I'm an undergraduate student researcher at UIUC studying robot
          manipulation policy enhancement via world models and generalized value
          functions under PhD student Shivansh Patel. I'm broadly interested in
          problems related to robotics, deep learning, and computer vision, but
          enjoy building anything and everything that I find interesting and
          worthwhile.
        </p>

        <div className="links">
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <a
            className="nav-link"
            href="https://github.com/Aqtion"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="nav-link"
            href="https://linkedin.com/in/keshav-badrinath"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="nav-link"
            href="https://x.com/keshavbadrinath"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a className="nav-link" href="mailto:keshavbadrinath06@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
