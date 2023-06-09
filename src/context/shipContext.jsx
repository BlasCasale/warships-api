import { useState, createContext } from "react"

export const ShipContext = createContext({ ships: [] })

export const ShipProvider = ({ children }) => {

    const [ships, setShips] = useState([])

    const doFetch = (uri) => {
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                while (ships.length > 0) {
                    ships.pop()
                }
                const newShips = data.data
                Object.entries(newShips).forEach(([key, value]) => {
                    setShips(prev => [...prev, value])
                })
            })
            .catch((error) => console.log(error))
    }

    const orderByName = () => {
        const orderShips = [...ships].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))

        setShips(orderShips)
    }

    return (
        <ShipContext.Provider value={{ ships, doFetch, orderByName }}>
            {children}
        </ShipContext.Provider>
    )
}

