import React from 'react'
import CoursesHero from './components/CoursesHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularCourses from '../components/PopularCourses';
import FilterCourses from '../components/FilterCourses';

const page = () => {
  return (
    <>
    <Navbar/>
    <CoursesHero/>
    <PopularCourses/>
    <FilterCourses/>
    
    <Footer/>
    </>
  )
}
export default page;