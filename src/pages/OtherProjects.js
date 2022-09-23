import React from 'react';
import { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';

function OtherProjects() {


    const restPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&filter[orderby]=date&order=desc'

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
        <div className='all-projects-section'>
            <h1>All Projects</h1>
            <div className='all-projects-grid'>
                {restData.map((proj2, i) =>
                <div className='single-all-project' key={proj2.id}>

                    <h3>{proj2.title.rendered}</h3>

                    <img
                        src={proj2.acf.project_featured_image.url}
                        className="project-featured-image"
                        alt={proj2.acf.project_featured_image.alt}
                        />
                    <div className="small-button-links">    
                        <a href={proj2.acf.link_to_live_site} target="_blank" rel="noreferrer"><button>Live Site</button></a>
                        {(proj2["featured-projects"].length) !== 0 && 
                        <NavHashLink to={`/projects/${proj2.slug}`}><button>Details</button></NavHashLink>
                        }
                    </div>
                    <p classname='single-all-project-excerpt' dangerouslySetInnerHTML={{__html:proj2.acf.project_excerpt}}></p>
                    
                </div>

                )}
            </div>
        </div>
    )
}

export default OtherProjects