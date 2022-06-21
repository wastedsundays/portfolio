import * as React from 'react';
import { useState, useEffect } from 'react';
// import Loading from '../images/spinning-record.gif';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';

import IsotopeReact from './Isotope';

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
            // <Loading />
            <p>Hi</p>
        }
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><DeveloperBoardIcon />Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <IsotopeReact />
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography><SchoolIcon />Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <h3>BCIT</h3>
            <h4>Front End Web Developer Certificate</h4>
            <em>Jan 2022 - July 2022</em>

            <h3>Fanshawe College</h3>
            <h4>Diploma - Accounting</h4>
            <em>Sept 2005 - Apr 2007</em>

            <h3>Wilfrid Laurier University</h3>
            <h4>Major: Communications</h4>
            <em>Sept 1997 - June 1998</em>
            


        </AccordionDetails>
      </Accordion>
    </div>
  );
}