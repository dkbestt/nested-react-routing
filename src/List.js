import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const List = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=5&limit=5`).then((res) => {
            setData(res.data.results)
        })
    }, [])

    console.log(data, 'from list');
    return (
        <div className='Search'>
            <h1>List</h1>
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
