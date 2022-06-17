import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
            <Typography>{children}</Typography>
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
  
  
    const restPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects/70?acf_format=standard'
    
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
      <>
      { isLoaded ?
        <>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs   value={value} 
                    onChange={handleChange} 
                    variant="scrollable"
                    scrollButtons 
                    allowScrollButtonsMobile 
                    aria-label="basic tabs example">
                <Tab label={restData.title.rendered} {...a11yProps(0)} />
                <Tab label="Movie Database" {...a11yProps(1)} />
                <Tab label="Capstone Project" {...a11yProps(2)} />
                <Tab label="Portfolio Site" {...a11yProps(3)} />
              </Tabs>
            </Box>

            {/* Tab Content  */}
            <TabPanel value={value} index={0}>
              {restData.link}
              <img
                  src={restData.acf.project_featured_image}
                  className="featured-image"
                  alt="Logo"
                  />
              {restData.acf.project_description}
              {restData.acf.project_feature}
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
          </Box>
        </>
        :
        <h1>Please wait...</h1>
      }
        </>
    );
  }