import React from 'react';
import PageAdmin from './Pages/PageAdmin';
import PageAnnoncePlus from './Pages/PageAnnoncePlus';
import PageMain from './Pages/PageMain';
import PageMonProfil from './Pages/PageMonProfil';
import PagePublierAnnonce from './Pages/PagePublierAnnonce';
import PageSeConnecter from './Pages/PageSeConnecter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path='/admin' element={<PageAdmin/>}/>
          <Route path='/main' element={<PageMain/>}/>
          <Route path='/annoceplus' element={<PageAnnoncePlus/>}/>
          <Route path='/profil' element={<PageMonProfil/>}/>
          <Route path='/addannoce' element={<PagePublierAnnonce/>}/>
              
          <Route path='/' element={ <PageSeConnecter/> }/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
