import { Slide } from 'components/Slide'
import { Text } from 'components/Text'
import { motion, Variants } from 'framer-motion'
import styles from './BigBang.module.css'
import { RefObject, useEffect, useRef, useState } from 'react'
import bigBangAnimationSprite from 'assets/backgrounds/big-bang-animation.png'

export const BigBang = () => {
  const text = 'It all started with a Big Bang...'

  const [bigBangAnimating, setBigBangAnimating] = useState(false)
  const [bigBangShow, setBigBangShow] = useState(false)
  const [bigBangAnimatingReverse, setBigBangAnimatingReverse] = useState(false)
  const [bigBangPosition, setBigBangPosition] = useState(0)
  const bigBangRef: RefObject<HTMLDivElement> = useRef(null)

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      setScrollY(window.scrollY)
    })
  }, [bigBangPosition])

  useEffect(() => {
    if (scrollY > 10 && !bigBangShow && !bigBangAnimatingReverse) {
      setBigBangAnimating(true)
    }
    if (scrollY < bigBangPosition && bigBangShow) {
      setBigBangAnimatingReverse(true)
    }
  }, [scrollY, bigBangPosition])

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0,
    },
    visibleChildren: (index: number) => {
      return {
        opacity: 1,
        transition: {
          delay: index * 0.03,
          duration: 0,
        },
      }
    },
    visibleChildrenImmediately: {
      opacity: [null, 1],
    },
  }

  return (
    <Slide className={styles.container}>
      <Text
        initial="visible"
        animate="visibleChildren"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
          visibleChildren: {
            opacity: 1,
          },
          visibleChildrenImmediately: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.15,
        }}
      >
        {text.split('').map((letter, index) => (
          <motion.span
            custom={index}
            variants={letterVariants}
            transition={{
              duration: 0,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </Text>
      <div
        ref={bigBangRef}
        className={`${styles.background} ${
          bigBangAnimating ? styles.animated : ''
        } ${bigBangAnimatingReverse ? styles.reverse : ''} ${
          bigBangShow ? styles.show : ''
        }`}
        style={{
          backgroundImage: 'url(' + bigBangAnimationSprite.src + ')',
          position: bigBangShow && !bigBangAnimating ? 'absolute' : 'fixed',
          top: bigBangShow && !bigBangAnimating ? bigBangPosition : 0,
          ...(bigBangAnimatingReverse && { position: 'fixed', top: 0 }),
        }}
        onAnimationEnd={() => {
          setBigBangAnimating(false)
          setBigBangAnimatingReverse(false)
          setBigBangShow(!bigBangShow)
          setBigBangPosition(window.scrollY)
        }}
      ></div>
    </Slide>
  )
}
