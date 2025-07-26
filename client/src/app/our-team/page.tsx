import React from 'react'
import TeamHero from './components/TeamHero';
import Navbar from '../components/Navbar';
import EngineeringFaculty from './components/TeamMembers';


const page = () => {
  return (
    <>
    <Navbar/>
    <TeamHero/>
    <EngineeringFaculty/>
    </>
  )
}
export default page;