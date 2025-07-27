import React from 'react'
import Navbar from '../components/Navbar'
import RecordedCourses from './components/RecordedCourses'
import Footer from '../components/Footer'
import RecordedCoursesHero from './components/RecordedCoursesHero'

const page = () => {
  return (
    <>
    <Navbar/>
    <RecordedCoursesHero/>
    <RecordedCourses/>
    <Footer/>
    </>
  )
}

export default page
