// src/component/Home.jsx
import React from "react";
import Product from "./product";

const Home = () => {
const product = [
   
 {name: 'dog',
Image:'https://via.placeholder.com/150',                                                             
description:'This is a sample description of a dog',
price: 29.99,
quantity:10,
},
{name:'lion ',
Image:'https://via.placeholder.com/150',
description:'This is a sample description of a lion',
price: 50.99,
quantity:5,
},
{
name: 'rat',
Image: 'https://via.placeholder.com/150',
description: 'This is a sample of a rat',
price: 45.99,
quantity:20,    
},
{
name: 'snake',
Image: 'https://via.placeholder.com/150',
description: 'This is a sample description of a snake',
price: 599.99,
quantity:15,
}
] 
return(
<div>
    <h1>Home Component</h1>
    {product.map((product, index) =>(
<Product
key={index}
name={product.name}
Image={product.Image}
description={product.description}
price={product.price}
quantity={product.quantity}
/>   
    ))}
</div>
);
};
export default Home;
