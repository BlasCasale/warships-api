import React, { } from 'react'
import { useState, useEffect, useContext } from 'react'
import { ShipContext } from '../../context/shipContext'
import ShipsList from '../ShipsList/ShipsList'
import Pagination from '../Pagination/Pagination'
import Form from '../Form/Form'
import './ShipsListContainer.css'

const ShipsListContainer = () => {

    const { ships, doFetch, orderByName } = useContext(ShipContext)

    const [currentPage, setCurrentPage] = useState(1)

    const [postPerPage, setPostPerPage] = useState(9)

    const lastPostIndex = currentPage * postPerPage

    const firstPostIndex = lastPostIndex - postPerPage

    const currentPosts = ships.slice(firstPostIndex, lastPostIndex)

    const uriNormal = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es`

    useEffect(() => {
        doFetch(uriNormal)
    }, [])

    return (
        <main>

            <Form />

            <button onClick={() => orderByName()} className='buttonFilter'>Ordernar por nombre</button>

            <Pagination totalShips={ships.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

            <ShipsList ships={currentPosts} />

        </main>
    )
}

export default ShipsListContainer