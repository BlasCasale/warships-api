import React from 'react'
import './shipDetail.css'

const ShipDetail = ({ name, tier, images, description, type, default_profile, is_premium, is_special, price_credit, price_gold }) => {

    return (
        <div className='cardDetail'>
            <h2 className='pShip'>{name}</h2>
            <p className='pShip'>Tier: {tier}.</p>
            <p className='pShip'>{type}</p>
            <img src={images.small} alt={name} />
            {is_special && (<h3 className='pShip'>Es especial.</h3>)}
            {is_premium && (<h3 className='pShip'>Es premium.</h3>)}
            <p className='pShipDescription'>{description}</p>
            <p className='pShip'>Vida: {default_profile.armour.health} HP.</p>
            {default_profile.anti_aircraft.defense && <p className='pShip'>Antiarea: {default_profile.anti_aircraft.defense}.</p>}

            {default_profile.artillery && (
                <ul className='ulShip'>
                    <li>
                        <h3 className='pShip'>Artillería:</h3>
                    </li>
                    <li>
                        <p className='pShip'>Tiempo de rotación de torretas: {default_profile.artillery.rotation_time}s.</p>
                    </li>
                    <li>
                        <p className='pShip'>Alcance de tiro: {default_profile.artillery.distance}km.</p>
                    </li>
                    <li>
                        <p className='pShip'>Dispersión: {default_profile.artillery.max_dispersion}m.</p>
                    </li>
                    <li>
                        <p className='pShip'>Recarga: {default_profile.artillery.shot_delay}s.</p>
                    </li>
                    <li>
                        <p className='pShip'>Torretas: {default_profile.artillery.slots[0].guns}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Cañones por torreta: {default_profile.artillery.slots[0].barrels}.</p>
                    </li>
                    {default_profile.artillery.shells.HE && (
                        <>
                            <li>
                                <h3 className='pShip'>HE:</h3>
                            </li>
                            <li>
                                <p className='pShip'>Daño: {default_profile.artillery.shells.HE.damage}.</p>
                            </li>
                            <li>
                                <p className='pShip'>Probabilidad de incendio: {default_profile.artillery.shells.HE.burn_probability}%.</p>
                            </li>
                        </>
                    )}
                    {default_profile.artillery.shells.AP && (
                        <>
                            <li>
                                <h3 className='pShip'>AP:</h3>
                            </li>
                            <li>
                                <p className='pShip'>Daño: {default_profile.artillery.shells.AP.damage}.</p>
                            </li>
                            <li>
                                <p className='pShip'>Velocidad de proyectil: {default_profile.artillery.shells.AP.bullet_speed} m/s.</p>
                            </li>
                        </>
                    )}
                </ul>
            )}
            {default_profile.torpedoes && (
                <ul className='ulShip'>
                    <li>
                        <h3 className='pShip'>Torpedos:</h3>
                    </li>
                    <li>
                        <p className='pShip'>Torpederas: {default_profile.torpedoes.slots[0].guns}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Torpedos por torpedera: {default_profile.torpedoes.slots[0].barrels}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Daño por torpedo: {default_profile.torpedoes.max_damage}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Alcance: {default_profile.torpedoes.distance} Km.</p>
                    </li>
                    <li>
                        <p className='pShip'>Recarga: {default_profile.torpedoes.reload_time}s.</p>
                    </li>
                    <li>
                        <p className='pShip'>Distancia de detección: {default_profile.torpedoes.visibility_dist}Km.</p>
                    </li>
                </ul>
            )}
            {default_profile.depth_charge && (
                <ul className='ulShip'>
                    <li>
                        <h3 className='pShip'>Cargas de prundidad: </h3>
                    </li>
                    <li>
                        <p className='pShip'>Cantidad de cargas: {default_profile.depth_charge.max_packs}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Cantidad de bombas por carga: {default_profile.depth_charge.num_bombs_in_pack}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Daño por bomba: {default_profile.depth_charge.bomb_max_damage}.</p>
                    </li>
                    <li>
                        <p className='pShip'>Tiempo de recarga de la carga: {default_profile.depth_charge.reload_time}s.</p>
                    </li>
                </ul>
            )}

            <ul className='ulShip'>
                <li>
                    <h3 className='pShip'>Movilidad:</h3>
                </li>
                <li>
                    <p className='pShip'>Maxima velocidad: {default_profile.mobility.max_speed} Knt.</p>
                </li>
                <li>
                    <p className='pShip'>Radio de giro: {default_profile.mobility.turning_radius}m.</p>
                </li>
                <li>
                    <p className='pShip'>Tiempo de giro de timón: {default_profile.mobility.rudder_time}s.</p>
                </li>
            </ul>

            <ul className='ulShip'>
                <li>
                    <h3 className='pShip'>Ocultamiento: {default_profile.concealment.total}</h3>
                </li>
                <li>
                    <p className='pShip'>Detección en superficie: {default_profile.concealment.detect_distance_by_ship} Km.</p>
                </li>
                <li>
                    <p className='pShip'>Detección por aire: {default_profile.concealment.detect_distance_by_plane} Km.</p>
                </li>
                <li>
                    <p className='pShip'>Detección desde profundidades: {default_profile.concealment.detect_distance_by_subamrine} Km.</p>
                </li>
            </ul>

            {price_credit > 0 && (<p className='pCredit'>Valor en creditos: {price_credit}.</p>)}

            {price_gold > 0 && (<p className='pGold'>Valor en doblones: {price_gold}.</p>)}
        </div>
    )
}

export default ShipDetail