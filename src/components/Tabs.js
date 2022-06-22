import * as React from 'react';
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
        {...other}
      >
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
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
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
                console.log(data);
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

            {setIsLoaded && 
              <Tabs value={value} 
                    onChange={handleChange} 
              // centered={true}
                    variant="scrollable"
                    scrollButtons 
                    allowScrollButtonsMobile 
                    aria-label="basic tabs example">
                  {restData.map((proj, i) => <Tab label={proj.title.rendered} key={proj.id} {...a11yProps(i)} />)}

              </Tabs> }
{/* 
                {restData.map((proj2, i) => 
                <TabPanel value={value} key={proj2.id} index={i} />)} */}

            {restData.map((proj2, i) =>
            <TabPanel value={value} index={i} key={proj2.id}>
              <p>{proj2.title.rendered}</p>
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
              




              {/* <Tabs   value={value} 
                    onChange={handleChange} 
                    // centered={true}
                    variant="scrollable"
                    scrollButtons 
                    allowScrollButtonsMobile 
                    aria-label="basic tabs example">

                <Tab label={restData.title.rendered} {...a11yProps(0)} />
                <Tab label="Movie Database" {...a11yProps(1)} />
                <Tab label="Capstone Project" {...a11yProps(2)} />
                <Tab label="Portfolio Site" {...a11yProps(3)} />
                <Tab label="Example Tab Link" {...a11yProps(4)} />
                <Tab label="Example Tab 2" {...a11yProps(5)} />
              </Tabs> */}
            </Box>

            {/* Tab Content  */}
            {/* <TabPanel value={value} index={0}>

              <img
                  src={restData.acf.project_featured_image}
                  className="featured-image"
                  alt={`${restData.title.rendered} screenshot`}
                  />
              <p>{restData.acf.project_description}</p>
              <p>{restData.acf.project_feature}</p>
              <div>
                <button>
                  <NavLink to={`/project-details/${restData.id}`}>See More</NavLink>
                </button>
              </div>

            </TabPanel>

            <TabPanel value={value} index={1}>
              Movie Database content from Wordpress API custom post type "Projects"
            </TabPanel>

            <TabPanel value={value} index={2}>
              Capstone Project content from Wordpress API custom post type "Projects"
            </TabPanel>

            <TabPanel value={value} index={3}>
              Portfolio Project content from Wordpress API custom post type "Projects"
              Portfolio Project content from Wordpress API custom post type "Projects"
              Portfolio Project content from Wordpress API custom post type "Projects"
              Portfolio Project content from Wordpress API custom post type "Projects"
              Portfolio Project content from Wordpress API custom post type "Projects"
              Portfolio Project content from Wordpress API custom post type "Projects"
              
            </TabPanel>

            <TabPanel value={value} index={4}>
            <NavLink to="/project-details">Link to details page</NavLink>
              
            </TabPanel>

            <TabPanel value={value} index={5}>
            <div><NavLink to="/audio">Link to audio projects page</NavLink></div>

            <div><NavLink to="/logos">Link to logo and artwork page</NavLink></div>
              
            </TabPanel> */}

          </Box>
        </>
        :
        <Loading />
        // <h1>Please wait...</h1>
      }
        </>
    );
  }