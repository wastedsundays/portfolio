import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeaderBar from '../components/HeaderBar';
// import Loop from '../components/Loop'

function ProjectPage() {
  // const { id } = useParams()
  const { slug } = useParams()
  // const restPath = `https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects/${id}?acf_format=standard`
  const restPath = `https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&slug=${ slug }`
  
    
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
    <HeaderBar />
    { isLoaded ?
      <div className='project-home-section'>
        {/* <p>{restData[0].id}</p> */}
         <img
          src={restData[0].acf.project_featured_image}
          className="featured-image"
          alt={`${restData[0].title.rendered} screenshot`}
        />
        <div className='project-details'>
          <h2>{restData[0].title.rendered}</h2>

          <div className='project-section'>
            <h3>Description</h3>
            <p>{restData[0].acf.project_description}</p>
          </div>

          {restData[0].acf.link_to_live_site !== '' &&
          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_live_site} target="_blank" rel="noreferrer">
              <button className='link-button'>Try It</button>
            </a>
          </div>
          }

          <div className='project-section'>
            <h3>Tools Used</h3>
          </div>
          
          
          <div className='project-section'>
            <h3>Subheading2</h3>
            <p>{restData[0].acf.project_feature}</p>
          </div>

          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_repo} target="_blank" rel="noreferrer">
              <button className='link-button'>Git Repo</button>
            </a>
          </div>
          
          <img src={restData[0].acf.project_image_1} alt=""/>
          <img src={restData[0].acf.project_image_2} alt=""/> 


        </div> 
      </div>
      

      :

      <section className='loading'>
        <p>bye</p>
      </section>
    }
    </>


 
  )
  }

export default ProjectPage