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
  



export default App
import React from "react";
import Counter from "./Counter";
import './App.css';
import Home from "./component/Home";
import Example from './component/Hooks';
const App = () => {
  return (
    <div className="App">
      <Home/>
      <Example/>
      <Counter/>

    </div>
  );
};