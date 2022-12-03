import styles from "./Slide.module.css"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import classNames from "classnames"

interface Props extends ComponentPropsWithoutRef<"div"> {}

export const Slide = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.slide, className)}>
        {children}
      </div>
    )
  }
)

Slide.displayName = "Slide"
