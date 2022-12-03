import { Asteroids, Stars } from "modules"
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <Stars />
      <Asteroids />
    </>
  )
}

export default Home
