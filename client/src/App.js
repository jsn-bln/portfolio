import Homepage from './components/homepage/homepage'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import {useState, useEffect} from 'react'


const App = () =>{
  const [colorBrand, setColorBrand] = useState('#f3f3f3')
  const [colorHamburger, setColorHamburger] = useState('#f3f3f3')

  useEffect(() => {
      AOS.init({
        duration: 1000,
      })
  }, [])


  if(window.innerWidth > 500){
    window.onscroll = function () {
      "use strict";
      
      if (window.pageYOffset >= 570 && window.pageYOffset < 1153) {
          setColorBrand('black')
          setColorHamburger('black')
      }else if(window.pageYOffset >= 1153 && window.pageYOffset < 1736){
          setColorBrand('#f3f3f3')
          setColorHamburger('black')
      }else if(window.pageYOffset >= 1736 && window.pageYOffset < 2314){
          setColorBrand('#f3f3f3')
          setColorHamburger('#f3f3f3')
      }
      else if(window.pageYOffset >= 2314){
        setColorBrand('black')
        setColorHamburger('#f3f3f3')
      }else{
          setColorBrand('#f3f3f3')
          setColorHamburger('#f3f3f3')
      }
    }
  }else{
    window.onscroll = function () {
      "use strict";
      console.log(window.pageYOffset)
      if (window.pageYOffset >= 776 && window.pageYOffset < 1540) {
          setColorBrand('black')
          setColorHamburger('black')
      }else if(window.pageYOffset >= 1540 && window.pageYOffset < 1986){
          setColorBrand('#f3f3f3')
          setColorHamburger('#f3f3f3')
      }else if(window.pageYOffset >= 1986 && window.pageYOffset < 2314){
          setColorBrand('black')
          setColorHamburger('black')
      }
      else if(window.pageYOffset >= 2385 && window.pageYOffset <3108){
        setColorBrand('#f3f3f3')
        setColorHamburger('#f3f3f3')
      }else if(window.pageYOffset >=3108){
          setColorBrand('black')
          setColorHamburger('black')
      }else{
        setColorBrand('#f3f3f3')
        setColorHamburger('#f3f3f3')
      }
    }
  }
  
  return (
    <div className="App">
      <div className='main-container'>
        <Nav color={colorBrand} hamburger={colorHamburger}/>
        <section className='homepage' id="homepage">
          <Homepage />
        </section>
        <section data-aos="fade-up" className='about' id="about">
          <About/>
        </section>
        <section className='skills' id="skills">
          <Skills />
        </section>
        <section  data-aos="fade-up" className='projects' id="projects">
          <Projects />
        </section>
        <section className='contact' id="contacts">
          <Contact />
        </section>  
        <section className='footer'>
          <div className='author'>&copy; Jayson C. Balano | 2021</div>
          <div className='btn-group'>
            <a href='https://web.facebook.com/jayson.balano/' 
              target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width='25' height='25'>
                <path fill="#f3f3f3" d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"/>
              </svg>
            </a>
            <a href='https://github.com/jsn-bln'
              target="_blank" rel="noopener noreferrer">
              <svg enable-background="new 0 0 24 24" height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#f3f3f3"/>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/jayson-balano-413666164/'
            target="_blank" rel="noopener noreferrer">
              <svg height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg" fill='#f3f3f3'>
                <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
              </svg>
            </a>
          </div>
        </section>  
      </div>  
    </div>
  );
}

export default App;
