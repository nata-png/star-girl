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
  




import React from "react";
import Counter from "./components/counter";
import './App.css';
import Home from "./components/Home";
import Example from './components/Hooks';
const App = () => {
  return (
    <div className="App">
      <Home/>
      <Example/>
      <Counter/>

    </div>
  );
};
export default App