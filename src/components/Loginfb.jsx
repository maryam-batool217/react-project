import React from "react";




function Loginfb(){
    return(
        
      <div className="container-fluid main-container-bg">
      <div className="container">
       
       <div className="row txt-col ">
         <div className="col-lg-5 col-md-4 col-12  d-flex justify-content-center  flex-column">
           <h1 className="text-primary fw-bold fs-1">
             facebook
           </h1>
           <p className="fs-3">
             Connect with friends and the world around you on Facebook
           </p>
         </div> 
         
 
    
         <div className="col-lg-7 col-md-4 col-12  d-flex justify-content-center align-items-center  flex-column">
           <div className="card card-width">
             <div className="card-body ">
               <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email or phone number"/>
               <input type="password" className="form-control mt-3" id="exampleFormControlInput2" placeholder="Password"/>
               <button type="submit" className="btn btn-primary mt-3 w-100 fw-bold">Login</button>
               <p className="text-center text-primary">forgot password?</p>
               <hr/>
               <button type="submit" className="btn btn-success w-100 mt-4 mb-4 fw-bold">Creat new Account</button>
 
             </div>
           </div>
         </div> 
         
         </div>
      </div>
  
     </div>
        
    );
    
   

   
        

  
}
export default Loginfb;