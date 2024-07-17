export  default function IfStatement(){let isLoggedIn=false
    let myStyle={
        backgroundColor:"orange",
        fontSize:"20px"
    }
  return(
<>
{
    isLoggedIn ?(<h1>welcome!you are logged in</h1>):(<h1>please log in to access this content</h1>)
}
<h1 style={"myStyle"}></h1>



</>

  )
  
}