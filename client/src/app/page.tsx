import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import PopularCourses from './components/PopularCourses'
import FilterCourses from './components/FilterCourses'
import RecentCourseCard from './components/RecentCourseCard'
import AllCoursesSection from './components/AllCoursesSection'
import FeaturedCourseCard from './components/FeaturedCourseCard'
import Footer from './components/Footer'
import ModernContactForm from './contact/components/ContactSection'


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
    <ModernContactForm/>
    <Footer/>
    </>
  )
}
export default page