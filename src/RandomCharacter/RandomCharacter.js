import React from 'react'
import RandomCharacterCard from '../RandomCharacterCard/RandomCharacterCard'
import Button from '../Button/Button'

export default function RandomCharacter({hidden}) {

    const [characters, setCharacters] = React.useState([])
    const [data, setData] = React.useState(characters)

    React.useEffect(() => {
     getAllCharacters() // no url provided, so the default parameter is used
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
  
        fetch(url)
            .then(res => res.json())
            .then(data => { // data is this object: {info: ..., results: ...}
    
            // https://reactjs.org/docs/hooks-reference.html#functional-updates
            setCharacters(oldState => [...oldState, ...data.results])
    
     const nextUrl = data.info.next // contains the next url, if it exists
      nextUrl && getAllCharacters(nextUrl) // if nextUrl exists, fetch it
        })

}

function filterRandom(characters) {
    const randomNumber = Math.floor(Math.random() * characters.length)
    return setData([characters[randomNumber - 1]])
  }

return (
  <div hidden={hidden} className="RandomCharacter">

    <center><Button
        className="Button"
        onClick={() => filterRandom(characters)}
        title="Character of the Moment"
      /></center>

  {data
          .map(({id, name, species, image, status, gender, origin, location}) => 
    <RandomCharacterCard 
      key={id} 
      name={name} 
      species={species} 
      image={image}
      status={status}
      gender={gender}
      origin={origin.name}
      location={location.name}
    />)}
  </div>
);
}