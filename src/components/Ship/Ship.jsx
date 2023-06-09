import React from 'react'
import { Link } from 'react-router-dom'
import './Ship.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Ship = ({ name, nation, description, type, images, ship_id }) => {

  Aos.init({
    duration: 1500,
    useClassNames: true,
  })

  return (
    <div className='cardShip' data-aos="flip-up">
      <h2 className='pShip'>{name}</h2>
      <p className='pShip'>{nation.toUpperCase()}</p>
      <p className='pShip'>{type}</p>
      <img src={images.small} alt={name} />
      <p className='pShipDescription'>{description}</p>
      <Link to={`/ship/${ship_id}`} className='shipLink'>Detalles</Link>
    </div>
  )
}

export default Ship