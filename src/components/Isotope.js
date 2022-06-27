import * as React from 'react';
import Isotope from 'isotope-layout';
import Loop from './Loop';

import bootstrap from '../skills/skill-icon-bootstrap.png';
import cakewalk from '../skills/skill-icon-cakewalk.png';
import crystal from '../skills/skill-icon-crystalreports.png';
import css from '../skills/skill-icon-css.png';
import excel from '../skills/skill-icon-excel.png';
import git from '../skills/skill-icon-git.png';
import gulp from '../skills/skill-icon-gulp.png';
import HTML from '../skills/skill-icon-html.png';
import illustrator from '../skills/skill-icon-illustrator.png';
import javascript from '../skills/skill-icon-javascript.png';
import jetreports from '../skills/skill-icon-jetreports.png';
import jquery from '../skills/skill-icon-jquery.png';
import photoshop from '../skills/skill-icon-photoshop.png';
import php from '../skills/skill-icon-php.png';
import powerbi from '../skills/skill-icon-powerbi.png';
import react from '../skills/skill-icon-react.png';
import sass from '../skills/skill-icon-sass.png';
import shopify from '../skills/skill-icon-shopify.png';
import sql from '../skills/skill-icon-sql.png';
import vscode from '../skills/skill-icon-vscode.png';
import woocommerce from '../skills/skill-icon-woocommerce.png';
import wordpress from '../skills/skill-icon-wordpress.png';
import xd from '../skills/skill-icon-xd.png';





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
  
    const handleFilterKeyChange = key => () => setFilterKey(key)
  
    return (
      <>
        <div className='selector-buttons'>        
          <button onClick={handleFilterKeyChange('*')}>All</button>
          <button onClick={handleFilterKeyChange('fave')}>Favourites</button>
          <button onClick={handleFilterKeyChange('dev')}>Dev</button>
          <button onClick={handleFilterKeyChange('design')}>Design</button>
          <button onClick={handleFilterKeyChange('other')}>Other</button>
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