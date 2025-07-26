import React from 'react'
import CoursesHero from './components/CoursesHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularCourses from '../components/PopularCourses';
import FilterCourses from '../components/FilterCourses';
import RecentCourseCard from '../components/RecentCourseCard';

const page = () => {
  return (
    <>
    <Navbar/>
    <CoursesHero/>
    <PopularCourses/>
    <FilterCourses/>
    <RecentCourseCard/>
    <Footer/>
    </>
  )
}
export default page;