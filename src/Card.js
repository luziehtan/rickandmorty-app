import './Card.css'
import {useState} from 'react'

export default function Card({name, species, image, status, gender, origin, location}) {

    const [isTextVisible, setIsTextVisible] = useState(false)

    return (
        <section className="Card">
            <h2 className="Card__name">{name}</h2> ({species === 'Human' ? '🧍 Human' : '👽 Alien'})
            <center><img className="Card__img" src={image} alt="" /></center>
            
            <button className="Card__button" onClick={event => {
          event.stopPropagation()
          setIsTextVisible(!isTextVisible)
        }}>{isTextVisible ? 'Hide Details' : 'Show Details'}</button>

    <dl className="Card__list" hidden={!isTextVisible}>
            <dt><strong>Status:</strong></dt> 
                <dd><em>{status}</em></dd>
            <dt><strong>Gender:</strong></dt> 
                <dd><em>{gender}</em></dd>
            <dt><strong>Origin:</strong></dt> 
                <dd><em>{origin}</em></dd>
            <dt><strong>Location:</strong></dt> 
                <dd><em>{location}</em></dd>
            </dl>
        </section>
    )
}