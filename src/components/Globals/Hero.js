import React from "react"
import BackgroundImage from "gatsby-background-image"
export default function Hero({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-gold text-center display-4">{title}</h1>
      {children}
    </BackgroundImage>
  )
}

Hero.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
