import './contact.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    },[])

    return(
        <div data-aos="slide-up" className='contact-container'>
            <div className='contact-text'>
                <div className='contact-border'>
                <h1>Lets work together</h1>
                <h2>send me an email</h2>
                </div>
            </div>
            <div data-aos="slide-up" className='contact-form'>
                <form>
                    <h1>Contact me</h1>
                    <div className='input-group'>
                        <input className='contact-input' type='email' placeholder='Email'/>
                        <input className='contact-input' type='text' placeholder='Subject'/>
                        <textarea className='contact-message' placeholder='message'/>
                        <button className='contact-btn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact