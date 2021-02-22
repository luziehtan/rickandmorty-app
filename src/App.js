import React from 'react'
import RandomCharacter from './RandomCharacter/RandomCharacter'
import Characters from './Characters/Characters'
import Locations from './Locations/Locations'
import Navigation from './Navigation/Navigation'

function App() {
  const [currentPage, setCurrentPage] = React.useState('RandomCharacter')
  
  return (
    <div className="App">
      <Navigation activeButton={currentPage} onNavigate={setCurrentPage} />
      <RandomCharacter hidden={currentPage !=='RandomCharacter'} title="Home" />
      <Characters hidden={currentPage !== 'Characters'} title="Characters" />
      <Locations hidden={currentPage !== 'Locations'} title="Locations" />
    </div>
  )
}

export default App;