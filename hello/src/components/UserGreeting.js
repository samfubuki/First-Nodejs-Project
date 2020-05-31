import React, {Component} from 'react'

class UserGreeting extends Component{

   constructor(props){
       super(props)

       this.state = {
           isLoggedIn: true
       }
   }

    render()
    {
       return(
           this.state.isLoggedIn ? (
           <div>Welcome Samarth</div> 
        
              )   : (
           <div>Welcome Guest</div>
              )
       )
      //  return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //    return (
        //        <div>
         //          Welcome Samarth
       //         </div>
        //    )
       //  } 
       //  else {
        //     return (
        //       <div>
        //           Welcome Guest
        //       </div>
        //     )
        // }
        //return (
        //  <div> 
        //  <div>Welcome Samarth</div>
        //  <div>Welcome Guest</div>
       //   </div>
       // )
    }
}

export default UserGreeting