import './CV_Card.css';

const CvCard = (props) => {
     return (
        <div className='cardContainer'>
            <div className='imgContainer'>
                <a href={props.link}>
                    <img className='img' src={props.img} alt=''/>
                </a>
            </div>
        </div>
     )
 }

 export default CvCard;