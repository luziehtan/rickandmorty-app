import './LocationCard.css'
import Button from '../Button/Button'

import {useState} from 'react'

export default function LocationCard({name, type, dimension, residents}) {

    const [isTextVisible, setIsTextVisible] = useState(false)
    const [characters, setCharacters]  = useState([]);

    function handleClick() {
        setIsTextVisible(!isTextVisible);
        const promises = residents.map(residentUrl => {
            return fetch(residentUrl).then(response => response.json());
        })
        Promise.all(promises).then(newCharacters => setCharacters(newCharacters))
    }
    return (
        <section className="Location__grid">
        <section className="LocationCard">
            <h2 className="LocationCard__name">{name}</h2>
            
            <Button 
            className="Button Card__button"
            title={isTextVisible ? 'Hide Details' : 'Show Details'}
            onClick={handleClick}
      />
    <dl className="LocationCard__list" hidden={!isTextVisible}>
            <dt><strong>Type: </strong></dt>
                <dd><em>{type}</em></dd>
            <dt><strong>Dimension: </strong></dt> 
                <dd><em>{dimension}</em></dd>
            <dt><strong>Residents: </strong></dt> 
                <dd><em>{characters.map(character => <ul><li key={character.id}>{character.name}</li> </ul>)}</em></dd>
            </dl>
        </section>
        </section>
    )
}