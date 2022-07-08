import { createContext, useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
  
  const [theme, setTheme] = useState(localStorage.getItem('adamhPortfolio') ? localStorage.getItem('adamhPortfolio') : "light");
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
        <title>Adam H. | Front End Web Developer</title>
        <link rel="canonical" href="https://adamh.ca" />
        <meta name="description" content="A portfolio website for technical projects completed by a Adam Hauck, a Front-end web developer showcasing website design and use of HTML, CSS SASS, JavaScript, React and other web development skills and tools" />
      </Helmet>
              
        <BrowserRouter basename="/">
          <a className="skip-to-content-link" href="#about  ">
            Skip to content
          </a>
          <NavBar />

            <div className='content-area'>
              <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/projects/:slug' element={<ProjectPage />} />
                  <Route path='/audio' element={<AudioPage />} />
                  <Route path='/logos' element={<LogoPage />} />
                  <Route path='/*' element={<Page404 />} />  
              </Routes> 
            </div>
            
          <BottomNav />
          <HeaderBar />
        </BrowserRouter>   
        

        <div className="lightswitch">
          <ReactSwitch  onChange={toggleTheme} 
                        label="light/dark mode switch"
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