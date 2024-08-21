import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AiDog from '../images/ai-dog.png'
import AiHand from '../images/ai-hand.jpg'
import AiGlobe from '../images/ai-globle.jpg'
import CoreServices from '../components/CoreServices'
import LatestInnovations from '../components/LatestInnovations'
import InnovationCard from '../components/InnovationCard'
import StoryCard from '../components/StoryCard'

function Home() {
  return (
    <>
    <Header/>
    <div className='main-body'>
    <div className='main_carousel' style={{backgroundImage:`url(${AiGlobe})`,backgroundRepeat:'no-repeat',}}>
      <h1> Inviting the World to build a responsible AI.</h1>
       <button className='btn btn-explore'>Explore More</button>
    </div>
    <CoreServices/>
    <LatestInnovations/>
    <StoryCard/>
    <StoryCard/>
    <StoryCard/>
    </div>
    <Footer/>
    </>
  )
}

export default Home