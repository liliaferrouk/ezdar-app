import React from 'react'
import './PageMonProfil.css'
import {Link} from 'react-router-dom';
import datacard from "../datacard";
import CardMonProfil from './CardMonProfil';


function PageMonProfil() {
  const dataElem = datacard.map(elem =>{
    return(
      <CardMonProfil 
           key={elem.id}
           img={elem.img}
           prix={elem.prix}
           catgorie={elem.categorie}
           type={elem.type}
           surface={elem.surface}
           ville={elem.ville}
      />
    )
  })

  return (
    <div className='pagemonprofil'>
      <div className="headerMonProfil">
      <Link to="/main" style={{textDecoration: "none"}}>
        <img src="../images/return.png" width="40px"  />
      </Link>
      <h2>Nom et prenom utilisateur</h2>
      <h5>NomPrenom@gmail.com</h5>
      </div>
      <section className='card-list'>
           <h1 className='titremesannonces'>Mes annonces</h1>
           {dataElem}
      </section>
    </div>
  ) 
}

export default PageMonProfil