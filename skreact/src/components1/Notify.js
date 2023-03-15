import React, { useState } from 'react';
import data from './data copy';
import List from './List';
import "./Style1.css"
function App() {
  const [people ,setpeople]=useState(data);
  return (
  <main>
    <section className='container'>
      <h3>{people.length}  birthday's today</h3>
      <List people={people} />
      <button onClick={()=> setpeople([])}>
        clear
      </button>
    </section>
  </main>
  );
}

export default App;
