import React from 'react'
import './PageAnnoncePlus.css'
import {Link} from 'react-router-dom';


function PageAnnoncePlus() {
  return (
    <div className='pageAnnoncePlus'>
      <div className="header"> 
      <Link to="/main" style={{textDecoration: "none"}}>
        <img src="../images/return.png" width="40px"  />
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
          <button className='btnnvoiemsg'>
          <img className='lab' src="../images/envoiemsg.png" />
          <span>Envoyer message</span>
          </button>
      </section>
    </div>
  )
}

export default PageAnnoncePlus