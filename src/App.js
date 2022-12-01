import React, {Component, Fragment} from 'react';
import './App.css';
import CoursesPage from './Components/Courses/Courses';
import AboutPage from './Components/About/About';
import ServicesPage from './Components/Services/Services';
import {BrowserRouter as Router, Routes, Route, Link} from'react-router-dom';
import HeaderPage from './Components/header/Header';


class App extends Component{
  render(){
    return(
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>
        </nav>
        <Routes>
          <Fragment>
            <Route path='/' element={<HeaderPage />}></Route>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/courses' element={<CoursesPage />} />
          </Fragment>
        </Routes>
      </Router>
    );
  }
}

export default App;