import './projects.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration:1000,
            delay:500
        })
    },[])

    return(
        <div className='projects-container'>
            <h1 className='project-header'>My Works</h1>
            <div className='projects'>
                <div data-aos="zoom-in-right" data-aos-offset="100" className='project-todo'>
                    <a href='https://creativetodolist.herokuapp.com/'
                        target="_blank" rel="noopener noreferrer"
                    ><h1 className="project-item-header">TODOLIST</h1></a>             
                </div>
                <div data-aos="zoom-in" data-aos-offset="100" className='project-weather'>
                    <a href='http://panahon.herokuapp.com/'
                    target="_blank" rel="noopener noreferrer"
                    ><h1 className="project-item-header">WEATHER FORECAST</h1></a>               
                </div>
                <div data-aos="zoom-in-left" data-aos-offset="100" className='project-chat'>
                    <a href='http://charat.herokuapp.com/'
                        target="_blank" rel="noopener noreferrer">
                        <h1 className="project-item-header">CHAT WEBSITE</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects