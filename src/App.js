import {results} from './rickandmortyapi.json'
import Card from './Card'

function App() {

  // const data = [{results.name}]

  return (
    <div className="App">
    {results.map(({id, name, species, image, status, gender, origin, location}) => 
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