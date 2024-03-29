import { Link } from 'react-router-dom'
import useFetch from '../../api/useFetchSingle';

import "../../style/cards.css"


const LocationCharacterCard = ({apiUrl}) => {
    const character = useFetch(apiUrl).data;
    if(character){
        return (
            <Link to={"/character/"+apiUrl.split('/').pop()}>
                <div className='inner-card'>
                    <h3>{character.name}</h3>
                    <img src={character.image}
                        alt={character.name} />
                </div>
            </Link>
        )
    }
}

export default LocationCharacterCard