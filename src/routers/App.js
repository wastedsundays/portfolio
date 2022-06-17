import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import '../scss/styles.scss';

import MainPage from '../pages/MainPage';
// import ProjectPage from '../pages/ProjectPage';

// import Page404 from '../pages/Page404';
import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';


function App() {
  return (
    <div className='main'>
            
      <BrowserRouter>
        <NavBar />
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
  )
}

export default App