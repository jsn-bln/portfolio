import './nav.css'
import {useState} from 'react'


const Nav = (props) => {
    const [open, setOpen] = useState(false)


    
    const Open = () => {
        setOpen(true)
    }
    const Close = () => {
        setOpen(false)
    }
    return(
        <>
        <div className='nav-container'>
            <a style={{color: props.color}} className='nav-name-link' href='/'>Jayson Balano</a>
            <svg onClick={Open} className='nav-open' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 74.23 52">
                <g id="Group_3" data-name="Group 3" transform="translate(-1730.5 -37.5)">
                    <line id="Line_1" data-name="Line 1" x2="74.23" transform="translate(1730.5 42.5)" fill="none" stroke={props.hamburger} stroke-width="10"/>
                    <line id="Line_2" data-name="Line 2" x2="74.23" transform="translate(1730.5 63.5)" fill="none" stroke={props.hamburger} stroke-width="10"/>
                    <line id="Line_3" data-name="Line 3" x2="74.23" transform="translate(1730.5 84.5)" fill="none" stroke={props.hamburger} stroke-width="10"/>
                </g>
            </svg>
            
        </div>
        <div style={{display: open? 'block': 'none'}} className='menu-group'>
                <div className='nav-menu'>
                    <a onClick={Close} href='/' className='menu-links'>Home</a>
                    <a onClick={Close} href='#about' className='menu-links'>About</a>
                    <a onClick={Close} href='#skills' className='menu-links'>Skills</a>
                    <a onClick={Close} href='#projects' className='menu-links'>Projects</a>
                    <a onClick={Close} href='#contacts' className='menu-links'>Contact</a>
                </div>
                <svg onClick={Close} className='nav-close' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 59.559 59.559">
                <g id="close" transform="translate(-1737.835 -12.72)">
                    <line id="Line_1" data-name="Line 1" x2="74.23" transform="translate(1741.371 68.744) rotate(-45)" fill="none" stroke="#f3f3f3" stroke-width="10"/>
                    <line id="Line_3" data-name="Line 3" x2="74.23" transform="translate(1741.371 16.256) rotate(45)" fill="none" stroke="#f3f3f3" stroke-width="10"/>
                </g>
                </svg>

            </div>
            </>
    )
}


export default Nav