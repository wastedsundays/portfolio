// import * as React from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Loading from './Loading';
import { useState, useEffect } from 'react'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 4 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  };
  
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
const restPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard'
    
const [restData, setData] = useState([])    
const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      const fetchData = async () => {
      const response = await fetch(restPath)
      if ( response.ok ) {
        const data = await response.json()
        setData(data)
        setIsLoaded(true)
        } else {
          setIsLoaded(false)
          }
        }
        fetchData()
    }, [restPath])

  return (
    <>
      { isLoaded ?
        <>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: '#0097E9' }}>
              {/* This section creates the tab headers...and some of the options (scrollButtons, etc.) 
              The value for i in {a11yProps(i) has to match the index={i} so that the tab matches the content.
              This is looping, but <Tab label="Title" {a11yProps(0)} /> (followed by 1,2,3 etc if you're not
              dynamically generating these...{a11yProps(1)}. The tab, when clicked, will show the content for whichever
              TabPanel has an index={} equal to that header. Tab is self-closing, TabPanel is not.*/}
              {setIsLoaded && 
                <Tabs value={value} 
                      onChange={handleChange} 
                      variant="scrollable"
                      scrollButtons 
                      allowScrollButtonsMobile 
                      aria-label="basic tabs example">
                      {restData.map((proj, i) => 
                        <Tab label={proj.title.rendered} key={proj.id} {...a11yProps(i)} />)}

                </Tabs> }

                {restData.map((proj2, i) =>
                  <TabPanel value={value} index={i} key={proj2.id}>
                    <img
                          src={proj2.acf.project_featured_image}
                          className="featured-image"
                          alt={`${proj2.title.rendered} screenshot`}
                      />
                    <div>
                      <button>
                        <NavLink to={`/project-details/${proj2.id}`}>See More</NavLink>
                      </button>
                    </div>
                  </TabPanel>)}
              
            </Box>
          </Box>
        </>
        :
        <Loading />
      }
    </>
    );
  }