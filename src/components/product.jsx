// import './style.css'
// import productImage from'../assets/images/dog.jpg'
// export default  function Product(){
//     let productStyle={
//        height:'150px',
//        backgroundColor:"purple",
//        width:'100%',
//     }
   
// return(
//     <>
//     <div style={{margin:"400px",fontSize:"4rem"}}> 
    
//         our featured Product
//     </div>
//     <div className="product">product one</div>
//     <img style={{width: "150px"}} src={productImage}></img>
//     </>
// )

// }
import React from"react";

const product = ({Name,image,description,price,quantity}) =>{
    return(
        <div>
<h2>{Name}</h2>
<img src={image} alt={Name}/>
<p>{description}</p>
<p>price: ${price}</p>
<p>quantity:  {quantity}</p>


        </div>
    );
};
export default product;