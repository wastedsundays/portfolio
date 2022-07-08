import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { NavHashLink } from 'react-router-hash-link';
import HeaderBar from '../components/HeaderBar';
import Loading from '../components/Loading';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';




function ProjectPage() {
  const { slug } = useParams()

  const restPath = `https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&slug=${ slug }&_embed`
  
  const [restData, setData] = useState([])    
  const [isLoaded, setLoadStatus] = useState(false)

  const [showMore, setShowMore] = useState(false);


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
            <title>{restData[0].title.rendered} | Adam H.</title>
            <link rel="canonical" href={`https://adamh.ca/projects/${slug}`} />
            <meta name="description" content={`${restData[0].title.rendered}, a project completed by a Adam Hauck, a Front-end web developer based in Vancouer, BC`} />
        </Helmet>

        <img
          src={restData[0].acf.project_featured_image.url}
          className="project-featured-image"
          alt={restData[0].acf.project_featured_image.alt}
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
                <figure>
                  <img loading="lazy" src={restData[0].acf.project_image_1.url} alt={restData[0].acf.project_image_1.alt} className='project-image project-image-1'/>
                  <figcaption>{restData[0].acf.project_image_1.caption}</figcaption>
                </figure>
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
              <>
                <SyntaxHighlighter language="javascript" style={vs}>
                  {showMore ? restData[0].acf.code_demo : restData[0].acf.code_demo.split(" ").slice(0, 25).join(" ")}
                  {restData[0].acf.code_demo}
                </SyntaxHighlighter>
                <button className="selector-buttons" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
              </>
            }
          </div>

          {restData[0].acf.link_to_repo !== '' &&
          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_repo} target="_blank" rel="noreferrer">
              <button className='link-button git-link'><GitHubIcon /> <p>GITHUB</p></button>
            </a>
          </div>
          }
          
          
          {restData[0].acf.project_image_2 !== false &&
            <div className='project-section'>
              <figure>
                <img loading="lazy" src={restData[0].acf.project_image_2.url} alt={restData[0].acf.project_image_2.alt} className='project-image project-image-2'/> 
                <figcaption>{restData[0].acf.project_image_2.caption}</figcaption>
              </figure>
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
          <figure>
            <img loading="lazy" src={restData[0].acf.project_image_3.url} alt={restData[0].acf.project_image_3.alt} className='project-image project-image-3'/>
            <figcaption>{restData[0].acf.project_image_3.caption}</figcaption> 
          </figure>
          }  
          {restData[0].acf.project_image_4 !== false &&
          <figure>
            <img loading="lazy" src={restData[0].acf.project_image_4.url} alt={restData[0].acf.project_image_4.alt} className='project-image project-image-4'/> 
            <figcaption>{restData[0].acf.project_image_4.caption}</figcaption>
          </figure>
          }  
          </div>

          {restData[0].acf.link_to_design !== '' &&
          <div className='link-button-wrapper'>
            <a href={restData[0].acf.link_to_design} target="_blank" rel="noreferrer">
              <button className='link-button'>Design</button>
            </a>
          </div>
          }
          {restData[0].acf.project_conclusion !== '' &&
          <div className='project-section'>
            <p dangerouslySetInnerHTML={{__html:restData[0].acf.project_conclusion}}></p>
          </div>
          }

          <div className='project-section'>
          <h3>More Projects</h3>
            <div className='project-navigation'>
              {restData[0].previous !=='' &&
                <NavHashLink to={`/projects/${restData[0].previous.slug}#top`}>
                <button className="link-button">{restData[0].previous.title}</button>
              </NavHashLink>
                
              }
              {restData[0].next !=='' &&
                <NavHashLink to={`/projects/${restData[0].next.slug}#top`}>
                <button className="link-button">{restData[0].next.title}</button>
                </NavHashLink>
              }
            </div>
          </div>
          <div className='top-arrow'>
            <NavHashLink to={`#top`}>
              <ArrowCircleUpIcon fontSize='large'/>
            </NavHashLink>
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