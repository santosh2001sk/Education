import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import Review from './Review';
import "./Style2.css"
function Seen() {
  return (
     <main>
    <section className='container'>
      <div className='title'>
        <h2>our reviews</h2>
        <div className='underline'>

        </div>
      </div>
      <Review/>
    </section>
  </main>
  )
 
}

export default Seen;