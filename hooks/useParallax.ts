import { useScroll, useTransform } from 'framer-motion'
import { RefObject } from 'react'

interface Params {
  ref: RefObject<HTMLElement>
  distance: number
}

export const useParallax = ({ ref, distance }: Params) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rangeStep = 150
  const outputRange =
    distance >= 0 && distance <= 5 ? rangeStep * (5 - distance) : 0
  return useTransform(scrollYProgress, [0, 1], [outputRange, -outputRange])
}
