import React from 'react'
import './PagePublierAnnonce.css'
import Form from './Form';
import {Link} from 'react-router-dom';

function PagePublierAnnonce() {
  return (
    <div className='pagepublierannonce'>
      <div className="header">
      <Link to="/main" style={{textDecoration: "none"}}>
        <img src="../images/return.png" width="40px"  />
      </Link>
      </div>
      <section className='rubon-gris'>
           <h1 className='publier-annonce-titre'>Publier une nouvelle Annonce</h1>
           <Form/>
      </section>

    </div>
  )
}

export default PagePublierAnnonce