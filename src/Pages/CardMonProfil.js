import React from 'react'
import {Link} from 'react-router-dom';

function CardMonProfil(props) {
  return (
    <div className="card">
           
            <img className="img--card" src={`../images/${props.img}`} width="250px"/>
            
            <div className="div--card">
                 <p> <span className="bleu">Prix:</span>{props.prix}DA </p>
                 <p> <span className="bleu">Catégorie:</span>{props.catgorie} </p>
                 <p><span className="bleu">Type du bien:</span>{props.type} </p>
                 <p><span className="bleu">Surface:</span>{props.surface}m2 </p>
                 <p><span className="bleu">Ville:</span>{props.ville} </p>
                 <img className='deletebtn' src="../images/delete.png" width="15px" />
                 <Link to="/annoceplus" style={{textDecoration: "none"}}>
                 <button className="btnPlus" onClick={()=>console.log("cliked")}>Plus</button>
                 </Link>
            </div>
            
        </div>
  )
}

export default CardMonProfil