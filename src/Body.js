import React from 'react';
import './Body.css'; // Assurez-vous de mettre le bon chemin vers votre fichier CSS

const Body = (props) => {
  const data = [
    { id: 1, name: 'John', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 3, name: 'Bob', age: 28, email: 'bob@example.com' },
    // ... autres données
  ];

  return (
    <center>
    <div className="body">
    <div className="table-container">
      <h2>Statistique par joueur</h2>
      <table className="user-table">
        <thead>
          <tr className='champ'>
            <th>Classement</th>
            <th>Joueur</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPPM</th>
            <th>EFF</th>
            <th>FG%</th>
            <th>FP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.email}</td>
              <td>{item.email}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </center>
  );
};

export default Body;
