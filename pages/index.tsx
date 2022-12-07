import { Asteroids, Stars } from 'modules'
import { NextPage } from 'next'
import { BigBang } from '../modules/BigBang'
import { Slide } from 'components/Slide'

const Home: NextPage = () => {
  return (
    <>
      <BigBang />
      <Slide />
      <Slide />
      {/*<Asteroids />*/}
      {/*<Stars />*/}
    </>
  )
}

export default Home
