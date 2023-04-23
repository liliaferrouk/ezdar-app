import React from 'react'
import "./PageAdmin.css" 
import {Link} from 'react-router-dom';


function PageAdmin() {
  return (
    <div className='classpageadmin'>
      <div className="headeradmin">
        <img src="../images/1logo.png" width="40px"  />
        <h2 className='ezdar'>EZDAR</h2>
            
        <h3 className="sedeconncte">Se déconnecter</h3>
            <Link to="/" style={{textDecoration: "none"}}>
            <img src="../images/exit.png" width="25px"  />
            </Link>
      </div>
      <section className='rubon-gris'>
           <div className='infoPlusBienImmobilier'>
            <div>
            <span className='titrepageannonce'>catégorie:</span>
            <span className='textpageannonce'>Location</span>
            </div>
            <div>
            <span className='titrepageannonce'>type du bien:</span>
            <span className='textpageannonce'>Appartement</span>
            </div>
            <div>
              <span className='titrepageannonce'>surface:</span>
              <span className='textpageannonce'>95 m²</span>
            </div>
            <div>
              <span className='titrepageannonce'>prix:</span>
              <span className='textpageannonce'>3750.000 DA</span>
            </div>
            <div>
              <p className='titrepageannonce'>description:</p>
              <p className='textpageannonce'>Agence immobilière kouba met en vente une très belle appartement f3 avec une place de parking sous -sol Dans une petite Promotion immobilière de 4 locateur un quartier très chic avec une finition moderne est hamam Dans la salle de bain</p>
            </div>
            <div>
              <p className='titrepageannonce'>photos:</p>
              <div className='imget2next'>
              <img className='nextimg' src="../images/nextgauche.png" width="20px"  />
              <img src="../images/maisonplus.png" width="400px"  />
              <img className='nextimg' src="../images/nextdroit.png" width="20px"  />
              </div>
            </div>
            <div>
              <p className='titrepageannonce'>localisation:</p>
              <div className='mappageannpnce'>
              <img src="../images/mapplus.png" width="400px"  />
              <div className='btnouvrirmaps'>
               <img className='lab' src="../images/positionblanc.png"  />
               <span>Ouvrir Google Maps</span>
              </div>
              </div>
            </div>
            <div>
              <p className='titrepageannonce'>Contact & Coordonnés:</p>
              <div className='infocontacteAnnonce'>

                <div className='infpageannonce'>
                <img className='lab' src="../images/usernoir.png" />
                <span className='textpageannonce'>nom et prenom de lannonceur</span>
                </div>

                <div className='infpageannonce'>
                <img className='lab' src="../images/positionnoir.png" />
                <span className='textpageannonce'>@ de lannonceur</span>
                </div>

                <div className='infpageannonce'>
                <img className='lab' src="../images/mailnoir.png" />
                <span className='textpageannonce'>annonceur@gmail.com</span>
                </div>

                <div className='infpageannonce'>
                <img className='lab' src="../images/telnoir.png" />
                <span className='textpageannonce'>0676878787</span>
                </div>
              </div>
            </div>
          </div>
          <div className='les2btnadmin'>
          <button className='btnannocesuivente'>Annonce suivante</button>
          <button className='btnajouterannonce'>Ajouter lannonce </button>
          </div>
      </section>

    </div>
  )
}

export default PageAdmin