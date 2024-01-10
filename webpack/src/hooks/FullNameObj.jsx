import React,{useState} from "react";

function FullNameObj() {

    const [obj,setName]=useState({
        fn:"",
        ln:"",
        full:"what"
    });
   
     function doUpdate(event)
     {
            console.log(event.target);
            // let n=event.target.name;
            // let v=event.target.value;
 
        const {name,value}=event.target;
         setName({...obj,[name]:value});
     }


    function doJoin(){
        setName({...obj,["full"]:obj.fn+" "+obj.ln});
    
    }

  return (
    // name of feild should be same as property of object
    <>
      <div>
        <h1>FULL NAME APP</h1>
        <p>
          First Name :<input type="text" name="fn" onChange={doUpdate} />
          <span>{obj.fn}</span>
        </p>
        <p>
          Last Name :<input type="text" name="ln" onChange={doUpdate} />
          <span>{obj.ln}</span>
        </p>
        <p>
          <input type="button" value="Join Name" onClick={doJoin} />
          <input type="text" value={obj.full} />
        </p>

        <p>
            {JSON.stringify(obj)}
        </p>
      </div>
    </>
  );
}

export default FullNameObj;
