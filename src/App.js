import React from 'react'
import Card from './Card/Card'
import Button from './Button/Button'
import './_base.css'

function App() {

  const [characters, setCharacters] = React.useState([])
  const [filteredSpecies, setFilteredSpecies] = React.useState('all')
  const [userInput, setUserInput] = React.useState('')

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

  return (
    <div className="App">
      <Button className="Button Button__filter"
        onClick={() => setFilteredSpecies('Human')} 
        disabled={filteredSpecies === 'Human'} title='Humans' />
      <Button className="Button Button__filter"
        onClick={() => setFilteredSpecies('Alien')} 
        disabled={filteredSpecies === 'Alien'} title='Aliens' />
      <Button className="Button Button__filter"
        onClick={() => setFilteredSpecies('all')}
        disabled={filteredSpecies === 'all'}  title='All' /><br></br>

      <input 
        className="filterInput"
        value={userInput}
        onChange={event => setUserInput(event.target.value)} placeholder="Filter by name" />

    {characters
            .filter(character => filteredSpecies === 'all' || character.species === filteredSpecies)
            .filter(character => character.name.toLowerCase().includes(userInput.toLowerCase()))
            .map(({id, name, species, image, status, gender, origin, location}) => 
      <Card 
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

export default App;