import React from "react";
import mobile1 from  '../images/mobile1.png'
 import mobile2 from  '../images/mobile2.png'
 import mobile3 from  '../images/mobile3.png'
 import Mobile from  '../images/Mobile.png'
 import Topoffers from  '../images/Topoffers.png'
 import Chocolate_Beauty from  '../images/chocolate Beauty.png'
 import shopping from  '../images/shopping.png'

 function Cards(){
    return(
        <>
        <div className="row mt-4">
              <div className="col-md-10 ">
                   <div className="row">
                     <h2>Best Mobiles</h2>
                   </div>
                        <div className='col-md-1 mt-3'>
                        <img src={Mobile}/>  
                        <pre> Mobile </pre>
                        </div>

                        <div className="col-md-2">
                        <img src={mobile2}/>
                        <p className="mt-3" >Samsung S22 5G<br></br><b>incl of offers</b></p>
                        </div>

                        <div className="col-md-2">
                        <img src={mobile3}/>
                        <p className="mt-3" >Realme 11 Pro 5G<br></br><b>incl of offers</b></p>
                        </div>

                        <div className="col-md-2">
                        <img src={Mobile}/>
                        <p className="mt-3" >Redmi 12<br></br><b>incl of offers</b></p>
                        </div>

                        <div className="row mt-4">
                        <div className="col-md-2">
                           <img src={mobile1}/>
                            <p className="mt-3" >Google Pixel 7a<br></br><b>incl of offers</b></p>
                         </div>

                        <div className="col-md-2">
                        <img src={shopping}/>
                        </div>



                        <div className="col-md-2">
                        <img src={Chocolate_Beauty}/>
                        <p className="mt-3" >Realme 11X 5g<br></br><b>incl of offers</b></p>
                        </div>
                        
                   </div>
              </div>
            
        </div>
        </>
         );
        }
    export default Cards;
    