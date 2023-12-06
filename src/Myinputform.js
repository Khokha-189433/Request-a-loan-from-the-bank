export default function  Myinputforms({loaninputnam ,functionset  })
{
  return (<>
             <lebal >UserNmae :</lebal>   
           <input type="text" placeholder='UserNmae'  value={loaninputnam}
            onChange={(event) =>{
               functionset(event.target.value) 
           }}
            />
  
  </>)
}