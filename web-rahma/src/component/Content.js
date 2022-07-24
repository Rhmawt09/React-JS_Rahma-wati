import React, { useState, useEffect } from 'react'

export default content = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url, { method: GET })
             .then(res => res.json())
             .then(json => {
                 console.log("data belajar", json)
                 setPosts(json)
             })
    }, [posts])

    return (
        <div className='container-fluid mt-4'>
            <h1> Selamat Datang di Indomaret, Selamat Berbelanja !</h1>
            <h3> Temukan barang yang anda inginkan dengan berbelanja disini </h3>
            <div className='row'>
                <h4>{Element.title}</h4>

                </div>
        </div>
    )

}