import React from 'react'
import "./PageSeConnecter.css"
import {Link} from 'react-router-dom';

function PageSeConnecter() {
  return ( 
    <div className='pageSeConnecter'>
      <div className="header">
        <img src="../images/1logo.png" width="40px"  />
        <h2 className='ezdar'>EZDAR</h2>
        <h5 className='contactus'>Contact us</h5>
      </div>
      
      <div className='body'>
      <div className='ecriture'>
      <h1 className='h1Trouver'>TROUVER LA MAISON IDEALE</h1>
      <p className='pconnecter'>Achetez, louez, echangez ou vendez un bien immobilier partout dans le monde avec EZDAR</p>
      
      <Link to="/main" style={{textDecoration: "none"}}>
        <button className='btn'> Se connecter </button>
      </Link>
      <Link to="/admin" style={{textDecoration: "none"}}>
        <button className='btn'> Se connecter (admin)</button>
      </Link>
      </div>
      
      <div className='images'>
      <img src="../images/maison.png" width= "100%"  />
      </div>
      </div>
     
    </div>
  )
}

export default PageSeConnecter