import { Slide } from 'components/Slide'
import styles from './StarDust.module.css'
import nebulaBackground from 'assets/backgrounds/nebula.png'

export const StarDust = () => {
  return (
    <Slide className={styles.container}>
      <div
        className={styles.background}
        style={{
          backgroundImage: 'url(' + nebulaBackground.src + ')',
        }}
      ></div>
    </Slide>
  )
}
