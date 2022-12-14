import { Link } from 'react-router-dom'
import "../../style/cards.css"


const Card = ({ id, img, name, identity }) => {
  const setNavigateToURL = () => {
    if (identity === 'character') return `/character/${id}`
    if (identity === 'location') return `/location/${id}`
  };
  return (
    <Link to={setNavigateToURL()}>
      <div className='inner-card'>
        <h3>{name}</h3>
        <img src={img} alt={name} />
      </div>
    </Link>
  )
}

export default Card