import * as React from 'react';
import Isotope from 'isotope-layout';

import bootstrap from '../skills/small-skill-icon-bootstrap.png';
import cakewalk from '../skills/small-skill-icon-cakewalk.png';
import crystal from '../skills/small-skill-icon-crystalreports.png';
import css from '../skills/small-skill-icon-css.png';
import excel from '../skills/small-skill-icon-excel.png';
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
          {/* <Loop /> */}
          <div className="filter-item dev">
            <img src={bootstrap} alt="Bootstrap"/>
          </div>
          <div className="filter-item other">
            <img src={cakewalk} alt="Cakewalk"/>
          </div>
          <div className="filter-item other">
            <img src={crystal} alt="Crystal Reports"/>
          </div>
          <div className="filter-item dev fave">
            <img src={css} alt="CSS"/>
          </div>
          <div className="filter-item other fave">
            <img src={excel} alt="Excel"/>
          </div>
          <div className="filter-item dev">
            <img src={git} alt="Git"/>
          </div>
          <div className="filter-item dev">
            <img src={gulp} alt="Gulp"/>
          </div>
          <div className="filter-item dev fave">
            <img src={HTML} alt="html"/>
          </div>
          <div className="filter-item design fave">
            <img src={illustrator} alt="Illustrator"/>
          </div>
          <div className="filter-item dev">
            <img src={javascript} alt="JavaScript"/>
          </div>
          <div className="filter-item other">
            <img src={jetreports} alt="Jet Reports"/>
          </div>
          <div className="filter-item dev">
            <img src={jquery} alt="jQuery"/>
          </div>
          <div className="filter-item design fave">
            <img src={photoshop} alt="Photoshop"/>
          </div>
          <div className="filter-item dev fave">
            <img src={php} alt="PHP"/>
          </div>
          <div className="filter-item other">
            <img src={powerbi} alt="Power BI"/>
          </div>
          <div className="filter-item dev">
            <img src={react} alt="React"/>
          </div>
          <div className="filter-item dev fave">
            <img src={restapi} alt="RestAPI"/>
          </div>
          <div className="filter-item dev">
            <img src={sass} alt="SASS"/>
          </div>
          <div className="filter-item dev">
            <img src={shopify} alt="Shopify"/>
          </div>
          <div className="filter-item dev">
            <img src={sql} alt="SQL"/>
          </div>
          <div className="filter-item dev fave">
            <img src={vscode} alt="VS Code"/>
          </div>
          <div className="filter-item dev fave">
            <img src={woocommerce} alt="WooCommerce"/>
          </div>
          <div className="filter-item dev fave">
            <img src={wordpress} alt="WordPress"/>
          </div>
          <div className="filter-item design fave">
            <img src={xd} alt="XD"/>
    </div>

        </ul> 
      </>
    )
  }

  export default IsotopeReact