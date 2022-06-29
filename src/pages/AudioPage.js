import { useState, useEffect } from 'react'


function AudioPage() {

  const restPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&slug=portfolio-site'
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
            <h1>Works</h1>
            <p>{restData[0].acf.image_gallery}</p>

            <ul className="product-gallery-thumbs__list">
            {restData[0].acf.image_gallery.map(function(image, imageIndex){
      return <img key={ imageIndex } src={ image } />
   })}
</ul>

            


         
            {/* {restData.acf.image_gallery.map(post => 
                <article key={post.id} id={`post-${post.id}`}>
                   <p>{`hi${post.id}`}</p>

                </article>
            )} */}
        </>
    : 
        <p>Hi</p>
    }
    </>
)
}

export default AudioPage