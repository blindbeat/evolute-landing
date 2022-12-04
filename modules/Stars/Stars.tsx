import { Slide } from "components/Slide"
import Image from "next/image"
import backgroundStars from "assets/backgrounds/backgroundStars.png"
import styles from "./Stars.module.css"
import utilStyles from "styles/utils.module.css"
import { motion, MotionStyle, Variants } from "framer-motion"
import { useRef, useState } from "react"
import { useParallax } from "hooks"
import { Star } from "components/Star"
import { Text } from "components/Text/Text"

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
const textBlocks: string[] = [
  "A long time ago in a galaxy far, far away…",
  "Wait, there was even no galaxy and no time!",
  "It all just started with the big bang: uncountable pieces of matter were scattered all over space. You will revive it and build new life forms, from stardust to highly developed humanoids.  Or it will be something else, who knows where this evolution leads… But it’s definitely going to be an outstanding experience when you’re passing a line of a series of games with self-made characters.",
]
export const Stars = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const yText = useParallax({ ref, distance: 0 })
  const yClose = useParallax({ ref, distance: 3 })
  const yFar = useParallax({ ref, distance: 4 })

  const [step, setStep] = useState(0)
  const isLetterDrawing = useRef<boolean>(false)

  const calcState = (index: number) => {
    const blockStateStep = step - index * 3
    if (blockStateStep <= 0) return "hidden"
    else if (blockStateStep === 1) return "visible"
    else if (blockStateStep === 2) return "visibleChildren"
    else return "visibleChildrenImmediately"
  }

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0,
    },
    visibleChildren: (index: number) => {
      if (index === 0) isLetterDrawing.current = true
      return {
        opacity: 1,
        transition: {
          delay: index * 0.025,
          duration: 0,
        },
      }
    },
    visibleChildrenImmediately: {
      opacity: [null, 1],
    },
  }

  const handleAnimationEnd = (animationName: string) => {
    if (animationName === "visibleChildren") isLetterDrawing.current = false
  }

  const handleStep = () => {
    if (!((step + 1) % 3) && !isLetterDrawing.current)
      setStep((step) => step + 2)
    else setStep((step) => step + 1)
  }

  return (
    <Slide ref={ref} onClick={handleStep}>
      <Image
        src={backgroundStars}
        fill
        alt="stars background"
        className={utilStyles.backgroundImage}
      />
      {starPositions.map((style, blockIndex) => (
        <Star
          key={blockIndex}
          style={{
            ...style,
            y: blockIndex % 2 ? yFar : yClose,
            zIndex: 1,
          }}
        />
      ))}
      <div className={styles.textContainer}>
        {textBlocks.map((text, letterIndex) => (
          <Text
            key={letterIndex}
            style={{
              y: yText,
            }}
            animate={calcState(letterIndex)}
            initial={{
              opacity: 0,
            }}
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
            className={styles.text}
          >
            {text.split("").map((letter, index) => (
              <motion.span
                initial={{
                  opacity: 0,
                }}
                custom={index}
                onAnimationComplete={
                  index === text.length - 1 ? handleAnimationEnd : undefined
                }
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
        ))}
      </div>
      <Text
        style={{
          y: yText,
        }}
        className={styles.cta}
      >
        click to continue
      </Text>
    </Slide>
  )
}
