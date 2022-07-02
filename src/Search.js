import axios from 'axios'
import React, { useEffect, useState } from 'react'

// https://pokeapi.co/api/v2/pokemon

export const Search = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5`).then((res) => {
            setData(res.data.results)
        })
    }, [])

    console.log(data, 'from search');
    return (
        <div className='Search'>
        <h1>Search</h1>
            {
                data.map((d, index) => (
                    <div key={index}>
                        <h2><strong>Name :</strong> {d.name}</h2>
                        <h4><strong>URL :</strong>: {d.url}</h4>
                    </div>
                ))
            }
        </div>
    )
}
