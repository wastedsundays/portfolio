import React from 'react'

import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

function MainPage() {
  return (
    <div>

        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
    </div>
  )
}

export default MainPage