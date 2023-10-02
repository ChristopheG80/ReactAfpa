// import React from 'react';

// const App = () => {
//   const name = 'Jimmy McNulty';

//   return (
//     <div className="app">
//       <h1>Bienvenue dans mon application React</h1>
//       <p>Je m'appelle {name}</p>
//       <button>Click me</button>
//     </div>
//   );
// };
// export default App;



// import React, { useState } from 'react';
// const ControlledInput = () => {
//   const [Lname, setNameL] = useState('');
//   const [Fname, setNameF] = useState('');

//   const handleChange = (event) => {
//     setNameL(event.target.value);
//   };
//   const handleChange2 = (event) => {
//     setNameF(event.target.value);
//   };
//   return (
//     <div>
//       <input type="text" value={Lname} onChange={handleChange} />
//       <input type="text" value={Fname} onChange={handleChange2} />
//       <button onClick={handleClick}>Saluer</button>
//       <p>Bonjour, {Lname} {Fname} !</p>
//     </div>
//   );
// };
// export default ControlledInput;


// import {React, useRef, useState } from 'react';


// const UncontrolledInput = () => {
//   const [ShowHello, setShowHello] = useState("Bonjour");
//   const inputRef = useRef(null);
//   const inputRef2 = useRef(null);

// let value3="";
//   const handleClick = () => {
//     const value = inputRef.current.value;
//     const value2 = inputRef2.current.value;
//     value3 = "Bonjour " + value + " "  + value2 + ",";
//     console.log(value3);
//     setShowHello(value3);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <input type="text" ref={inputRef2} />
//       <button onClick={handleClick}>Afficher la valeur</button>
//       <p>{ShowHello}</p>
//     </div>
//   );
// };

// export default UncontrolledInput;


// Exercice Modifiez le projet précédent pour ajouter un deuxième champ texte pour le prénom.
// L'application doit afficher les deux champs texte et les réafficher après 'Bonjour'.

// import React, { useRef, useState } from 'react';
// const UncontrolledInput = () => {
//   let showDial="";
//   const inputRefFirst = useRef(null);
//   const inputRefLast = useRef(null);

//   const handleClick = (event) => {
//     const valueF = inputRefFirst.current.value;
//     const valueL = inputRefLast.current.value;
//     console.log(valueF, valueL);
//     showDial = "Bonjour, " + {valueF} + " " + {valueL};
//     console.log(showDial);
//   };
//   return (
//     <div>
//       <input type="text" ref={inputRefFirst} />
//       <input type="text" ref={inputRefLast} />
//       <button onClick={handleClick}>Saluer</button>
//       <p>{showDial}</p>
      
//     </div>
//   );
// };
// export default UncontrolledInput;


// import React, { useState } from 'react';

// const EventHandler = () => {
//   const [message, setMessage] = useState('');

//   const handleClick1 = () => {
//     setMessage('Le bouton 1 a été cliqué !');
//   };
//   const handleClick2 = () => {
//     setMessage('Le bouton 2 a été cliqué !');
//   };
//   const handleClick3 = () => {
//     setMessage('Le bouton 3 a été cliqué !');
//   };
//   const handleClick4 = () => {
//     setMessage('Le bouton 4 a été cliqué !');
//   };

//   const handleClick5 = () => {
//     setMessage('Le bouton 5 a été cliqué !');
//   };

//   const handleClick6 = () => {
//     setMessage('Le bouton 6 a été cliqué !');
//   };
//   const handleClick7 = () => {
//     setMessage('Le bouton 7 a été cliqué !');
//   };
//   const handleClick8 = () => {
//     setMessage('Le bouton 8 a été cliqué !');
//   };
//   const handleClick9 = () => {
//     setMessage('Le bouton 9 a été cliqué !');
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick1} id="button1">Cliquez-moi</button>
//       <button onClick={handleClick2} id="button2">Cliquez-moi</button>
//       <button onClick={handleClick3} id="button3">Cliquez-moi</button>
//       <button onClick={handleClick4} id="button4">Cliquez-moi</button>
//       <button onClick={handleClick5} id="button5">Cliquez-moi</button>
//       <button onClick={handleClick6} id="button6">Cliquez-moi</button>
//       <button onClick={handleClick7} id="button7">Cliquez-moi</button>
//       <button onClick={handleClick8} id="button8">Cliquez-moi</button>
//       <button onClick={handleClick9} id="button9">Cliquez-moi</button>
//     </div>
//   );
// };

// export default EventHandler;


import React, { useState } from 'react';

const App = () => {

  const [liste, setListe] = useState([]);
  const [name, setNewName] = useState('');
  

  const handleClick= () => {
    // console.log(name);
    setListe([...liste, name]);
    // console.log(liste);
    setNewName('');
  }
  //setName(name);
    
  const handleChange= (event) => {
    setNewName(event.target.value);
  }
  
  // console.log(name);
  // console.log(liste);
  
  return (
        <div>
          
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick} id="button1">Ajouter</button>
      
    <li>
        {
          liste.map( (item) => (
            <div>{item}</div>
          ))
        }
    </li>
    </div>
  )
}
export default App;


// Bouton qui permet d'augmenter la valeur du compteur
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Compteur: {count}</p>
//       <button onClick={increment}>compteur = {count}</button>
//     </div>
//   );
// };
// export default Counter;



// import React, { useState, useEffect } from 'react';

// const DataFetcher = () => {
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     // Appel à une API externe pour récupérer des données
//     fetch('https://reqres.in/api/users?per_page=8')
//       .then(response => response.json())
//       .then(data => setUsers(data.data));
//   }, []);

//   return (
//     <div>
//       {users ? (
//         <ul>
//           {users.map(item => (
//             <li key={item.first_name}>{item.last_name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Chargement des données...</p>
//       )}
//     </div>
//   );
// };

// export default DataFetcher;