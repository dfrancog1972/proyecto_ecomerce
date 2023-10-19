import './Card.css'

export default function Card(props){
    return(
        <>
            <div className='card-style' >
                <img src={props.item.image} alt="" />
                <h2>{props.item.product_name}</h2>
                <p>{props.item.description}</p>
                <p><strong>{props.item.price}</strong></p>
            </div>            
        </>
        
    )
}