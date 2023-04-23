import React from "react";
import {Link} from 'react-router-dom';


export default function Header(){

    return(
        
        <div className="header">
            <Link to="/" style={{textDecoration: "none"}}>
            <img src="../images/exit.png" width="25px"  />
            </Link>
            <h3 className="sedeconncte">Se déconnecter</h3>
           
            <img className="img--search" src="../images/search.png" width="20px" />
            <input type="text" className="input--search" placeholder="Rechercher Annonce"/>
            <img className="img--settings" src="../images/settings.png" width="20px" />
            <Link to="/profil" style={{textDecoration: "none"}}>
            <img className="img--user" src="../images/user.png" width="25px"/>
            </Link>
            <img className="img--msg" src="../images/msg.png" width="20px"/>
            <Link to="/addannoce" style={{textDecoration: "none"}}>
            <img className="img--plus" src="../images/plus.png" width="25px"/>
            </Link>
        </div>
        
    )
}