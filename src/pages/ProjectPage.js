import React from 'react';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeaderBar from '../components/HeaderBar';
import { NavHashLink } from 'react-router-hash-link';
import Loading from '../components/Loading';
import GitHubIcon from '@mui/icons-material/GitHub';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function ProjectPage() {
  const { slug } = useParams()

  const restPath = `https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&slug=${ slug }&_embed`
  
  const [restData, setData] = useState([])    
  const [isLoaded, setLoadStatus] = useState(false)

  // const [showMore, setShowMore] = useState(false);


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
    <HelmetProvider>
    <>
    <HeaderBar />
    { isLoaded ?

      <div className='project-home-section'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{restData[0].title.rendered} | Adam H.</title>
            <link rel="canonical" href={`https://adamh.ca/project-details/${slug}`} />
        </Helmet>

        <img
          src={restData[0].acf.project_featured_image}
          className="featured-image"
          alt={`${restData[0].title.rendered} screenshot`}
        />
        
        <div className='project-details'>
          <h2>{restData[0].title.rendered}</h2>

          <div className='project-section'>
            <h3>{restData[0].acf.description_title}</h3>
            <p dangerouslySetInnerHTML={{__html:restData[0].acf.project_description}}></p>
          </div>

          {restData[0].acf.link_to_live_site !== '' &&
          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_live_site} target="_blank" rel="noreferrer">
              <button className='link-button'>Try It</button>
            </a>
          </div>
          }

            {restData[0].acf.project_image_1 !== false &&
              <div className='project-section'>
                <img loading="lazy" src={restData[0].acf.project_image_1} alt="" className='project-image project-image-1'/>
              </div>
            }
          
          <div className='project-section'>
            <h3>Tools Used</h3>
            <div className='project-tools-grid'>
              {restData[0].acf.tools_used.map(function(image, imageIndex){
              return <img key={ imageIndex } 
                          src={ restData[0].acf.tools_used[imageIndex].url } 
                          alt={restData[0].acf.tools_used[imageIndex].alt} />
              })}
            </div>
          </div>
          
          <div className='project-section'>
            <h3>{restData[0].acf.project_feature_title}</h3>
            <p dangerouslySetInnerHTML={{__html:restData[0].acf.project_feature}}></p>
            {restData[0].acf.code_demo !== '' &&
              <SyntaxHighlighter language="javascript" style={vs}>
                {restData[0].acf.code_demo}
              </SyntaxHighlighter>
            }
          </div>

          {restData[0].acf.link_to_repo !== '' &&
          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_repo} target="_blank" rel="noreferrer">
              <button className='link-button git-link'><GitHubIcon /> <p>Code</p></button>
            </a>
          </div>
          }
          
          
          {restData[0].acf.project_image_2 !== false &&
            <div className='project-section'>
              <img loading="lazy" src={restData[0].acf.project_image_2} alt="" className='project-image project-image-2'/> 
            </div>
          }
         

          {restData[0].acf.design_feature !=='' &&
            <div className='project-section'>
              <h3>{restData[0].acf.design_feature_title}</h3>
              <p dangerouslySetInnerHTML={{__html:restData[0].acf.design_feature}}></p>
            </div>
          }


          <div className="project-bottom-images project-section">
          {restData[0].acf.project_image_3 !== false &&
          <img loading="lazy" src={restData[0].acf.project_image_3} alt="" className='project-image project-image-3'/> 
          }  
          {restData[0].acf.project_image_4 !== false &&
          <img loading="lazy" src={restData[0].acf.project_image_4} alt="" className='project-image project-image-4'/> 
          }  
          </div>

          {restData[0].acf.link_to_design !== '' &&
          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_design} target="_blank" rel="noreferrer">
              <button className='link-button'>Design</button>
            </a>
          </div>
          }

          <div className='project-section'>
          <h3>More Projects</h3>
            <div className='project-navigation'>
              {restData[0].previous !=='' &&
                <NavHashLink to={`/project-details/${restData[0].previous.slug}#top`}>
                <button className="link-button">{restData[0].previous.title}</button>
              </NavHashLink>
                
              }
              {restData[0].next !=='' &&
                <NavHashLink to={`/project-details/${restData[0].next.slug}#top`}>
                <button className="link-button">{restData[0].next.title}</button>
                </NavHashLink>
              }
            </div>
          </div>
        </div> 



      </div>

      
    
      :

      <section className='loading'>
        <Loading />
      </section>
    }
    </>
    </HelmetProvider>
  )
  }

export default ProjectPage