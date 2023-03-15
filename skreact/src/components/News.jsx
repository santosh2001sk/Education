import React from 'react'
import { useState,useEffect } from 'react';
import {FaAlignJustify,FaHome,FaBuffer,FaPhoneAlt,FaRegFileVideo,FaBookReader,FaMedapps} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Style.css'

const url = 'https://api.github.com/users';
const News = () => {
  const[open ,setOpen] =useState(true);
  const [users,setUsers]=useState([]);
  const getusers=async()=>{
    const response =await fetch(url);
    const users =await response.json();
    setUsers(users)
  }
   useEffect(()=>{
     getusers() ;
   },[]);
  return (
    <div>
    <nav className='bg-gray-200 border-b fixed top-0 left-0 w-full h-16 flex justify-between items-center z-10'>
        <div className='flex items-center gap-5'>
        <button onClick={()=>setOpen(!open)} className="hover:bg-gray-400" ><span className='flex h-15 mt-2 p-2'><FaAlignJustify size="20px " />
        </span></button>

    <img
          src='./images/logo.jpg'
          alt="gh"
          className='h-10 w-15 mt-3 mx-2 '
        />
        <button  className=" bg-red-200 hover:bg-purple-400 w-16 h-10 rounded-lg" >
        <Link to="/" style={{ color: "black" }}>
                    BACK
                  </Link>
        </button>
        {/* <CloseButton variant="red"/> */}
        </div>
        <div id='tuto' className='flex items-center p-3 gap-x-2'>
          <img
            src='images.png'
            alt="gh"
            className='h-10 w-15 mt-2 '
          />
 <button className="aq" type="button">
            <Link to="/login">Login</Link></button>

          </div>

    </nav> <aside id="ali" className='overflow-hidden border-r h-full fixed top-0 left mt-10 px-5 pt-5'
     style={{

      width: open ? 200:60,
      transition:"0.2s"
     }}
     >
       
        <Link to="/"><button  className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
           <FaHome className="text-slate-700"/>HOME
         </button></Link> 
        
      <a href="#c4">  <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
         <FaBuffer  className="text-slate-700"/>ABOUT
         </button></a>

        <a href="#c5"> <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
         <FaPhoneAlt  className="text-slate-700"/>CONTACT
         </button></a>
        <Link to="/tut">
         <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
         <FaRegFileVideo  className="text-slate-700"/>TUTORIALS
         </button></Link>
         <Link to="/training">
         <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
         <FaBookReader className="text-slate-700"/>TRAINING
         </button></Link>
         <Link to="/news">
         <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
         <FaMedapps className="text-slate-700"/>NOTIFICATION
         </button></Link>
         <hr/>
         
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

         <button>         <img src="./images/playstore.png" alt="ty" ></img>
</button>
 <button>         <img src="./images/apple.png" alt="ty" ></img>
</button>


     </aside>
        <section className='grid md:grid-cols-4 gap-4 mt-20 mx-5  d-flex' style={{
      backgroundColor:"aliceblue",
      marginLeft:open ? 200:60,
      transition:"0.2s"
           }}>
        <h2>github</h2>;
   <ul className='users'>
   {users.map((user)=>{
    const {id,login,avatar_url,html_url}=user
return <li key={id}>
  <img src={avatar_url} alt={login} height={10}/>
  <div className='h-6 flex-column'>
    <h4>{login}</h4>
    <a href={html_url}>profile</a>
  </div>
</li>

   })}
   </ul>
        </section>
    </div>
  )
}

export default News