import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About me"
        description="Information about the ucguy4u."
        image="/logo.png"
        pathname="/about"
      // Boolean indicating whether this is an article:
      // article
      />
      <section className={style.wrapper}>
        {/* <Img fluid={data.headerImage.childImageSharp.fluid} alt="Robots" /> */}
        <h1 className={style.heading}>About me</h1>
        <div>
        <h3>I love tinkering with code, and I occasionally write and talk about it.</h3>
        &nbsp;&nbsp;
          <figure className={style.image}>
            <Img
              fixed={data.robotImage.childImageSharp.fixed}
              alt="Eileen the Robot"
            />
          </figure>
          <p>
            My name is Uday Chauhan AKA ucguy4u. I’m a 26 year old full-stack developer from Pune,India. 
            I was fascinated with technology quite early 
            when I got my first computer running Windows xp with 128Mb of RAM and 10GB HDD. 
            I was always curiously interested in technology, music, and gaming.
            I have completed Bachelor's Degree in Computer Engineering from University of Pune (SPPU).
            This site was built with Gatsby and patience. 
          </p>
          <p>
            
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "robots-androids-and-cyborgs-oh-my-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotImage: file(relativePath: { eq: "bubbles-disc.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
