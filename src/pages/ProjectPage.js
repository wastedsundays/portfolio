import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeaderBar from '../components/HeaderBar';
// import Loop from '../components/Loop'

function ProjectPage() {
  const { id } = useParams()
  const restPath = `https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects/${id}?acf_format=standard`
  
    
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
        <img
          src={restData.acf.project_featured_image}
          className="featured-image"
          alt={`${restData.title.rendered} screenshot`}
        />
        <h2>{restData.title.rendered}</h2>
        <p>{restData.acf.project_description}</p>
        <p>{restData.acf.project_feature}</p>
        <div>
          <button>
            <a href={restData.acf.link_to_live_site}>Try It</a>
          </button>
        </div>
        <div>
          <button>
            <a href={restData.acf.link_to_repo}>Git Repo</a>
          </button>
        </div>
        <img src={restData.acf.project_image_1} alt=""/>
        <img src={restData.acf.project_image_2} alt=""/>

      </div>
      

      :

      <p>bye</p>
    }
    </>


 
  )
  }

export default ProjectPage