import './style.css'
import productImage from'../assets/images/dog.jpg'
export default  function Product(){
    let productStyle={
       height:'400px',
       backgroundColor:"purple",
       width:'50%',
    }
   
return(
    <>
    <div style={{margin:"40px",fontSize:"3rem"}}> 
    
        our featured Product
    </div>
    <div className="product">product one</div>
    <img src={productImage}></img>
    </>
)

}