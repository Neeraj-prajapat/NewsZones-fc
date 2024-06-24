import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'






export default function App() {

const apiKey=process.env.REACT_APP_NEWS_API;

const[progress, setProgress] = useState(0)

// state={
//   progress:0
// }

// setProgress=(progress)=>{
//   setState({progress:progress})
// }

    return (
     <BrowserRouter>
         <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}
      />
        <Navbar/>    
        <Routes>
        <Route path="/" key="1" element={<News apiKey={apiKey} setProgress={setProgress} country="in" category="general"  />}/>
          <Route path="/business" key="2" element={<News apiKey={apiKey} setProgress={setProgress} country="in" category="business"/>}/>
          <Route path="/entertainment" key="3" element={<News apiKey={apiKey} setProgress={setProgress} country="in" category="entertainment"/>}/>
          <Route path="/health" key="4" element={<News apiKey={apiKey} setProgress={setProgress} country="in" category="health"/>}/>
          <Route path="/sports" key="5" element={<News apiKey={apiKey} setProgress={setProgress} country="in" category="sports"/>}/>
          <Route path="/technology" key="6" element={<News apiKey={apiKey} setProgress={setProgress} country="in" category="technology"/>}/>
        </Routes>
     </BrowserRouter> 
    )

}
























