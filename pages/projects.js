import React from "react"
import Head from "next/head"
import Link from "next/link"

const projects = [
  {
    title: "Matcha Making Robot",
    description:
      "1st place winner at NVIDIA x HuggingFace x Seeed Studio Embodied AI Hackathon. A robot that autonomously makes matcha using finetuned NVIDIA GR00T VLA and Jetson Thor for low latency inference.",
    image: "/projects/matcha-bot.png",
    link: "https://www.hackster.io/sigrobotics/matcha-bot-sigrobotics-embodied-ai-hackathon-1st-place-f0e520",
  },
  {
    title: "Synapse",
    description:
      "Winner @ HackIllinois 2026 & Best Use of Cloudflare. The most complete, scalable UI/UX feedback loop for developers. Turns user emotions, clicks, intent and direct, unfiltered feedback into automatic PRs.",
    image: "/projects/synapse.png",
    link: "https://devpost.com/software/synapse-dx7hcr",
  },
  {
    title: "MakeMIT: Photon",
    description:
      "Low-cost, effective handheld scanner-style gun that uses near-IR LEDs and lens filter to isolate and create depth mapping of veins. Built at MakeMIT",
    image: "/projects/photon.png",
    link: "https://devpost.com/software/photon-hnrbsq",
  },
]

export default function Projects() {
  return (
    <section className="projects-page">
      <Head>
        <title>Keshav — Projects</title>
      </Head>

      <div className="projects-content">
        <Link
          href="/"
          className="nav-link"
          style={{ marginBottom: "12px", display: "inline-block" }}
        >
          ← Home
        </Link>
        <h2>Projects</h2>
        <p className="projects-intro">
          A collection of things I've built and worked on.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="project-card-link"
              target="_blank"
              rel="noreferrer"
            >
              <article className="project-card">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
