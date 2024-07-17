import Header from '/header';
export default function Footer ()
{let copyRight = "STARLET TECH"
let currentDate= new Date()
const myStyle ={
    fontsize :"30px",
    backgroundColour :"pink"
}
let currentYear =currentDate.getFullYear()

    return(
        <>
        <div style ={myStyle}>{copyRight}{currentYear} all right reserved
       
        </div>
        <Header/>
        
      </>
       
        
    )
}