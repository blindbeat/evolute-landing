import { Slide } from "components/Slide"
import Image from "next/image"
import backgroundStars from "assets/backgrounds/backgroundStars.png"
import star from "assets/entities/star.png"
import styles from "./Stars.module.css"
import utilStyles from "styles/utils.module.css"
import { motion, MotionStyle } from "framer-motion"
import { useRef } from "react"
import { useParallax } from "hooks"
import classNames from "classnames"

const starPositions: MotionStyle[] = [
  {
    left: "10%",
    top: "5%",
  },
  {
    left: "30%",
    top: "25%",
  },
  {
    left: "50%",
    top: "10%",
  },
  {
    left: "80%",
    top: "45%",
  },
  {
    left: "90%",
    top: "5%",
  },
  {
    left: "20%",
    top: "65%",
  },
  {
    left: "60%",
    top: "85%",
  },
  {
    left: "80%",
    top: "45%",
  },
]

export const Stars = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const yClose = useParallax({ ref, distance: 0 })
  const yFar = useParallax({ ref, distance: 3 })

  return (
    <Slide ref={ref}>
      <Image
        src={backgroundStars}
        fill
        alt="stars background"
        className={utilStyles.backgroundImage}
      />
      {starPositions.map((style, index) => (
        <motion.img
          key={index}
          src={star.src}
          alt="star"
          className={classNames(styles.star, utilStyles.entity)}
          style={{
            ...style,
            y: index % 2 ? yFar : yClose,
          }}
        />
      ))}
    </Slide>
  )
}
