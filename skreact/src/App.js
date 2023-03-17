import "./App.css";
import "./components/Style.css";
import "react-icons/fa";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tut from "./components/Tut";
import News from "./components/News.jsx"
// import Search from "./components/Search";
// import Story from "./components/Story";
// import Pagination  from "./components/Pagination";
// import Context  from "./components/Context.jsx";
// import { useContext } from "react";
import {  Routes,  Route, BrowserRouter } from "react-router-dom";
import Apply from "./components/Apply";
import Training from "./components/Training.jsx"
// import { FaGithubSquare } from 'react-icons/fa';
import Review from './components2/Review';
import Notify from './components1/Notify';
import Front from './components3/Front';
// import { FormControl } from "react-bootstrap";

// import { AppContext } from "./components/Context.jsx";
// import { useGlobalContext } from "./components/Context.jsx";
function App() {
  // const data = useGlobalContext();
  return (
    <>
   <BrowserRouter>
   {/* <div>welcome{data}</div> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tut" element={<Tut/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/review" element={<Review/>} />
        <Route path="/notify" element={<Notify/>} />
        <Route path="/subjects" element={<Front/>} />
       {/* <Route path="/search" element={<Search/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/pagination" element={<Pagination/>}/> */}
        {/* <Route path="/context" element={<Context/>}/> */}
        {/* <Search/>
        <Story/>
        <Pagination/> */}
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
