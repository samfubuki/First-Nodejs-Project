import React from 'react'

//function Greet(){
  //  return <h1>Hello Samarth</h1>
//}
const Greet = props =>{ 
  const {name, position}= props
return ( 
 <div>
     <h1>Hello {name} position {position}</h1>
     
     </div>
   
)

}
export default Greet