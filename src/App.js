import React from 'react'
import Characters from './Characters/Characters'
import Locations from './Locations/Locations'
import Navigation from './Navigation/Navigation'

function App() {
  const [currentPage, setCurrentPage] = React.useState('Characters')
  
  return (
    <div className="App">
      <Navigation activeButton={currentPage} onNavigate={setCurrentPage} />
      <Characters hidden={currentPage !== 'Characters'} title="Characters" />
      <Locations hidden={currentPage !== 'Locations'} title="Locations" />
    </div>
  )
}

export default App;