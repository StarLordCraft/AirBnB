import Card from './card'
import cardsData from '../data/cardsdata'

import '../styles/hero.css'

export default function Hero(){
    
    const cardsProps = cardsData.map((data) => {
        return(
            <Card 
            {...data}
            />
        )
    });

    return (
        <main className="hero">
            {cardsProps}
        </main>
    )
}