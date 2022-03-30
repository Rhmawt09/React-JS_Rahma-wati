import React from 'react'

function Sidebar (){
    return (
        <div className='h-100 position-fixed w-25 bg-dark' >
            {/* <ul className='list-group'>
              <li className='list-group-item'>Blog</li>
              <li className='list-group-item'>Portofolio</li>
              <li className='list-group-item'>Menu</li>
              <li className='list-group-item'>Content</li>
            </ul> */}
            <div>
                <p>Blog</p>
            </div>
            <div>
                <p>Portofolio</p>
            </div>
            <div>
                <p>Menu</p>
            </div>
            <div>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Sidebar