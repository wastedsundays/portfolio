import * as React from 'react';
import Isotope from 'isotope-layout';

import bootstrap from '../skills/small-skill-icon-bootstrap.png';
import businesscentral from '../skills/small-skill-icon-businesscentral.png';
import cakewalk from '../skills/small-skill-icon-cakewalk.png';
import crystal from '../skills/small-skill-icon-crystalreports.png';
import css from '../skills/small-skill-icon-css.png';
import excel from '../skills/small-skill-icon-excel.png';
import figma from '../skills/small-skill-icon-figma.png';
import git from '../skills/small-skill-icon-git.png';
import gulp from '../skills/small-skill-icon-gulp.png';
import HTML from '../skills/small-skill-icon-html.png';
import illustrator from '../skills/small-skill-icon-illustrator.png';
import javascript from '../skills/small-skill-icon-javascript.png';
import jetreports from '../skills/small-skill-icon-jetreports.png';
import jquery from '../skills/small-skill-icon-jquery.png';
import photoshop from '../skills/small-skill-icon-photoshop.png';
import php from '../skills/small-skill-icon-php.png';
import powerbi from '../skills/small-skill-icon-powerbi.png';
import react from '../skills/small-skill-icon-react.png';
import restapi from '../skills/small-skill-icon-rest-api.png';
import sass from '../skills/small-skill-icon-sass.png';
import shopify from '../skills/small-skill-icon-shopify.png';
import sql from '../skills/small-skill-icon-sql.png';
import vscode from '../skills/small-skill-icon-vscode.png';
import woocommerce from '../skills/small-skill-icon-woocommerce.png';
import wordpress from '../skills/small-skill-icon-wordpress.png';
import xd from '../skills/small-skill-icon-xd.png';





const IsotopeReact = () => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')
  
    // initialize an Isotope object with configs
    React.useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
  
    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
  

  const handleFilterKeyChange = key => () => {
    // setFilterKey(key);    <--this is the original.
    //this checks if the button is already highlighted. If it is, it unclicks it and sets the filter to ALL      
    if (document.getElementById(key).classList.contains('button-checked')){
      //this prevents the unclick IF all is selected and already highlighted.
      if (key==="*") {
      } else {
        //this now runs. (Button highlighted, and clicked again....resets filter to ALL)
        document.getElementById(key).classList.remove('button-checked');
        document.getElementById('*').classList.add('button-checked');
        setFilterKey('*');
      }
    } else {
      //this runs if we've clicked a button that isn't highlighted.
      const removebuttons = Array.from(document.getElementsByClassName('button-checked'));
      removebuttons.forEach(button => {
      button.classList.remove('button-checked');
    });
    document.getElementById(key).classList.add('button-checked');
    setFilterKey(key);
    
    }
  } //end of handleFilterKeyChange

    return (
      <>
        <div className='selector-buttons'>        
          <button className='button-checked' id="*" onClick={handleFilterKeyChange('*')}>All</button>
          <button className=''  id="fave" onClick={handleFilterKeyChange('fave')}>Favourites</button>
          <button className=''  id="dev" onClick={handleFilterKeyChange('dev')}>Develop</button>
          <button className=''  id="design" onClick={handleFilterKeyChange('design')}>Design</button>
          <button className='' id="other" onClick={handleFilterKeyChange('other')}>Other</button>
        </div>

        <hr />

        
        <ul className="filter-container">
          <div className="filter-item dev">
            <img src={bootstrap} alt="Bootstrap Icon with name in text underneath"/>
          </div>
          <div className="filter-item other">
            <img src={businesscentral} alt="Business Central Icon with name in text underneath"/>
          </div>
          <div className="filter-item other">
            <img src={cakewalk} alt="Cakewalk Icon with name in text underneath"/>
          </div>
          <div className="filter-item other">
            <img src={crystal} alt="Crystal Reports Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={css} alt="CSS Icon with name in text underneath"/>
          </div>
          <div className="filter-item other fave">
            <img src={excel} alt="Excel Icon with name in text underneath"/>
          </div>
          <div className="filter-item design">
            <img src={figma} alt="Figma Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={git} alt="Git Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={gulp} alt="Gulp Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={HTML} alt="html Icon with name in text underneath"/>
          </div>
          <div className="filter-item design fave">
            <img src={illustrator} alt="Illustrator Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={javascript} alt="JavaScript Icon with name in text underneath"/>
          </div>
          <div className="filter-item other">
            <img src={jetreports} alt="Jet Reports Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={jquery} alt="jQuery Icon with name in text underneath"/>
          </div>
          <div className="filter-item design fave">
            <img src={photoshop} alt="Photoshop Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={php} alt="PHP Icon with name in text underneath"/>
          </div>
          <div className="filter-item other">
            <img src={powerbi} alt="Power BI Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={react} alt="React Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={restapi} alt="RestAPI Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={sass} alt="SASS Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={shopify} alt="Shopify Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev">
            <img src={sql} alt="SQL Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={vscode} alt="VS Code Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={woocommerce} alt="WooCommerce Icon with name in text underneath"/>
          </div>
          <div className="filter-item dev fave">
            <img src={wordpress} alt="WordPress Icon with name in text underneath"/>
          </div>
          <div className="filter-item design fave">
            <img src={xd} alt="XD Icon with name in text underneath"/>
          </div>
        </ul> 
      </>
    )
  }

  export default IsotopeReact