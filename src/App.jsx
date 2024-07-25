// import Myfirstcomponent from './components/my'
// import Footer from './components/footer'
// import Product from './components/product'
// import IfStatement from './components/ifStatement'
// function App(){
 

//   return (
//     <>
//     <h1>getting started with react</h1>
//     <IfStatement />
//     <Myfirstcomponent/>
//     <Product></Product>
//     <Footer/>
     
//     </>
//   )
// }
  



import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from './components/about';
import contact from './components/contact';
import Navbar from "./components/NavBar";
import React from "react";
import Counter from "./components/counter";
import './App.css';
import Home from "./components/Home";
import Example from './components/Hooks';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        </Routes>
      </div>
    </Router>
  //   <div className="App">
  //     <Home/>
  //     <Example/>
  //     <Counter/>

  // //   </div>
  );
};
export default App;
