import './styles.css';
import Swipe from '../Components/Banner/Carousel'

function Home() {
    return (
      <div className='contentCenter'>
        <h2>- Home -</h2>
        <hr />
        <h4>MOST RECENT PROJECTS</h4>
        <div className='swipeContainer'>
        <Swipe />
        </div>
      </div>
    );
  }

  export default Home;