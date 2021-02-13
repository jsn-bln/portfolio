import './homepage.css'
import {Spring, config} from 'react-spring/renderprops'


const Homepage = () => {
   

    return(
        <div className='homepage-container'>
            <Spring from={{marginTop: -500}}
                    to={{marginTop: 250}}
                    config={{duration: 1000, delay: 500}}>
            {props => 
                <h1 style={props} className='brand-header'>Hello, my name is 
                    <Spring from={{color:'#f3f3f3'}}
                            to={{color:'#FF9F1C'}}
                            config={{duration:500, delay:2500}}>
                    {props=>
                        <span style={props} className='brand-name'> Jayson</span>
                    }
                    </Spring>
                </h1>
            
            }
            
            </Spring>
            <div className='brand-sub-text'>a full stack web developer</div>
            <div className='database-svg'></div>
            <div className='programming-svg'></div>
        </div>
    )
}


export default Homepage