import React from 'react'
import TeamHero from './components/TeamHero';
import Navbar from '../components/Navbar';
import EngineeringFaculty from './components/TeamMembers';
import Footer from '../components/Footer';


const page = () => {
  return (
    <>
    <Navbar/>
    <TeamHero/>
    <EngineeringFaculty/>
    <Footer/>
    </>
  )
}
export default page;