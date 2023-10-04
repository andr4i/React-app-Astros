import './About.css'
import profilePic from '../assets/profile.webp'

const About = () => {
    return(
        <div className="about--container">
            <h2 className='about--title'>Sobre mi</h2>
            <h3>Gonzalo Andrei</h3>
            <img src={profilePic} alt="Profile" />
            <p className='about--text'>
                Contacto: gonzalo.andreims@gmail.com <br /> Github: github.com/andr4i <br />
                Desarollador Java FullStack, me gusta aprender y superar desafios.
            </p>
        </div>
    )
}


export default About;