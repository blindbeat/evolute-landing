import { Slide } from 'components/Slide'
import styles from './Asteroids.module.css'
import Image from 'next/image'
import backgroundAsteroids from 'assets/backgrounds/backgroundAsteroids.png'
import utilStyles from 'styles/utils.module.css'
import { motion, MotionStyle } from 'framer-motion'
import asteroid from 'assets/entities/asteroid1.png'
import { useParallax } from 'hooks'
import { useRef } from 'react'
import classNames from 'classnames'
import { Star } from 'components/Star'

interface AsteroidParam {
  style: MotionStyle
  rotation: number
  duration: number
}

const asteroidPositions: AsteroidParam[] = [
  {
    style: {
      left: '10%',
      top: '45%',
    },
    rotation: 80,
    duration: 45,
  },
  {
    style: {
      left: '45%',
      top: '85%',
    },
    rotation: 20,
    duration: 30,
  },
  {
    style: {
      left: '70%',
      top: '35%',
    },
    rotation: 200,
    duration: 60,
  },
  {
    style: {
      left: '31%',
      top: '65%',
    },
    rotation: 200,
    duration: 60,
  },
]
const starPositions: MotionStyle[] = [
  {
    left: '10%',
    top: '4%',
  },
  {
    left: '20%',
    top: '25%',
  },
  {
    left: '65%',
    top: '8%',
  },
  {
    left: '76%',
    top: '45%',
  },
  {
    left: '90%',
    top: '5%',
  },
  {
    left: '40%',
    top: '65%',
  },
  {
    left: '60%',
    top: '85%',
  },
  {
    left: '80%',
    top: '75%',
  },
  {
    left: '10%',
    top: '95%',
  },
  {
    left: '50%',
    top: '48',
  },
  {
    left: '54%',
    top: '38%',
  },
  {
    left: '28%',
    top: '51%',
  },

  {
    left: '88%',
    top: '91%',
  },
]

export const Asteroids = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const yClose = useParallax({ ref, distance: 0 })
  const yMedium = useParallax({ ref, distance: 2 })
  const yFar = useParallax({ ref, distance: 4 })

  const ys = [yClose, yMedium, yFar]
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
          animate={{ rotate: [rotation, 360 + rotation] }}
          transition={{
            repeat: Infinity,
            duration,
            ease: 'linear',
          }}
          className={classNames(styles.asteroid, utilStyles.entity)}
          style={{
            ...style,
            zIndex: 2,
            y: ys[index % 3],
          }}
        />
      ))}
      {starPositions.map((style, index) => (
        <Star
          key={index}
          style={{
            ...style,
            y: ys[index % 3],
          }}
        />
      ))}
    </Slide>
  )
}
