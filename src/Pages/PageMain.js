import React from 'react'
import './PageMain.css'
import Card from './Card';
import Header from "./Header";
import datacard from "../datacard";

function PageMain() {
  const dataElem = datacard.map(elem =>{
    return(
      <Card 
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
    <div>
      <Header/>
      <section className="card-list">
              {dataElem}
      </section>
    </div>
  );
}

export default PageMain