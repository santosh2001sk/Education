import React from 'react';
import "./Style1.css"

const List = ({people}) => {
  
  return (
    <>
      {people.map((person)=>{
        const{id,name,age,image,info}=person;
        return <article key={id} className="person">
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>{age} years old</p>
        </div>

        </article>
      })}
    </>
  );
};

export default List;
