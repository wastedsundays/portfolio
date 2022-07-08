import * as React from 'react';
import { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IsotopeReact from './Isotope';
import Loading  from './Loading';

export default function SimpleAccordion() {
  const restPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/pages/73?acf_format=standard&_embed'
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
          <AccountCircle />Bio
        </AccordionSummary>

        { isLoaded ?
          <AccordionDetails>
              <div className="accordion-bio">
                <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.acf.bio}}></div>
                <img  srcSet={`${restData.acf.hero_image.sizes.thumbnail} ${restData.acf.hero_image.sizes['thumbnail-width']}w,
                               ${restData.acf.hero_image.sizes.medium} ${restData.acf.hero_image.sizes['medium-width']}w`}
                      sizes={`(max-width: 300px) ${restData.acf.hero_image.sizes['thumbnail-width']}px, ${restData.acf.hero_image.sizes['medium-width']}px`}
                      src={restData.acf.hero_image.sizes.medium}
                      alt={restData.acf.hero_image.alt}
                      className="hero-image"/>
              </div>
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
          { isLoaded ? 
            <div className="education-accordion">
            {restData.acf.education.map((edu, i) => 
              <div key={i} className="education-card">
                <p className="education-institution">{`${restData.acf.education[i].school} - ${restData.acf.education[i].location}`}</p>
                <p className="education-major">{restData.acf.education[i].major}</p>
                <p className="education-duration">{`${restData.acf.education[i].start_date} - ${restData.acf.education[i].end_date}`}</p>
                <p className="education-notes">{restData.acf.education[i].school_notes}</p>
              </div>
              )}
            </div>
          :
            <Loading />
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}