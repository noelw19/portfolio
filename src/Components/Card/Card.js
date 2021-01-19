import './styles.css'

const Card = (props) => {
     return (
        <div className='cardContainer'>

            <h3>{props.title}</h3>
            
            <div className='imgContainer'>
               
               <a href={props.link}>
                    
                    <img className='border' src={props.img} alt=''/>
                
                </a>
            
            </div>
        
        </div>
     )
 }

 export default Card;