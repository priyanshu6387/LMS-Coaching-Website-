import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import PopularCourses from './components/PopularCourses'
import FilterCourses from './components/FilterCourses'
import RecentCourseCard from './components/RecentCourseCard'


const page = () => {
  return (
    <>
     <Navbar/>
     <AboutSection/>
    <PopularCourses/>
    <FilterCourses/>
    <RecentCourseCard/>
    </>
  )
}
export default page