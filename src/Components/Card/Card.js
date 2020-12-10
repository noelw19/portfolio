import './styles.css'

const Card = (props) => {
     return (
        <div className='cardContainer'>
            <h2>{props.title}</h2>
            <div className='imgContainer'>
                <a href={props.link}>
                    <img className='border' src={props.img} alt=''/>
                </a>
            </div>
        </div>
     )
 }

 export default Card;