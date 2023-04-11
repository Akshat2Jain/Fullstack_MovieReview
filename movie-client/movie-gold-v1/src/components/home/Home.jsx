import React from 'react'
import Hero from '../hero/Hero'

const Home = ({movies,loading}) => {
  return (
    <>
    <Hero movies={movies} loading={loading}/>
    </>
  )
}

export default Home