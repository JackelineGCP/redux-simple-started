import React from 'react';

const Section = ({ hobbies }) => (

  <div>
    <img src="natacion.jpg" />
    <p>Hobbies favoritos</p>
    <ul>
      {
        hobbies.map(hobbie => {
          return <li key={hobbie}>{hobbie}</li>
        })
      }
    </ul>
  </div>

)

export default Section