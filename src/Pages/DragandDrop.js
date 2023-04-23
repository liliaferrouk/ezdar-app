import React from 'react'

function DragandDrop() {
    const dragOver = (e)=> {
        e.preventDefault();
    }
    const dragEnter =(e) =>{
        e.preventDefault();
    }
    const dragLeave =(e) =>{
        e.preventDefault();
    }
    const fileDrop = (e) =>{
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
    }
  return (
    <div className="importPhotos">
        <div className="importPhotos"
             onDragOver={dragOver}
             onDragEnter={dragEnter}
             onDragLeave={dragLeave}
             onDrop={fileDrop}
        >
        <img src="../images/cloud.png" width="150px"  />
        <h3>Transferer les images</h3>
        <p>Sélectionner ou glisser- déplacer les images depuis votre appareil</p>
        </div>
    </div>
  )
}

export default DragandDrop