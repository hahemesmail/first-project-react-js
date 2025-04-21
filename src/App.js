import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import React from 'react'
import { Header,Footer } from './section/saved';
import {SINUP} from "./section/saved"
import {Videos} from './section/saved';
import { House,Profile, Serve } from './pages/index';
import { Container } from "./component/index"
import "./App.css"

export default function App(){
  return (
    <>

        
    
        <Router>
       
          <Header/>
          <Container> 
            <Routes>
                <Route path='/' element={<House/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/serve' element={<Serve/>}/>
                <Route path='/video' element={<Videos/>}/>
                <Route path='/sinup' element={<SINUP/>}/>
            
              
              </Routes>
          </Container> 
          <Footer/>
          

        </Router>
        




        
     
    </>
  )
}

































