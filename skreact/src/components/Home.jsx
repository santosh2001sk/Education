import React, { useState, useEffect } from "react";
import {
  FaAlignJustify,
  FaSistrix,
  FaHome,
  FaBuffer,
  FaPhoneAlt,
  FaRegFileVideo,
  FaBookReader,
  FaMedapps,
} from "react-icons/fa";
// import Ceo from "./images/ceo.jpg";
// import Takla from "./images/cfo.jpg";
import "./Style.css";
import "./Signup";
import "./Login";

import { Link } from "react-router-dom";
// import Tut from "./Tut";
// import Login from './Login'

const HOME = (props, { Children }) => {
  const [open, setOpen] = useState(true);

  const [count, setCount] = useState(1);
  const [unt, setunt] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 0);
    }, 60000);
  });
  useEffect(() => {
    setTimeout(() => {
      setunt((unt) => unt + 0);
    }, 1000);
  });

  const [tg, tsetg] = useState();
  const [tgc, tsetgc] = useState();
  const background = "rgb(164, 228, 211)";
  const [tbg, tsetbg] = useState();
  const [bg, setbg] = useState(background);
  const [nbg, nsetbg] = useState();

  // const [flag, setFlag] = useState();

  const handleClick = () => {
    // setFlag(true);

    let newbg = "black";
    setbg(newbg);
    let newnbg = "black";
    nsetbg(newnbg);
    let newtbg = "aliceblue";
    tsetbg(newtbg);
    let newtg = "blue";
    tsetg(newtg);
    let newtbgc = "aliceblue";
    tsetgc(newtbgc);
    document.getElementById("sec1").style.background = "black";
    // window.alert("this is your dark mode");
  };

  const [dc, tc] = useState();

  const [dt, dtc] = useState();
  const [dh, dth] = useState();
  const Shutoff = () => {
    let dthh = "HEY USER DO YOU WANT TO KNOW SOMETHING";
    dth(dthh);
    let dttc = Date();
    dtc(dttc);
    let dtcc = "blue";
    tc(dtcc);
  };

  const Soff = () => {
    document.getElementById("demo").style.innerHTML = "";
  };
  const Click = () => {
    document.getElementById("nav-1").style.background = "aliceblue";
    document.getElementById("ali").style.background = "aliceblue";
    document.getElementById("tk").style.background = "white";
    document.getElementById("tk").style.color = "blue";
    document.getElementById("sj").style.color = "red";
    document.getElementById("tak").src = "./images/cfo.gif";
    document.getElementById("divbod").style.background = "aliceblue";
    // window.alert("this is your light mode");
    document.getElementById("demo").innerHTML = "Date : " + Date();
    document.getElementById("demo").style.color = "black";
  };

  const refresh = () => {
    window.location.reload(true);
  };
  const [hed, ing] = useState();

  const Ck = () => {
    let hing = "";
    ing(hing);
  };
  // const mOver = () => {
  //   document.getElementById("tak").src = "./images/sundar.jpg";
  // };

  // const mOut = () => {
  //   document.getElementById("tak").src = "./images/ceo.jpg";
  // };

  return (
    <div className="bg-lime-500">
      <>
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="Style.css" />
        <title>Home </title>
        <nav
          id="nav-1"
          style={{ backgroundColor: nbg }}
          className="bg-white-600 border-b fixed top-0 left-0 w-full h-16 z-10 flex justify-between items-center"
        >
          <div className="flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="hover:bg-gray-400"
            >
              <span className="flex h-15 mt-2 p-2">
                <FaAlignJustify size="20px " />
              </span>
            </button>
            <a href onMouseEnter={Shutoff} onMouseLeave={Soff}>
              {" "}
              <img
                id="img"
                src="./images/logo.jpg"
                alt="gh"
                className="h-10 w-15 mt-3 bg-white-600 "
              />
            </a>
            <div className="flex items-center justify-center mx-20 ">
              <input
                className="seach bg-green-200 border-b flex-1"
                type="Search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="hover:bg-gray-400 h-7">
                <FaSistrix size="20px " />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-0">
            <button
              className="l1a"
              onClick={handleClick}
              onDoubleClick={refresh}
            >
              DARK
            </button>
            <button className="l1" onClick={Click} onDoubleClick={refresh}>
              LIGHT
            </button>
          </div>
          <div className="flex items-center p-3 gap-x-2">
            <img src="images.png" alt="gh" className="h-10 w-15 mt-2 " />
            <button className="aq" type="button">
              <Link to="/login">Login</Link>
            </button>
            <button className=" bg-violet-900 hover:bg-purple-400 w-16 h-10 rounded-lg flex">
              <Link to="/apply" style={{ color: "white" }}>
                Apply Now
              </Link>
            </button>
          </div>
        </nav>
        <nav className=" mt-20 border-b fixed top-0 left-0 w-full  z-10 items-center">
          <h3 id="tk" style={{ backgroundColor: tbg, color: tg }}>
            {" "}
            We are offering Online &amp; Offline and Corporate Training Courses.
            For more inform please contact us - 9078740841{" "}
            <select className="rp" name="languages">
              <option value="Course">Courses</option>
              <option value="java">
                <Link to="/apply">java</Link>
              </option>
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
            <select className="rt" name="branch" placeholder="Branches">
              <option value="Course">Our Branches</option>
              <option value="java">Kfc</option>
              <option value="python">indiranagar</option>
              <option value="android">Kalyani</option>
              <option value="javascript">Ejjipura</option>
              <option value="nodejs">Agara</option>
              <option value="datascience">vijaynagar</option>
            </select>{" "}
          </h3>
        </nav>
        <aside
          id="ali"
          className="overflow-hidden border-r h-full fixed top-0 left mt-20 px-5 pt-5"
          style={{
            backgroundColor: nbg,
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
          <Link to="/news">
            <button className="mt-2  flex items-center justify-center gap-x-5 py-2 px-2 w-90 rounded-lg hover:bg-gray-300">
              <FaMedapps className="text-slate-700" />
              NOTIFICATION
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
        <section>
          <div id="divbod" style={{ backgroundColor: bg }}>
            <section
              id="sec1"
              style={{
                marginLeft: open ? 200 : 60,
                transition: "0.2s",
              }}
            >
              {Children}

              <br />

              <h3 id="sco">
                {count} minutes {unt} Second
              </h3>
              <p id="demo">{dt}</p>
              <h1 id="sj" style={{ color: tgc, dc }} onClick={Ck}>
                {dh}
                {hed}
              </h1>
              {/* <iframe
            id="frame"
            width="100"
            height="150"
            src="https://www.youtube.com/embed/p09i_hoFdd0"
            title="YouTube video player"
            frameborder="0"
            allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}

              <div className="div1">
                <img
                  id="tak"
                  src="./images/java.jpg"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/python.jpg"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/clang.png"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/full.png"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/net.png"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/sql.jpg"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/react.png"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <img
                  id="tak"
                  src="./images/php.png"
                  alt="ak"
                  height={100}
                  width={100}
                  // onMouseOver={mOver}
                  // onMouseOut={mOut}
                />
                <h4 id="H4">{props.title}</h4>
              </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <img
              className="duck z-10"
              src="duck.gif"
              alt="ak"
              height={80}
              width={80}
            />
            <a href="https://web.whatsapp.com/">
              <img
                className="wk z-10"
                src="what.png"
                alt="ak"
                height={50}
                width={50}
              />
            </a>
            <section
              style={{
                marginLeft: open ? 200 : 110,
                transition: "0.2s",
              }}
            >
              <div
                id="deceo"
                className="grid md:grid-cols-4 gap-5"
                style={{
                  marginRight: open ? 80 : 200,
                  transition: "0.2s",
                }}
              >
                <a href="https://en.wikipedia.org/wiki/Sundar_Pichai">
                  <div className="sundar">
                    <div className="sundar1">
                      <img
                        id="sun"
                        src="./images/sundar.jpg"
                        alt="ak"
                        height={400}
                        width={200}
                      />
                    </div>
                    <div className="content1 w-50">
                      <h3>#Sundar Pichai</h3>
                      <h5>(CEO of google)</h5>
                      <p style={{ fontcolor: "red" }}>Born: 10 June 1972</p>
                      <p>
                        Be open, be impatient, <br></br>be hopeful. If you can
                        do
                        <br></br>
                        history will remember the <br></br>Class of 2020 not for{" "}
                        <br></br>
                        lost, but for what you<br></br>. You have the chance to{" "}
                        <br></br>
                        everything. I am optimistic.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Satya_Nadella">
                  <div className="ceo ">
                    <div className="ceo1">
                      <img
                        id="ceo1"
                        src="./images/ceo.jpg"
                        alt="ak"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="content2 w-50">
                      <h3>#Satya nadela</h3>
                      <h5>(CEO of microsoft)</h5>
                      <p style={{ fontcolor: "red" }}>Born: 10 June 1972</p>
                      <p>
                        Be open, be impatient, <br></br>be hopeful. If you can
                        do
                        <br></br>
                        history will remember <br></br>Class of 2020 not for{" "}
                        <br></br>
                        lost, but for what you<br></br>. You have the chance to{" "}
                        <br></br>
                        everything. I am optimistic.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Shantanu_Narayen">
                  <div className="cfo">
                    <div className="cfo1">
                      <img
                        id="co2"
                        src="./images/cfo.jpg"
                        alt="ak"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="content3 w-50">
                      <h3>#Rabort dyb</h3>
                      <h5>(CEO of adode)</h5>
                      <p style={{ fontcolor: "red" }}>Born: 10 June 1972</p>
                      <p>
                        Be open, be impatient, <br></br>be hopeful. If you can
                        do
                        <br></br>
                        history will remember <br></br>Class of 2020 not for{" "}
                        <br></br>
                        lost, but for what you<br></br>. You have the chance to{" "}
                        <br></br>
                        everything. I am optimistic.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Ratan_Tata">
                  <div className="tata">
                    <div className="tata1">
                      <img
                        id="tat"
                        src="./images/tata.jpg"
                        alt="ak"
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="content4 w-50">
                      <h3>#Ratan Tata</h3>
                      <h5>(TATA group)</h5>
                      <p style={{ fontcolor: "red" }}>Born: 10 June 1972</p>
                      <p>
                        Be open, be impatient, <br></br>be hopeful. If you can
                        do
                        <br></br>
                        history will remember <br></br>Class of 2020 not for{" "}
                        <br></br>
                        lost, but for what you<br></br>. You have the chance to{" "}
                        <br></br>
                        everything. I am optimistic.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </section>
            <section
              className="sec2"
              style={{
                marginLeft: open ? 200 : 60,
                transition: "0.2s",
              }}
            >
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
            <section
              className="sec4 "
              style={{
                marginLeft: open ? 200 : 60,
                transition: "0.2s",
              }}
            >
              <h1 id="c4" style={{ color: "rgb(228, 219, 219)", fontSize: 40 }}>
                TOP Companies who Hire Our students:-
              </h1>
              <br></br>
              <div className="grid md:grid-cols-5 gap-1">
                <div
                  style={{ float: "left", marginLeft: "4%" }}
                  className="item"
                >
                  <a href="https://www.infosys.com">
                    <img
                      className="js "
                      src="./images/info.jpg"
                      alt="cl_logo1"
                      height={160}
                      width={215}
                    />
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%" }}
                  className="item"
                >
                  <a href="https://dxc.com/in/en">
                    <img
                      className="js"
                      src="./images/dxc.jpg"
                      alt="cl_logo2"
                      height={160}
                      width={215}
                    />
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%" }}
                  className="item"
                >
                  <a href="https://www.phcc.gov.qa">
                    <img
                      className="js"
                      src="./images/phc.jpg"
                      alt="phcc"
                      height={160}
                      width={215}
                    />
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%" }}
                  className="item"
                >
                  <a href="https://www.capgemini.com">
                    <img
                      className="js"
                      src="./images/cap.png"
                      alt="phcc"
                      height={160}
                      width={215}
                    />
                    /
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%", marginRight: "5%" }}
                  className="item"
                >
                  <a href="https://www.tcs.com">
                    <img
                      className="js"
                      src="./images/tcs.png"
                      alt="phcc"
                      height={160}
                      width={215}
                    />
                    /
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "5%", marginTop: "2%" }}
                  className="item"
                >
                  <a href="https://www.accenture.com/in-en">
                    <img
                      className="js"
                      src="./images/acc.png"
                      alt="cl_logo1"
                      height={160}
                      width={215}
                    />
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%", marginTop: "2%" }}
                  className="item"
                >
                  <a href="https://www2.deloitte.com/in">
                    <img
                      className="js"
                      src="./images/delo.png"
                      alt="cl_logo2"
                      height={160}
                      width={215}
                    />
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%", marginTop: "2%" }}
                  className="item"
                >
                  <a href="https://www.tavant.com">
                    <img
                      className="js"
                      src="./images/tavant.png"
                      alt="cl_logo3"
                      height={160}
                      width={215}
                    />
                  </a>
                </div>
                <div
                  style={{ float: "left", marginLeft: "1%", marginTop: "2%" }}
                  className="item"
                >
                  <a href="https://www.larsentoubro.com">
                    <img
                      className="js"
                      src="./images/lt.png"
                      alt="phcc"
                      height={160}
                      width={215}
                    />
                    /
                  </a>
                </div>
                <div
                  style={{
                    float: "left",
                    marginLeft: "1%",
                    marginRight: "5%",
                    marginTop: "2%",
                  }}
                  className="item"
                >
                  <a href="https://www.wipro.com">
                    <img
                      className="js"
                      src="./images/wip.png"
                      alt="phcc"
                      height={160}
                      width={215}
                    />
                    /
                  </a>
                </div>
              </div>
            </section>

            <section
              className="sec3"
              style={{
                marginLeft: open ? 200 : 60,
                transition: "0.2s",
              }}
            >
              <nav>
                <h1 id="c4" style={{ color: "BLACK", fontSize: 40 }}>
                  About
                </h1>
                <div
                  className="divl1"
                  style={{
                    marginLeft: open ? 6 : 8,
                    transition: "0.2s",
                  }}
                >
                  <img
                    className="iman"
                    src="man.jpg"
                    alt="Simply Easy Learning"
                    width={400}
                    height={200}
                    animation-name="exam"
                  />
                  <div
                    style={{
                      float: "left",
                    }}
                  >
                    <h3>
                      <b>
                        <ins>MAIN</ins>
                      </b>
                    </h3>
                    <br />
                    Term&condition
                    <br />
                    Privacy Policy
                  </div>
                  <div
                    style={{
                      float: "right",
                    }}
                  >
                    <h3>
                      <b>
                        <ins>CONTACT US:</ins>
                      </b>
                    </h3>
                    <br />
                    <contact>
                      <p>Email:adc@gmail.com</p>
                      <a href="https://duo.google.com">Telephone:9078740841</a>
                    </contact>
                  </div>
                </div>
                <div className="divr1">
                  <p className="p1">
                    Hola9 Computer Software Training Institute is on the premier
                    Software Training Institute in Bengaluru located in
                    Koramangala,indiranagar and vijaynagar aggara.Since our
                    inception in the year 2008.We are preparing working
                    professional students forthe upcoming project and practical
                    knowledge about the software where there are find hurdle.We
                    facilitate the best industry practices, theoretical and
                    practical and intense training on real time scenario
                    project, under the training of working professional of our
                    talented professional working faculty. Besides training, we
                    also provide 100% Placement Assistance and support to our
                    students.
                  </p>{" "}
                  <br />
                  <div className="divr2">
                    <h3 style={{ float: "right", marginRight: "45%" }}>
                      <h3>
                        <b>
                          <ins>Follow US:</ins>
                        </b>
                      </h3>
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
                            src={"./images/R.png"}
                            alt="Trees"
                            height="25"
                            width="25"
                          />
                        </a>
                      </li>
                      <li>
                        <div>
                          <h6 className="text-red-500 mx-2">
                            2022 @Hola9 classifieds private ltd.
                          </h6>
                        </div>
                      </li>
                      {/* <img src="./images/apple.png" alt="ty" height={55} width={75}/ > */}
                    </ul>
                  </div>
                  <div className="divl2">
                    <address id="c5" style={{ textDecoration: "burlywood" }}>
                      <a href="https://goo.gl/maps/R72sBiGJ57gWXvW59">
                        <h3>
                          <b>
                            <ins>ADDRESS</ins>
                          </b>
                        </h3>
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
                  </div>
                </div>
              </nav>
            </section> 
          </div>
        </section>
        {/* <Login/>    <Tut/> */}
      </>
    </div>
  );
};

export default HOME;
