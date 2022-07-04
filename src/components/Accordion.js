import * as React from 'react';
import { useState, useEffect } from 'react';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';

import IsotopeReact from './Isotope';
import Loading  from './Loading';

export default function SimpleAccordion() {


  //load the bio section
  const restPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/pages/73'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(restPath)
          if ( response.ok ) {
              const data = await response.json()
              setData(data)
              setLoadStatus(true)
          } else {
              setLoadStatus(false)
          }
      }
      fetchData()
  }, [restPath])

  return (
    <div>
      <Accordion>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <InfoIcon />Bio
        </AccordionSummary>


        { isLoaded ?
          <AccordionDetails>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.acf.bio}}></div>
           
          </AccordionDetails>
        :
            <Loading />
          
        }
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <DeveloperBoardIcon />Skills
        </AccordionSummary>
        <AccordionDetails>

        <IsotopeReact />

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <SchoolIcon />Education
        </AccordionSummary>
        <AccordionDetails>
          <div className="education-accordion">
            <div className="education-card">
              <p className="education-institution">BCIT - Vancouver, BC</p>
              <p className="education-major">Front End Web Developer Certificate</p>
              <p className="education-duration">Jan 2022 - July 2022</p>
            </div>
            <div className="education-card">
              <p className="education-institution">Fanshawe College - London, ON</p>
              <p className="education-major">Diploma - Accounting</p>
              <p className="education-duration">Sept 2005 - Apr 2007</p>
              <p className="education-notes">Received Fanshawe College Scholastic Excellence Award.</p>
            </div>
            <div className="education-card">
              <p className="education-institution">Wilfrid Laurier University - Waterloo, ON</p>
              <p className="education-major">Major: Communications</p>
              <p className="education-duration">Sept 1997 - Apr 1998</p>
            </div>
          </div>


        </AccordionDetails>
      </Accordion>
    </div>
  );
}