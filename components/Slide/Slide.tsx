import styles from "./Slide.module.css"
import { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div"> {}
export const Slide = ({ children }: Props) => {
  return <div className={styles.slide}>{children}</div>
}
