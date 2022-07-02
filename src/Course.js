import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Course = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1`).then((res) => {
            setData(res.data.results)
        })
    }, [])
    console.log(data, 'from course');
    return (
        <div className="Page">
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
            <div className="courses-nav">
                <Link to="/courses/search">Search</Link>
                <Link to="/courses/list">List</Link>
            </div>
            <Outlet />
        </div>
    )
}
