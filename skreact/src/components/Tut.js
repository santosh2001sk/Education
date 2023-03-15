import React from 'react'
// import {useGlobalContext} from "./Tut"
import { Link } from 'react-router-dom'
import {FaDotCircle} from "react-icons/fa";
import { useState } from 'react';
import {FaAlignJustify,FaHome,FaBuffer,FaPhoneAlt,FaRegFileVideo,FaBookReader,FaMedapps} from "react-icons/fa";
const Tut = () => {
  const[open ,setOpen] =useState(true);
  const[open2 ,setOpen2] =useState(true);

  // const {page ,nbpages}=useGlobalContext();
  return (
    <>
    <nav className='bg-gray-200 border-b fixed top-0 left-0 w-full h-16 flex justify-between items-center z-10'>
    <div className='flex items-center gap-5'>
    <button onClick={()=>setOpen(!open)} className="hover:bg-gray-400" ><span className='flex h-15 mt-2 p-2'><FaAlignJustify size="20px " />
    </span></button>
    
    <img
          src='./images/logo.jpg'
          alt="gh"
          className='h-10 w-15 mt-3  '
        />
        <button  className=" bg-red-200 hover:bg-purple-400 w-16 h-10 rounded-lg" >
        <Link to="/" style={{ color: "black" }}>
                    BACK
                  </Link>
        </button>
       
        
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
       </nav>
       <aside id="ali" className='overflow-hidden border-r h-full fixed top-0 left mt-10 px-5 pt-5'
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
       <div>
        {/* <button onClick={() => getPrevPage()}>prev</button>
        <p>{page}of{nbpages}</p>
        <button onClick={() => getNextPage()}>prev</button> */}

       </div>
    <div className='grid md:grid-cols-4 gap-4 mt-20 mx-5 justify-between items-center'
 style={{
      backgroundColor:"aliceblue",
      marginLeft:open ? 200:60,
      transition:"0.2s"
           }}>

    {
      
     <div  >
     
     <iframe className='z-10' style={{

height: open2 ? 180:400,
width: open2 ? 300:400,
marginRight:open2 ? 0:400,
transition:"0.2s"
}}  width="300" height="180" src="https://www.youtube.com/embed/OuBUUkQfBYM"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

      </iframe>
      <div className='flex gap-x-2'>
       <button type="button" onClick={()=>setOpen2(!open2)} formTarget="blank"> <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/></button>
      
        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
      
      
    }
    <div >
      <img alt='yk' src={'images/1.webp'} className='rounded-lg '/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
       
     <div >
      <img alt='yk' src={'images/2.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/3.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/4.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/5.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/6.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/7.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/8.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/9.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
     <div >
      <img alt='yk' src={'images/10.webp'} className='rounded-lg'/>
      
      <div className='flex gap-x-2'>
        <img alt='tk' src='hola.png' className='rounded-full w-10 h-10 m-2 border bg-red-200'/>

        <div>
          <h5 className='text-sm font-semibold'>
Learn Java programming from basics or you can say ZERO to HERO :D
</h5>
<div className='flex items-center gap-2'>
  <p>Hola TUTORIALS</p>
  <FaDotCircle/>

</div><div>
  <p className='font-semibold text-slate-500'>12M views:<span className='text-blue-500'> 1 Day ago</span></p>
</div>
        </div>
      </div>
     </div>
      
      
    
    </div>
    <section className="sec3"
        style={{
      marginLeft:open ? 200:60,
      transition:"0.2s"
           }} >
          <nav>
            <h1 id="c4" style={{ color: "BLACK", fontSize: 40 }}>
              About
            </h1>
            <div className="divl1"  style={{ 
      marginLeft:open ? 6:8,
      transition:"0.2s"
           }}>
              <img
                className="iman"
                src="man.jpg"
                alt="Simply Easy Learning"
                width={430}
                height={300}
                animation-name="exam"
              />
            </div>
            <div className="divr1">
              <p className="p1"
               >
                Hola9 Computer Software Training Institute is on the premier
                Software Training Institute in Bengaluru located in
                Koramangala,indiranagar and vijaynagar aggara.Since our
                inception in the year 2008.We are preparing working professional
                students forthe upcoming project and practical knowledge about
                the software where there are find hurdle.We facilitate the best
                industry practices, theoretical and practical and intense
                training on real time scenario project, under the training of
                working professional of our talented professional working
                faculty. Besides training, we also provide 100% Placement
                Assistance and support to our students.
              </p>{" "}
              <br />
              <div className="divr2">
                <h3 style={{ float: "right", marginRight: "45%" }}>
                  Follow us:
                </h3>
                <br />
                <br />
                <ul className="ul1" style={{ marginLeft: "35%" }}>
                <li className="l3">
                    {" "}
                    <a href="https://web.telegram.org/k/">
                      <img
                        src={require("./images/tele.jpg")}
                        alt="Trees"
                        height="25"
                        width="25"
                      />
                    </a>
                  </li>
                  <li className="l3">
                    {" "}
                    <a href="https://www.twitter.com">
                      <img
                        src={require("./images/t.png")}
                        alt="Trees"
                        height="25"
                        width="25"
                      />
                    </a>
                  </li>
                  <li className="l3">
                    {" "}
                    <a href="https://www.aedin.com/company/hola9-classifieds-india-private-limited">
                      <img
                        src={require("./images/g.png")}
                        alt="Trees"
                        height="25"
                        width="25"
                      />
                    </a>
                  </li>
                  <li className="l3">
                    {" "}
                    <a href="https://www.facebook.com/Hola9-Technologies-103386172328157">
                      <img
                        src={require("./images/f.png")}
                        alt="Trees"
                        height="25"
                        width="25"
                      />
                    </a>
                  </li>
                  <li className="l3">
                    {" "}
                    <a href="https://www.instagram.com/hola9.official/">
                      <img
                        src={("./images/R.png")}
                        alt="Trees"
                        height="25"
                        width="25"
                      />
                    </a>
                  </li>
                  <li><div><h6 className="text-red-500 mx-2">2022 @Hola9 classifieds private ltd.</h6>
</div></li>
                  {/* <img src="./images/apple.png" alt="ty" height={55} width={75}/ > */}

                </ul>
                
                

              </div>
              <div className="divl2">
                <address id="c5" style={{ textDecoration: "burlywood" }}>
                  <a href="https://goo.gl/maps/R72sBiGJ57gWXvW59">
                    <span className="sp1">ADDRESS</span>
                    <br />
                    #12 Second Floor 3rd Cross
                    <br />
                    Patel Narayana Reddy Layout
                    <br />
                    6th Block Koramangala
                    <br />
                    Bengaluru -560095
                  </a>
                </address>
                <br />{" "}
                <contact>
                  <a href="https://duo.google.com">contact:9078740841</a>
                </contact>
              </div>
            </div>
          </nav>
         
        </section>
    </>
   
  )
}

export default Tut
