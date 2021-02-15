import './contact.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

const Contact = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')


    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            email,
            subject,
            body
        }
        axios.post('http://localhost:5000/sendemail',payload,{
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
              }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    

    return(
        <div data-aos="slide-up" className='contact-container'>
            <div className='contact-text'>
                <div className='contact-border'>
                <h1>Lets work together</h1>
                <h2>send me an email</h2>
                </div>
            </div>
            <div data-aos="slide-up" className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <h1>Contact me</h1>
                    <div className='input-group'>
                        <input onChange={e => setEmail(e.target.value)} className='contact-input' type='email' placeholder='Email'/>
                        <input onChange={e => setSubject(e.target.value)} className='contact-input' type='text' placeholder='Subject'/>
                        <textarea onChange={e => setBody(e.target.value)} className='contact-message' placeholder='message'/>
                        <button className='contact-btn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact