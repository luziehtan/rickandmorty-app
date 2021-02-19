import './Card.css'
import Button from '../Button/Button'

import {useState} from 'react'

export default function Card({name, species, image, status, gender, origin, location}) {

    const [isTextVisible, setIsTextVisible] = useState(false)

    return (
        <section className="Card">
            <h2 className="Card__name">{name}</h2> ({species === 'Human' ? '🧍 Human' : '👽 Alien'})
            <center><img className="Card__img" src={image} alt="" /></center>
            
            <Button 
            className="Button"
            title={isTextVisible ? 'Hide Details' : 'Show Details'}
            onClick={() => setIsTextVisible(!isTextVisible)}
      />

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