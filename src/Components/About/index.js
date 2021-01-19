import './styles.css';
import img from '../../Images/apple-cider-4676465_1920.jpg';

const About = (props) => (

    <div className='contatiner'>
        <div className='mainContent'>

            {/* left container holding the left column of about section */}
            <div className='left'>
                <img src={img} alt='123'></img>
            </div>

            {/* right container that holds 2 divs stacked */}
            <div className='right'>

                <section className='rS1'>

                    <h1>{props.title}</h1>

                </section>

                <section className='rS2'>

                    
                        <ul>
                            <li>Name: {props.name} </li>
                            <li>DOB: {props.dob} </li>
                            <li>Ethnicity: {props.eth} </li>
                            <li>Bio: {props.bio} </li>
                        </ul>
                   

                </section>
            
            </div>
        </div>
    </div>

)

export default About;