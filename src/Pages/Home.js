import './styles.css';
import Swipe from '../Components/Banner/Carousel'

function Home() {
    return (
      <div className='contentCenter'>
        <h2>- Home -</h2>
        <hr />
        <div className='swipeContainer'>
        <Swipe />
        </div>
      </div>
    );
  }

  export default Home;