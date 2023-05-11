import '../styles/card.css'

import ratingstar from '../assets/ratingstar.svg'
import elipse from '../assets/Ellipse.svg'

export default function Card(props){
    const status = props.openSpots ? "Online" : "Sold Out"
    return (
        <section className="card">
            <div className="img-status">
                <img src={props.img} alt="" />
                <span>{status}</span>
            </div>
            <div className="rating-country">
                <img src={ratingstar} alt="" />
                
                <p>{props.rating} </p>
                
                <span>({props.ratingCount})</span>
                
                <img src={elipse} alt=""/> 

                <span>{props.country}</span>
            </div>
            <div className="card-title">
                <p>{props.title}</p>
            </div>
            <div className="card-price">
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </section>
    )
}