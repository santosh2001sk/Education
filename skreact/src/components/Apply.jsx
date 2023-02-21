import React from 'react'
import { Link } from 'react-router-dom'
const Apply = () => {
  return (
    <div>
    <>
      <link rel="stylesheet" href="style.css" />
      <title>sk Registration</title>
      <h1 align="center" style={{ color: "red" }}>
        Hola9!!
      </h1>
      <form >
        <table className="bg-violet-500 "
          style={{
            
            marginLeft: 450,
            marginTop: 0,
          }}
        >
          <body>
            <tr>
              <td>
                <h3 style={{ color: "red" }}>
                  <img
                    src="./images/logo.jpg"
                    alt="ty"
                    height="80"
                    width="160"
                  />
                </h3>
              </td>
              <td />
            </tr>
            
            <tr>
              <td>Name :</td>
              <td>
                <input className="border m-1" type="text" name="name" placeholder="Name"/>
              </td>
            </tr>
            <tr>
              <td>Age :</td>
              <td>
                <input className="border m-1" placeholder="Age" type="text" name="age" />
              </td>
            </tr>
            <tr>
              <td>Course:</td>
              <td>
                <select name="course" className="m-1">
                  <option value="Course">Course</option>
                  <option value="java">java</option>
                  <option value="python">python</option>
                  <option value="android">android</option>
                  <option value="javascript">javascript</option>
                  <option value="nodejs">nodejs</option>
                  <option value="datascience">datascience</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Qulification :</td>
              <td>
                <input className="border m-1" placeholder="Qualification" type="text" name="Qulification" />
              </td>
            </tr>
            <tr>
              <td>gender :</td>
              <td>
                <input type="radio" name="gender" defaultValue="male" /> Male
                <input
                  type="radio"
                  name="gender"
                  defaultValue="female"
                />{" "}
                Female
                <input type="radio" name="gender" defaultValue="other" />{" "}
                Other
              </td>
            </tr>
            <tr>
              <td>Email-id :</td>
              <td>
                <input className="border m-1" placeholder="Email-id" type="email" name="email" />
              </td>
            </tr>
            <tr>
              <td>address:</td>
              <td>
                <input className="border m-1" placeholder="Address" type="address" name="address" />
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <input className="border m-1" placeholder="Phone" type="contact" name="phone" />
              </td>
            </tr>
            <tr>
              <td>Resume:</td>
              <td>
                <input type="file" name="resume" />
              </td>
            </tr>
            <tr>
              <td>Introduction:</td>
              <td>
                <input className="border m-1" placeholder="Introduce" type="address" name="address" />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  type="button"
                  style={{
                    backgroundColor: "violet",
                    width: 80,
                    height: 30,
                    textDecoration: "none",
                    marginLeft:50
                  }}
                >
                  <Link to="/">SUBMIT</Link>
                  
                </button>
                <br />{" "}
              </td>
            </tr>
          </body>
        </table>
        <img
          className="duck"
          src="duck.gif"
          alt="ak"
          height={80}
          width={80}
        />
        <a href="https://web.whatsapp.com/">
          <img
            className="wk"
            src="what.png"
            alt="ak"
            height={60}
            width={60}
          />
        </a>
      </form>
    </>
  </div>
  )
}

export default Apply