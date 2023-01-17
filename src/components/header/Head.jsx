import React from 'react'

function Head() {
  return (
<>    
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Navbar brand */}
          
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i className='fa fa-phone'> +92 307 5093029</i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i className='fa fa-envelope'> example@gmail.com</i></a>
              </li>
            </ul>
            {/* Right links */}
            <div className="d-flex align-items-center">
              {/* <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <a className="btn btn-dark px-3" href="https://github.com/mdbootstrap/mdb-ui-kit" role="button"><i className="fab fa-github" /></a>  */}


            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <a className="nav-link text-light" href="#"> Theme Builder</a>
              </li>
              
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
            </ul>

            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
   
</>
  )
}

export default Head
