import star1 from 'assets/entities/star/star1.png'
import star2 from 'assets/entities/star/star2.png'
import star3 from 'assets/entities/star/star3.png'
import star4 from 'assets/entities/star/star4.png'
import star5 from 'assets/entities/star/star5.png'
import classNames from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import styles from './Star.module.css'
import utilStyles from 'styles/utils.module.css'
import { useEffect, useState } from 'react'

const stars = [star1, star2, star3, star4, star5]
const frameDelayInMs = 200
export const Star = ({ style }: MotionProps) => {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((frame) => {
        const newFrame = (frame + 1) % stars.length
        // if (newFrame === stars.length - 1) clearInterval(interval)
        return newFrame
      })
    }, frameDelayInMs)
    // if (newFrame === stars.length - 1) {
    //   clearInterval(interval)
    // }
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.img
      onClick={() => setFrame((frame + 1) % stars.length)}
      src={stars[frame].src}
      alt="star"
      className={classNames(styles.star, utilStyles.entity)}
      style={{
        ...style,
      }}
    />
  )
}
