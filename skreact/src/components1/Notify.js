import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data copy';
import List from './List';
import "./Style1.css"
function App() {
  const [people ,setpeople]=useState(data);
  return (
  <main>
    <section className='container'>
      <h3>{people.length} of Our Clients birthday's today</h3>
      <List people={people} />
      <button onClick={()=> setpeople([])}>
        clear
      </button>
     <Link to="/"><button type='button'>Back
      </button></Link> 
        
    </section>
  </main>
  );
}

export default App;
