import { createContext, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactSwitch from 'react-switch';
// import '../scss/styles.scss';

import MainPage from '../pages/MainPage';
// import ProjectPage from '../pages/ProjectPage';
// import Page404 from '../pages/Page404';
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
export const ThemeContext = createContext(null);



function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) =>(curr === 'light' ? 'dark' : 'light'))
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='main' id={theme}>
              
        <BrowserRouter>
          <NavBar />
          <ReactSwitch  onChange={toggleTheme} 
                        checked={theme === 'dark'} 
                        onColor="#333" 
                        offColor="#fff"
                        checkedIcon={false} 
                        uncheckedIcon={false}
                        height={30}
                        width={70}
                        uncheckedHandleIcon={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              fontSize: 20
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
                                color: "black",
                                fontSize: 18
                              }}
                            >
                              <LightModeIcon />
                            </div>
                            }
            />

            <div className='content-area'>
              <Routes>
                  <Route path='/' element={<MainPage />} />
                  {/* <Route path='/project' element={<ProjectPage />} />
                  <Route path='*' element={<Page404 />} />   */}
              </Routes> 
            </div>
            
          <BottomNav />
          
        </BrowserRouter>    
      </div>
    </ThemeContext.Provider>
  )
}

export default App