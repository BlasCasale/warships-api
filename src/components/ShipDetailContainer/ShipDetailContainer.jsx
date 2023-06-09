import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShipContext } from '../../context/shipContext'
import ShipDetail from '../ShipDetail/ShipDetail'
import './ShipDetailContainer.css'

const ShipDetailContainer = () => {

  const { doFetch, ships } = useContext(ShipContext)

  const { id } = useParams()

  const uriId = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&ship_id=${id}`

  useEffect(() => {
    doFetch(uriId)
  }, [id])

  return (
    <section className='shipDetail'>
      {ships.map((ship) => (<ShipDetail key={ship.ship_id} {...ship} />))}
    </section>
  )
}

export default ShipDetailContainer