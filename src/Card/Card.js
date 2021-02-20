import './Card.css'
import Button from '../Button/Button'

import {useState} from 'react'

export default function Card({name, species, image, status, gender, origin, location}) {

    const [isTextVisible, setIsTextVisible] = useState(false)

    return (
        <section className="Card"
            style={{backgroundImage: 'url("' + image +'")', backgroundSize: '200px 200px'}}>
            <h2 className="Card__name">{name}</h2>
            
            <Button 
            className="Button Card__button"
            title={isTextVisible ? 'Hide Details' : 'Show Details'}
            onClick={() => setIsTextVisible(!isTextVisible)}
      />

    <dl className="Card__list" hidden={!isTextVisible}>
            <dt><strong>Species:</strong></dt>
                <dd><em>{species === 'Human' ? 'Human' : 'Alien'}</em></dd>
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