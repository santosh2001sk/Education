import React, { useState } from 'react';
import people from './Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import "./Style2.css"

const Review = () => {
 const[index,setindex]=useState(0);
 const{name,job,image,text}=people[index]

 const checknumber=(number)=>{
  if(number > people.length-1){
    return 0;
  }
  if(number< 0){
    return people.length-1;
  }
  return number;
 };

 const nextPerson=()=>{
  setindex((index)=>{
    let newIndex=index+1;
    return checknumber(newIndex); 
  })
 }

 const prevPerson=()=>{
  setindex((index)=>{
    let newIndex=index-1;
    return checknumber(newIndex); 
  })
 }
 const randomPerson=()=>{
  let randomNumber=Math.floor (Math.random()*people.length) ;
  if(randomNumber===index){
    randomNumber= index+1
  }
  setindex(checknumber(randomNumber));

 }

  return <article className='review'>
  <div className='img-container'>
    <img src={image} alt={name} className="person-img" />
    <span className='quote-icon'><FaQuoteRight/></span>
  </div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>
<img src="/public/da.jpg" alt='rating' />
<div className='button-container'>
  <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
  <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
</div> 
 <button className='random-btn' onClick={randomPerson}>surprise me</button>

  </article>;
};

export default Review;
