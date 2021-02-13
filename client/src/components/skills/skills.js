import './skills.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'



const Skills = () => {
    
    useEffect(() => {
        AOS.init({
            duration:2000
        })
    },[])
    return(
        <div className='skills-container'>
            <div data-aos="slide-right" className='stats'>
                <div className='stat-border'>
                <h1 className='stats-header'>My Traits</h1>
                <div className='stats-item'>
                    <div className='stats-sub-item'>
                        <ul>
                            Pros
                            <li>
                                Can work under pressure
                            </li>
                            <li>
                                Passionate about programming
                            </li>
                            <li>
                                Continuous Learner
                            </li>
                            <li>
                                I am versatile
                            </li>
                        </ul>
                    </div>
                    <div className='stats-sub-item'>
                    <ul>
                         Cons
                            <li>
                                Shy at the start
                            </li>
                            <li>
                                Too critical to myself
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div data-aos="slide-left" className='skills'>
                <div className='skills-border'>
                    <h1 className='skills-header'>My Skills</h1>
                    <div className='skills-item'>
                        <div className='skills-sub-item'>
                            Javascript 90%
                        </div>
                        <div className='skills-sub-item'>
                            ReactJS 90%
                        </div>
                        <div className='skills-sub-item'>
                            Redux 85%
                        </div>
                        <div className='skills-sub-item'>
                            ExpressJS 85%
                        </div>
                        <div className='skills-sub-item'>
                            MongoDB 80%
                        </div>
                        <div className='skills-sub-item'>
                            Firebase 75%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Skills