import './RandomCharacterCard.css'

export default function RandomCharacterCard({name, species, image, status, gender, origin, location}) {

    return (
        <section className="Card"
            style={{backgroundImage: 'url("' + image +'")', backgroundSize: '200px 200px'}}>
            <h2 className="Card__name">{name}</h2>

    <dl className="Card__list">
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