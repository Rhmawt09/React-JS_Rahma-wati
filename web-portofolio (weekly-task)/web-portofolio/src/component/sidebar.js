import React from 'react'

function Sidebar (){
    return (
        <div className='h-100 position-fixed w-25 bg-dark' >
            <div>
                <p>About me</p>
            </div>
            <div>
                <p>Blog</p>
            </div>
            <div>
                <p>Portofolio</p>
            </div>
            <div>
                <p>Task</p>
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Sidebar