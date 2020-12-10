import './styles.css';

import img from '../Images/Noel CV 2020.png'

import CvCard from '../Components/Card/CV_Card';

function CV() {
    return (
      <div className='contentCenter'>
        <h2>- Curriculum Vitae -</h2>
        <hr />

        <div className='CV_container'>
            
            <CvCard 
            img={img}/>
          
        </div>

      </div>
    );
  }

  export default CV;