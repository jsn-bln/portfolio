import './about.css'

const About  = () => {
    return(
        <div className='about-container'>
            <div className='photo-container'>
                <div className='photo'></div>
            </div>
            <div className='text-container'>
                <h3 className='text-header'>Let me tell you about my self</h3>
                <p className='text'>I graduated with a degree on computer engineering 
                but i consider myself as a forever student, I am always eager to learn new technologies and 
                challenge myself on building new things.One fun fact about me is I like to play chess and i believe that it helped me on my problem 
                solving skills.</p>
                <div className='icons'>
                    <div className='svg-coder'></div>
                    <div className='svg-chess'></div>
                </div>
            </div>
        </div>
    )
}

export default About