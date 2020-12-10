import './styles.css';

import img from '../Images/pexels-angele-j-128403.jpg'

import Card from '../Components/Card/Card';


function Portfolio() {
    return (
      <div className='contentCenter'>
        <h2>- Portfolio -</h2>

        <hr />

        {/* use grids? or use flex? */}
        
        <div className='portfolioContainer'>
       
        <div className='portfolioLeft'>
        <Card 
            title='hello'
            img={img}/>
        </div>

        <div className='portfolioRight'>
          <h2>working</h2>
        </div>

        </div>

        {/* second set of cards */}

        <div className='portfolioContainer'>
       
        <div className='portfolioLeft'>
          <h2>working</h2>
        </div>

        <div className='portfolioRight'>
          <h2>working</h2>
        </div>

        </div>

      </div>
    );
  }

  export default Portfolio;