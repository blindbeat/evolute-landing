import { ComponentPropsWithoutRef } from "react"
import classNames from "classnames"
import styles from "./Text.module.css"
import { motion, MotionProps } from "framer-motion"

export const Text = ({
  children,
  className,
  ...rest
}: MotionProps & ComponentPropsWithoutRef<"div">) => {
  return (
    <motion.div className={classNames(styles.text, className)} {...rest}>
      {children}
    </motion.div>
  )
}
