import { createContext, useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactSwitch from 'react-switch';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import TestPage from '../pages/TestPage';
import MainPage from '../pages/MainPage';
import ProjectPage from '../pages/ProjectPage';
import AudioPage from '../pages/AudioPage';
import LogoPage from '../pages/LogoPage';
import Page404 from '../pages/Page404';
import NavBar from '../components/NavBar';
import HeaderBar from '../components/HeaderBar';
import BottomNav from '../components/BottomNav';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeContext = createContext(null);

function App() {
  
  // useEffect(() => {
  //   document.title = "Adam H. - Front End Web Developer"
  // }, []);
  const [theme, setTheme] = useState(localStorage.getItem('adamhPortfolio') ? localStorage.getItem('adamhPortfolio') : "light");
  // const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) =>(curr === 'light' ? 'dark' : 'light'))
  };

  useEffect(() => {
    localStorage.setItem('adamhPortfolio', (theme));
  }, [theme]);

  return (
    <HelmetProvider>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='main' id={theme}>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Adam H. | Front End Web Developer</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
              
        <BrowserRouter>
          <NavBar />
            <div className='content-area'>
              <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/project-details/:slug' element={<ProjectPage />} />
                  <Route path='/audio' element={<AudioPage />} />
                  <Route path='/logos' element={<LogoPage />} />
                  <Route path='/test' element={<TestPage />} />
                  <Route path='*' element={<Page404 />} />  
              </Routes> 
            </div>
            
          <BottomNav />
          
        </BrowserRouter>   
        <HeaderBar />
        <div className="lightswitch">
          <ReactSwitch  onChange={toggleTheme} 
                        checked={theme === 'dark'} 
                        onColor="#333" 
                        offColor="#fff"
                        onHandleColor="#333"
                        checkedIcon={false} 
                        uncheckedIcon={false}
                        height={25}
                        width={50}
                        uncheckedHandleIcon={
                          <div 
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              color: "#0076B6",
                              fontSize: 18
                            }}
                            >
                            <ModeNightIcon />
                          </div>
                          }
                        checkedHandleIcon={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              color: "#0076B6",
                              fontSize: 18
                            }}
                          >
                            <LightModeIcon />
                          </div>
                           }
            />
          </div>



      </div>
    </ThemeContext.Provider>
    </HelmetProvider>
  )
}

export default App