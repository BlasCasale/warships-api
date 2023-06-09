import React from 'react'
import Ship from '../Ship/Ship'
import './ShipsList.css'

const ShipsList = ({ ships }) => {

  return (
    <div className='shipsList'>
      {ships.map(ship => {
        if (ship.ship_id != <Ship key={ship.ship_id} {...ship} />) {
          return <Ship key={ship.ship_id} {...ship} />
        }
      })}
    </div>
  )
}

export default ShipsList
