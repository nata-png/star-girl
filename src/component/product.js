// eslint-disable React/prop-types

// src/components/CSSMathProduct.js
import react from "react";

const product =({name,image,description,price,quantity}) =>{
return(
<div>
<h2>{name}</h2>
<img src={image} alt={name}></img>
<p>{description}</p>
<p>price: ${price}</p>
<p>quantity: {quantity}</p>
</div>

);

};
export default product;