import React from 'react'
import { useState, useContext } from 'react'
import { ShipContext } from '../../context/shipContext'
import './Form.css'

const Form = () => {

    const { doFetch } = useContext(ShipContext)

    const [input, setInput] = useState({ nation: "", type: "", number: "" })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const uriNormal = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es`

    const uriType = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&type=${input.type}`

    const uriNation = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&nation=${input.nation}`

    const uriNumber = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&limit=${input.number}`

    const uriNationAndType = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&nation=${input.nation}&type=${input.type}`

    const uriNationAndNumber = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&nation=${input.nation}&limit=${input.number}`

    const uriTypeAndNumber = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&limit=${input.number}&type=${input.type}`

    const uriNationTypeAndNumber = `https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=86298c07a946cc6c21438264cdbe84eb&language=es&limit=${input.number}&type=${input.type}&nation=${input.nation}`


    const handleSubmit = (e) => {
        e.preventDefault()

        switch (input.nation, input.type, input.number) {
            case (input.nation && !input.type && !input.number):
                doFetch(uriNation)
                break;

            case (!input.nation && input.type && !input.number):
                doFetch(uriType)
                break;

            case (!input.nation && !input.type && input.number):
                doFetch(uriNumber)
                break;

            case (input.nation && input.type && !input.number):
                doFetch(uriNationAndType)
                break;

            case (input.nation && !input.type && input.number):
                doFetch(uriNationAndNumber)
                break;

            case (!input.nation && input.type && input.number):
                doFetch(uriTypeAndNumber)
                break;

            case (input.nation && input.type && input.number):
                doFetch(uriNationTypeAndNumber)
                break;

            default:
                doFetch(uriNormal)
                break;
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <ul className='ulNation'>
                <li className='liForm'>
                    <label htmlFor="germany">Alemania</label>
                    <input type="radio" id="germany" name="nation" value="germany" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="usa">EEUU</label>
                    <input type="radio" id="usa" name="nation" value="usa" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="europe">Europa</label>
                    <input type="radio" id="europe" name="nation" value="europe" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="france">Francia</label>
                    <input type="radio" id="france" name="nation" value="france" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="italy">Italia</label>
                    <input type="radio" id="italy" name="nation" value="italy" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="japan">Japon</label>
                    <input type="radio" id="japan" name="nation" value="japan" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="uk">Reino Unido</label>
                    <input type="radio" id="uk" name="nation" value="uk" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="netherlands">Paises bajos</label>
                    <input type="radio" id="netherlands" name="nation" value="netherlands" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="pan_asia">Pan Asia</label>
                    <input type="radio" id="pan_asia" name="nation" value="pan_asia" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="ussr">URSS</label>
                    <input type="radio" id="ussr" name="nation" value="ussr" onChange={handleInput} />
                </li>
            </ul>

            <ul className='ulType'>
                <li className='liForm'>
                    <label htmlFor="Destroyer">Destructor</label>
                    <input type="radio" id="Destroyer" name="type" value="Destroyer" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="Cruiser">Crucero</label>
                    <input type="radio" id="Cruiser" name="type" value="Cruiser" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="Battleship">Acorazado</label>
                    <input type="radio" id="Battleship" name="type" value="Battleship" onChange={handleInput} />
                </li>

                <li className='liForm'>
                    <label htmlFor="AirCarrier">Portaaviones</label>
                    <input type="radio" id="AirCarrier" name="type" value="AirCarrier" onChange={handleInput} />
                </li>
            </ul>

            <div className='divNumber'>
                <label htmlFor="number">Selecciona la cantidad de barcos</label>
                <input type="number" name="number" id="number" min={0} max={100} value={input.number} onChange={handleInput} />
            </div>

            <button type="submit" className='formButton'>Enviar</button>

        </form>
    )
}

export default Form