import React from 'react'
import LocationCard from '../LocationCard/LocationCard'
import '../Characters/Characters.css'

export default function Locations({hidden}) {

    const [locations, setLocations] = React.useState([])

    React.useEffect(() => {
     getAllLocations() // no url provided, so the default parameter is used
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getAllLocations(url = 'https://rickandmortyapi.com/api/location') {
  
        fetch(url)
            .then(res => res.json())
            .then(data => { // data is this object: {info: ..., results: ...}
    
            // https://reactjs.org/docs/hooks-reference.html#functional-updates
            setLocations(oldState => [...oldState, ...data.results])
    
     const nextUrl = data.info.next // contains the next url, if it exists
      nextUrl && getAllLocations(nextUrl) // if nextUrl exists, fetch it
        })
}

return (
  <div hidden={hidden} className="Locations">

  {locations
          .map(({id, name, type, dimension, residents}) => 
    <LocationCard 
      key={id} 
      name={name} 
      type={type}
      dimension={dimension}
      residents={residents}
    />)}
  </div>
);
}
