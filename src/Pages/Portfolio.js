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
       
        <div className='portfolioLeft mt-2'>
        <Card 
            title='Website 1'
            img={img}/>
        </div>

        <div className='portfolioLeft mt-2'>
        
        <Card 
            title='Website 2'
            img={img}/>
            
            
        </div>

        

        </div>

        {/* second set of cards */}

        <div className='portfolioContainer'>
       
        <div className='portfolioRight mt-2'>
        <Card 
            title='Website 3'
            img={img}/>
        </div>

        <div className='portfolioRight mt-2'>
        <Card 
            title='Website 4'
            img={img}/>
        </div>

        </div>

      </div>
    );
  }

  export default Portfolio;