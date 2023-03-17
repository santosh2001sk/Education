import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaAlignJustify,
  FaSistrix,
  FaHome,
  FaBuffer,
  FaPhoneAlt,
  FaRegFileVideo,
  FaBookReader,
  FaMedapps,
  FaStar
} from "react-icons/fa";
// import { CloseButton } from 'react-bootstrap';
const Training = () => {
    const[open ,setOpen] =useState(true);
  return (
    <>
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

    </nav>         <aside
          id="ali"
          className="overflow-hidden border-r h-full fixed top-0 left mt-20 px-5 pt-5"
          style={{
            // backgroundColor: nbg,
            width: open ? 200 : 60,
            transition: "0.2s",
          }}
        >
          <a href="#sco">
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaHome className="text-slate-700" />
              HOME
            </button>
          </a>

          <a href="#c4">
            {" "}
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaBuffer className="text-slate-700" />
              ABOUT
            </button>
          </a>

          <a href="#c5">
            {" "}
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaPhoneAlt className="text-slate-700" />
              CONTACT
            </button>
          </a>
          <Link to="/tut">
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaRegFileVideo className="text-slate-700" />
              TUTORIALS
            </button>
          </Link>
          <Link to="/training">
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaBookReader className="text-slate-700" />
              TRAINING
            </button>
          </Link>
          <Link to="/notify">
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaMedapps className="text-slate-700" />
              NOTIFICATION
            </button>
          </Link>
          <Link to="/review">
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaStar className="text-slate-700" />
              REVIEW
            </button>
          </Link>
          <hr />

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <button>
            {" "}
            <img src="./images/playstore.png" alt="ty"></img>
          </button>
          <button>
            {" "}
            <img src="./images/apple.png" alt="ty"></img>
          </button>
        </aside>
    <section className='grid md:grid-cols-4 gap-4 mt-20 mx-5 justify-between items-center ' style={{
      backgroundColor:"aliceblue",
      marginLeft:open ? 200:60,
      transition:"0.2s"
           }}>
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="da.jpg" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>DATA ANALYSIS</ins></b></h3></Card.Title><hr/>
        <Card.Text>
        Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. 
        </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
       <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="tja.jpg" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>Java </ins></b></h3></Card.Title><hr/>
        <Card.Text>
        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.It is devloped by james gosling.        </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="sap.png" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>SAP</ins></b></h3></Card.Title><hr/>
        <Card.Text>
        SAP SE is a European multinational software company based in Walldorf, Baden-Württemberg. It develops enterprise software to manage business operations and customer relations.          </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="pyth.jpg" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>PYTHON</ins></b></h3></Card.Title><hr/>
        <Card.Text>
        Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.       </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="sapan.jpg" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>SAP-FICO</ins></b></h3></Card.Title><hr/>
        <Card.Text>
        Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. 
        </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="django.png" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>SPRING-BOOT</ins></b></h3></Card.Title><hr/>
        <Card.Text>
        Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. 
        </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="azure.png" width={450} height={350} />
      <Card.Body>
        <Card.Title><h3 className='text-red-500 '><b><ins>AZURE-DEV</ins></b></h3></Card.Title><hr/>
        <Card.Text>
        Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making. 
        </Card.Text><hr/>
        <Card.Text>
        <h2 className='text-violet-900'><b>*Opening Hours</b></h2>
        <br/>
        <p className='text-green-700'>Mon-Fri:10:00 AM - 02:00PM</p>
        <p className='text-red-700'>Sat-Sun:Closed</p>

        </Card.Text><hr/><hr/>
        <a href='https://teams.live.com/_#/pre-join-calling/'><Button variant="primary" className='bg-purple-900 text-slate-50'>Join Now</Button></a>
      </Card.Body>
    </Card>
</div>
    </section>
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

export default Training
