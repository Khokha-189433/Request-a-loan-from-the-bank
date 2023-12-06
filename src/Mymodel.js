import'./Styleform.css';
export default function Mymodel({isvisable , errorMessige="null"})
{ 
    if(isvisable === true )
    {
        return(
            <div className="Models" >  
                <div className="model-contene"> 
                  {/* <h1> welcom to my wibesite</h1> */}
                   <h2 className="lebelmodel" style={{color: errorMessige!= "null" ?"red" :"green" }}>{errorMessige != "null" ? errorMessige:"THE FORM HAS BEEN SUBMITTED SUCCESSFULLY"} </h2>  
                 
                </div>
            </div>
        )
    }
else { 
    return  (<> </>);
     }
}