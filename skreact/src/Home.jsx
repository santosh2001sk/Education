import React,{useState,useEffect} from 'react'
import Ceo from './images/Ceo.gif'
import Takla from './images/Takla.png'
import "./Style.css"
import "./Signup"
import './Login'

import { Link } from 'react-router-dom'
// import Login from './Login'



const HOME = (props) => {

  const [count, setCount] = useState(1);
  const [unt, setunt] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count +0);
    }, 60000);
    
    
  });
  useEffect(() => {
    setTimeout(() => {
      setunt((unt) => unt +0);
    }, 1000);
    
  });


  const[tg,tsetg]=useState()
  const[tgc,tsetgc]=useState()
  
  

  const[tbg,tsetbg]=useState()
  const[bg,setbg]=useState()
  const[nbg,nsetbg]=useState()
  
  const[flag,setFlag] = useState()

  const handleClick= () =>{
    setFlag(true)

   
    let newbg ="black";setbg(newbg);
    let newnbg ="black";nsetbg(newnbg);
    let newtbg ='aliceblue';tsetbg(newtbg);
    let newtg ="blue";tsetg(newtg);
    let newtbgc ='aliceblue';tsetgc(newtbgc);
    document.getElementById('sec1').style.background='black';
    // window.alert("this is your dark mode");
  
   


} 

const[dc,tc]=useState()

const[dt,dtc]=useState()
const[dh,dth]=useState()
const Shutoff= () => {
  let dthh="HEY USER DO YOU WANT TO KNOW SOMETHING";dth(dthh);
  let dttc =Date();dtc(dttc);
  let dtcc ="blue";tc(dtcc);
}

const Soff= () => {
  document.getElementById('demo').style.innerHTML='aliceblue';
}
const Click= () =>{
  
  document.getElementById('nav-1').style.background='aliceblue';
  document.getElementById('tk').style.background='white' ;
  document.getElementById('tk').style.color='blue';
  document.getElementById('sj').style.color='red';
  document.getElementById('tak').src='./images/cfo.gif' ;
  document.getElementById('sec1').style.background='aliceblue';
  // window.alert("this is your light mode");
  document.getElementById('demo').innerHTML="Date : " + Date() ;
  document.getElementById('demo').style.color='black';


}

const refresh=() => {
   window.location.reload(true);
}
const [hed,ing]=useState()

const Ck= () =>{
  let hing="";ing(hing);

}
const mOver=()=> {
  document.getElementById('tak').src='./images/Takla.png' ;
}

const mOut=()=> {
  document.getElementById('tak').src='./images/cfo.gif' ;
}

return (
    <div>
    <>
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
  <link rel="stylesheet" href="Style.css" />
  <title>sk</title>
  <section id="sec1" style={{backgroundColor:bg}} >
    <nav id="nav-1" style={{backgroundColor:nbg}}>
   <a href  onMouseEnter={Shutoff} onMouseLeave={Soff} > <img className="im" src="./images/logo.jpg" alt="ty" height="80" width="160"/></a>
   

      <ul>
        <li>
          <a href="#c4">ABOUT</a>
        </li>
        <li>
          <a href="#c5">CONTACT</a>
        </li>
        <li>
          <Link to="/#c4">HOME</Link>
        </li>
        <button className='bt' type='submit'>search</button>
        <input  className='seach' type="Search" placeholder='Search' aria-label='Search'></input>
        <button className="l1" onClick={Click} onDoubleClick={refresh}>LIGHT</button>
        <button className='l1a' onClick={handleClick} onDoubleClick={refresh}>DARK</button>
      

        
      </ul>
      
    </nav>
    <h3 id="tk" style={{backgroundColor:tbg ,color:tg}}>
      {" "}
      We are offering Online &amp; Offline and Corporate Training Courses. For
      more inform please contact us - 9078740841{" "}
      <select className="rp" name="languages">
        <option value="Course">Courses</option>
        <option value="java">java</option>
        <option value="python">python</option>
        <option value="android">android</option>
        <option value="javascript">javascript</option>
        <option value="nodejs">nodejs</option>
        <option value="datascience">datascience</option>
        <option value="Course">C+</option>
        <option value="java">C</option>
        <option value="python">php</option>
        <option value="android">Dot.net</option>
        <option value="javascript">jsp</option>
        <option value="nodejs">nodejs</option>
        <option value="datascience">html</option>
      </select>{" "}
      <select className="rt" name="course">
        <option value="Course">Our Branches</option>
        <option value="java">Airoli</option>
        <option value="python">Ghansoli</option>
        <option value="android">Kalyan</option>
        <option value="javascript">Bhandup</option>
        <option value="nodejs">Mulund</option>
        <option value="datascience">Powai</option>
      </select>{" "}
    </h3>
    <br />
    <button className="aq" type="button">
      <Link to="/login">Login</Link>
    </button>
    <img className="ik" src="images.png" alt="ak" height={36} width={36} />
    <br />
    
    <h3 >{count} minutes  {unt} Second</h3>
    <p id='demo'>{dt}</p>
    <h1 id="sj" style={{color:tgc,dc}}  onClick={Ck}>
      {dh}{hed} 
    </h1>
    <iframe id="frame" width="100" height="150" src="https://www.youtube.com/embed/p09i_hoFdd0" title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  

    <div className="div1" >
      <img id="tak" src={flag? Ceo :Takla}  alt="ak" height={200} width={200} onMouseOver={mOver} onMouseOut={mOut}  /> 
      <h4 id="H4">{props.title}</h4>
      <img src='' alt="ak" height={200} width={200}/> 
      <img  alt="ak" height={200} width={200} /> 

    </div><br></br><br></br>
    <img className='duck' src="duck.gif" alt="ak" height={80} width={80} />
    <a href="https://web.whatsapp.com/">
    <img className="wk" src="what.png" alt="ak" height={60} width={60}  />
    </a>
    
    </section>
  <section className="sec2">
    <h1 style={{ fontSize: 30, backgroundColor: "powderblue" }}>
      Hola9 computer institute
    </h1>
    <nav>
      <h1 align="center" style={{ color: "rgb(216, 18, 18)" }}>
        OUR FACILITIS
      </h1>
      <div className="divl">
        {" "}
        <br />
        <br />
        <h1 className="r4">1.ONE TO ONE MENTORING</h1>
        <br />
        <h1 className="r4">2.GLOBAL CERTIFICATION</h1>
        <br />
        <h1 className="r4">3.CLASSROOM SECTION</h1>
        <br />
        <h1 className="r4">4.MOCK INTERVIWS</h1>
        <br />
        <h1 className="r4">5.100 % PLACEMENT</h1>
        <br />
        <h1 className="r4">6.DAILY PRACTICES</h1>
      </div>
      <div className="divr">
        <img
          className="gl"
          src="girl_img.png"
          alt="Simply Easy Learning"
          width={250}
          height={355}
        />
      </div>
    </nav>
  </section>
  <section className="sec4">
  <h1 id="c4" style={{ color: "rgb(228, 219, 219)", fontSize: 40 }}>
    TOP Companies who Hire Our students:-
  </h1>
  <br />
  <div style={{ float: "left", marginLeft: "5%" }} className="item">
    <a href="https://www.infosys.com">
      <img className='js' src="./images/info.jpg" alt="cl_logo1" height={160} width={215} />
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "1%" }} className="item">
    <a href="https://dxc.com/in/en">
      <img className='js' src="./images/dxc.jpg" alt="cl_logo2" height={160} width={215} />
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "1%" }} className="item">
    <a href="https://www.phcc.gov.qa">
      <img className='js' src="./images/phc.jpg"alt="phcc" height={160} width={215} />
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "1%" }} className="item">
    <a href="https://www.capgemini.com">
      <img className='js' src="./images/cap.png" alt="phcc" height={160} width={215} />/
    </a>
  </div>
  <div
    style={{ float: "left", marginLeft: "1%", marginRight: "5%"  }}
    className="item"
  >
    <a href="https://www.tcs.com">
      <img className='js' src="./images/tcs.png" alt="phcc" height={160} width={215} />/
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "5%" ,marginTop:"2%" }} className="item">
    <a href="https://www.accenture.com/in-en">
      <img className='js' src="./images/acc.png" alt="cl_logo1" height={160} width={215} />
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "1%" ,marginTop:"2%" }} className="item">
    <a href="https://www2.deloitte.com/in">
      <img className='js' src="./images/delo.png" alt="cl_logo2" height={160} width={215} />
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "1%",marginTop:"2%" }} className="item">
    <a href="https://www.tavant.com">
      <img className='js' src="./images/tavant.png" alt="cl_logo3" height={160} width={215} />
    </a>
  </div>
  <div style={{ float: "left", marginLeft: "1%" ,marginTop:"2%"}} className="item">
    <a href="https://www.larsentoubro.com">
      <img className='js' src="./images/lt.png" alt="phcc" height={160} width={215} />/
    </a>
  </div>
  <div
    style={{ float: "left", marginLeft: "1%", marginRight: "5%" ,marginTop:"2%"}}
    className="item"
  >
    <a href="https://www.wipro.com">
      <img className='js' src="./images/wip.png" alt="phcc" height={160} width={215} />/
    </a>
  </div>
</section>

  <section className="sec3">
    <nav>
      <h1 id="c4" style={{ color: "BLACK", fontSize: 40 }}>
        About
      </h1>
      <div className="divl1">
        <img className='iman'
          src="man.jpg"
          alt="Simply Easy Learning"
          width={430}
          height={300}
          animation-name="exam"
        />
      </div>
      <div className="divr1">   
        <p className="p1">
          Hola9 Computer Software Training Institute is on the premier Software
          Training Institute in Bengaluru located in
          Koramangala,indiranagar and vijaynagar aggara.Since our
          inception in the year 2008.We are preparing working professional
          students forthe upcoming project and practical knowledge about the
          software where there are find hurdle.We facilitate the best industry
          practices, theoretical and practical and intense training on real time
          scenario project, under the training of working professional of our
          talented professional working faculty. Besides training, we also
          provide 100% Placement Assistance and support to our students.
        </p>{" "}
        <br />
        <div className="divr2">
          <h3 style={{ float: "right", marginRight: "45%" }}>Follow us:</h3>
          <br />
          <br />
          <ul className="ul1" style={{ marginLeft: "35%" }}>
            <li className="l3">
              {" "}
              <a href="https://www.twitter.com">
                
              <img
        src={require('./images/t.png')}
        alt="Trees"
        height="25" width="25"
      />
              </a>
            </li>
            <li className="l3">
              {" "}
              <a href="https://www.aedin.com/company/hola9-classifieds-india-private-limited">
              <img
        src={require('./images/g.png')}
        alt="Trees"
        height="25" width="25"
      />
              </a>
            </li>
            <li className="l3">
              {" "}
              <a href="https://www.facebook.com/Hola9-Technologies-103386172328157">
              <img
        src={require('./images/f.png')}
        alt="Trees"
        height="25" width="25"
      />
              </a>
            </li>
            <li className="l3">
              {" "}
              <a href="https://www.instagram.com/hola9.official/">
              <img
        src={require('./images/R.png')}
        alt="Trees"
        height="25" width="25"
      />
              </a>
            </li>
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
          <br/> <contact>
        <a href="https://duo.google.com">contact:9078740841</a></contact>
        <progress></progress>
        </div>
        
      </div>
    </nav>
    
  </section>
  {/* <Login/> */}
  
  <progress></progress>
</>

    </div>
  
  );
}


export default HOME

