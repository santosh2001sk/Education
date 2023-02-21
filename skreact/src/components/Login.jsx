import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setvalues] = useState({
    uname: "",
    password: "",
  });
  const [isSubmit, setisSubmit] = useState(false);
  const [formerror, setError] = useState({});
  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const handleSubmit = (e) => {
    window.alert("login successfully");
    e.preventDefault();
    setError(validation(values));
    setisSubmit(true);
  };
  useEffect(() => {
    console.log(formerror);
    if (Object.keys(formerror).length === 0 && isSubmit) {
      console.log(values);
    }
  });
  const validation = (values) => {
    const errors = {};

    if (!values.uname) {
      errors.name = "*Name required";
    } else if (!values.uname.length < 5) {
      errors.name = "*Name must be long";
    }

    if (!values.password) {
      errors.password = "*password required";
    } else if (!values.password.length < 7) {
      errors.password = "*password must be long";
    }
    return errors;
  };

  return (
    <div>
      <>
        <link rel="stylesheet" href="style.css" />
        <title>Sk!!</title>
        <h1 align="center" style={{ color: "RED" }}>
          <img src="./images/logo.jpg" alt="ty" height="80" width="160" />
        </h1>
        <form id="fr" onSubmit={handleSubmit}>
          <table id="ta">
            <br></br>
            <img
              id="mano"
              src="./images/images.png"
              alt="tk"
              height="160"
              width="160"
            />
            <body id="bo">
              <tr>
                <td />
              </tr>
              <tr>
                <td>
                  <h3 style={{ color: "red" }}>Hola9_Login..</h3>
                  <br></br>
                </td>
                <td />
              </tr>
              <tr>
                <td style={{ color: "BLACK" }}>UserName :</td>
                <td>
                  <input  className="border m-2"
                    type="text"
                    placeholder="Enter Username"
                    value={values.uname}
                    name="uname"
                    onChange={handlechange}
                  />
                </td>
                <p style={{ color: "red" }}>{formerror.name}</p>
                <br></br>
              </tr>
              <tr>
                <td style={{ color: "BLACK" }}>Password :</td>
                <td>
                  <input className="m-2 border"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handlechange}
                  />

                  <br></br>
                </td>{" "}
                <p style={{ color: "red" }}>{formerror.password}</p>
                <br />
              </tr>
              <tr>
                <br></br>
                <td>
                  <br></br>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "lightgreen",
                      width: 80,
                      height: 30,
                      textDecoration: "none",
                    }}
                  >login
                    {/* <Link to="/" type="submit">
                      Login
                    </Link> */}
                  </button>
                  <br />
                </td>
                <td>
                  <br></br>
                  <Link to="/signup" style={{ color: "red" }}>
                    Registration?
                  </Link>
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
  );
};
export default Login;
