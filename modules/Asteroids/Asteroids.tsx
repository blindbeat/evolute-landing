import { Slide } from "components/Slide"
import styles from "./Asteroids.module.css"
import Image from "next/image"
import backgroundAsteroids from "assets/backgrounds/backgroundAsteroids.png"
import utilStyles from "styles/utils.module.css"
import { motion, MotionStyle } from "framer-motion"
import asteroid from "assets/entities/asteroid1.png"
import { useParallax } from "hooks"
import { useRef } from "react"
import classNames from "classnames"

interface AsteroidParam {
  style: MotionStyle
  rotation: number
  duration: number
}

const asteroidPositions: AsteroidParam[] = [
  {
    style: {
      left: "50%",
      top: "75%",
    },
    rotation: 20,
    duration: 10,
  },
  {
    style: {
      left: "80%",
      top: "35%",
    },
    rotation: 40,
    duration: 15,
  },
  {
    style: {
      left: "10%",
      top: "25%",
    },
    rotation: 80,
    duration: 20,
  },
]

export const Asteroids = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const yClose = useParallax({ ref, distance: 0 })
  const yFar = useParallax({ ref, distance: 3 })
  return (
    <Slide>
      <Image
        src={backgroundAsteroids}
        fill
        alt="stars background"
        className={utilStyles.backgroundImage}
      />
      {asteroidPositions.map(({ style, rotation, duration }, index) => (
        <motion.img
          key={index}
          src={asteroid.src}
          alt="star"
          // initial={false}
          animate={{ rotate: [rotation, 360 + rotation] }}
          transition={{
            repeat: Infinity,
            duration,
            ease: "linear",
          }}
          className={classNames(styles.asteroid, utilStyles.entity)}
          style={{
            ...style,
            y: index % 2 ? yFar : yClose,
          }}
        />
      ))}
    </Slide>
  )
}
