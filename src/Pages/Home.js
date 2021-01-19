import './styles.css';
import Swipe from '../Components/Banner/Carousel'
import About from '../Components/About';

function Home() {
    return (
      <div className='contentCenter'>
        <h2>- Home -</h2>

        <hr />

        <About 
        title='Basic Info'
        name='Noel Williams'
        dob='19/April/1995'
        eth='Papua New Guinea / New Zealand'
        bio='My quick and concise bio to make 
        it sound like i know what i am doing ;)'
        />

        <h4 className='mt-6'>MOST RECENT PROJECTS</h4>
        <div className='swipeContainer'>
        <Swipe />
        </div>

      </div>
    );
  }

  export default Home;