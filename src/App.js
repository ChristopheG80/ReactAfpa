import React, { useState } from 'react';


function App() {
//State
const [Joueurs, setJoueurs] =useState({id:0, prenom:'', handicap:3, direct:0, libre:0, rouge:0, bande1:0, bande2:0, bande3:0, bricole:0, gauche:0, casin:0, side:"Gauche"});
const [NewName, setNewName] = useState("");
const [NewHandicap, setNewHandicap] = useState(3);

  //Comportements Evènements
const handleChangeName = (event) => {
  console.log(event);
  setNewName(event.target.value);
}

const handleChangeHandicap = (event) => {
  console.log(event);
  setNewHandicap(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const joueur = [...Joueurs];
  const id = new Date().getTime();
  const prenom = NewName;
  const handicap = NewHandicap;
  const side = "Gauche";
  setJoueurs({id, prenom, handicap, side});
}
// Affichage

  return(
    <div>
      <form action="onSubmit">
        <input 
          value={NewName}
          type="text"
          onChange={handleChangeName}
        />
        <input 
          value={NewHandicap}
          type="text"
          onChange={handleChangeHandicap}
        />
        <input 
          value="Ajouter +"
          type="submit"
        />
      </form>
      Formulaire pour le prénom, handicap, Si Gaucher ou Droitier

      Affichage des boutons pour le comptage
    </div>
  )
}
export default App;