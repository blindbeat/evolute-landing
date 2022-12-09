import { Asteroids, Stars } from 'modules'
import { NextPage } from 'next'
import { BigBang } from '../modules/BigBang'
import { Slide } from 'components/Slide'
import { Star } from 'components/Star'
import { StarDust } from 'modules/StarDust'

const Home: NextPage = () => {
  return (
    <>
      <BigBang />
      <Slide />
      {/*<Slide />*/}
      <StarDust />
      {/*<Asteroids />*/}
      {/*<Stars />*/}
    </>
  )
}

export default Home
