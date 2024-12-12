import React,{createContext,useState}from 'react'
import './App.css'
import { BrowserRouter, Link,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services.jsx'
import Subjects from './pages/Subjects.jsx'
import Topics from './pages/Topics'

export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      
        <nav>
          <h1>logo</h1>

          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/Subjects'>Subjects</Link></li>
          </ul>
        </nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/Subjects' element={<Subjects/>}/>
                <Route path='/Subjects/:SubjectId/Topics' element={<Topics/>}/>
                
            </Routes>


      </BrowserRouter>
    </div>
  )
}
