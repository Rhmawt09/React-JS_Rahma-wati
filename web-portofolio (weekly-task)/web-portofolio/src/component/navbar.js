// Import React //
import React from 'react'

// Buat function component dengan Navbar //
function Navbar (){
    return (
        <nav className='navbar navbar-expand-lg navbar-light text-white bg-dark'>
            <div className='container-fluid '>
                <p className='navbar-brand text-light'>React-JS<span class="text-success"> E</span></p>
            </div>

            <button class='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
              </ul>
            </div>

        </nav>
    )
}

// Export function agar dapat digunakan component //
export default Navbar