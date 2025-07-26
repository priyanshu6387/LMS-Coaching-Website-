import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import PopularCourses from './components/PopularCourses'
import FilterCourses from './components/FilterCourses'
import RecentCourseCard from './components/RecentCourseCard'
import AllCoursesSection from './components/AllCoursesSection'
import FeaturedCourseCard from './components/FeaturedCourseCard'
import Footer from './components/Footer'


const page = () => {
  return (
    <>
     <Navbar/>
     <AboutSection/>
    <PopularCourses/>
    <FilterCourses/>
    <RecentCourseCard/>
    <FeaturedCourseCard/>
    <AllCoursesSection/>
    <Footer/>
    </>
  )
}
export default page