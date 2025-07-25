import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import PopularCourses from './components/PopularCourses'
import FilterCourses from './components/FilterCourses'


const page = () => {
  return (
    <>
     <Navbar/>
     <AboutSection/>
    <PopularCourses/>
    <FilterCourses/>
    </>
  )
}
export default page