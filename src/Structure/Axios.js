
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function Axios() {

const [img, setImg] = useState()


useEffect(handalClick,[])

 function handalClick(){
 axios.get('https://dog.ceo/api/breeds/image/random')
   .then((res)=> setImg(res.data.message))

}


// async function handalClick(){
//   const res= await axios.get('https://dog.ceo/api/breeds/image/random')
//     setImg(res.data.message)
// }


    return (
        <div className="AXIOS">

        <h1>I am performing through Axios Method</h1>
      
       <img src={img} width='300' height='300'/><br></br>
<button onClick={handalClick} >Click Me</button> 

       
        </div>
    )
    }