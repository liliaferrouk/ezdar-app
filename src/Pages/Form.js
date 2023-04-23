import React from "react";
import {Link} from 'react-router-dom';
import DragandDrop from "./DragandDrop";
import Mapp from "./Mapp";

 
export default function Form(){
    const [formData, setFormData] = React.useState({
        categ:"Vente",
        type:"Terrain",
        surface:"",
        prix:"",
        decrip:"",
        annonceurNomPrenom:"",
        annonceurAdresse:"",
        annonceurEmail:"",
        annonceurTel:""
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return(
                {
                    ...prevData,
                    [name]: type === "checkbox" ? checked : value
                }
            )
        })
    }

    function hundleSubmit(event){
        // wont refresh our page:
        event.preventDefault()
        //submitToApi(formData)
        console.log(formData) //ici formData sont les donnees que l'utilisatur a tape sous form d'object
    }
   

   return(
    <form className="form" onSubmit={hundleSubmit}>
        <div >
            <p className="label">Catégorie</p>
            <select 
            className="choix"
            id="categ"   
            value={formData.categ}
            onChange={handleChange}
            name="categ"
            >
                <option value="Vente">Vente</option>
                <option value="Echange">Echange</option>
                <option value="Location">Location</option>
                <option value="Location pour vacances">Location pour vacances</option>
            </select>
        </div>
        <div>
            <p className="label">Type du bien</p>
            <select 
            className="choix"
            id="type"   
            value={formData.type}
            onChange={handleChange}
            name="type"
            >
                <option value="Terrain">Terrain</option>
                <option value="Terrain Agricole">Terrain Agricole</option>
                <option value="Appartement">Appartement</option>
                <option value="Maison">Maison</option>
                <option value="Bungalow">Bungalow</option>
            </select>
        </div>
        <div>
            <p className="label">Surface</p>
            <input 
            type="text"
            placeholder="m²"
            onChange={handleChange}
            name="surface"
            value={formData.surface}
            />
        </div>
        <div>
            <p className="label">Prix</p>
            <input 
            type="text"
            placeholder="DA"
            onChange={handleChange}
            name="prix"
            value={formData.prix}
            />
        </div>
        <div>
            <p className="label">Description</p>
            <input 
            className="inputDescription"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="decrip"
            value={formData.decrip}
            />
        </div>
        <div>
            <p className="label">Localisation</p>
            {/* <div className="btnChoisirSurMap">
            <img src="../images/iconmap.png" width="20px"  />
               <span> Choisir sur la map </span>
            </div> */}
            <div className="laMapLocalisation">
                <Mapp/>
            </div>
        </div>
        <p>Contact & Coordonnés:</p>
        <div className="contacts">
            <p className="label">Nom et prenom de lannonceur</p>
            <input 
            type="text"
            placeholder=""
            onChange={handleChange}
            name="annonceurNomPrenom"
            value={formData.annonceurNomPrenom}
            />
            <p className="label">Adresse</p>
            <input 
            type="text"
            placeholder=""
            onChange={handleChange}
            name="annonceurAdresse"
            value={formData.annonceurAdresse}
            />
            <p className="label">Email</p>
            <input 
            type="text"
            placeholder=""
            onChange={handleChange}
            name="annonceurEmail"
            value={formData.annonceurEmail}
            />
            <p className="label">Téléphone</p>
            <input 
            type="text"
            placeholder=""
            onChange={handleChange}
            name="annonceurTel"
            value={formData.annonceurTel}
            />
        </div>
        <p>Photos:</p>
        <div className="importPhotos">
            <DragandDrop />
        </div>
         
        <div className="lesDeuxButtons">
        <div className="formBtnAnnuler">
        <Link to="/main" style={{textDecoration: "none", color: "#326368"  }}>
            Annuler 
        </Link>
        </div>
        <button className="formBtnPublier">Publier annonce </button>
        </div> 
        
    </form>
   ) 
}