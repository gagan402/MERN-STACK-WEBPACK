import React,{useState} from "react";

function FullNameObj() {

    const [obj,setName]=useState({
        fn:"",
        ln:"",
        full:""
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
      <div className="border border-black w-[500px] mx-auto p-2">
        <h1 className="border border-danger p-1 m-2">FULL NAME APP</h1>
        <p>
          First Name :<input type="text" name="fn" className="border border-success m-2" onChange={doUpdate} />
          <span>{obj.fn}</span>
        </p>
        <p>
          Last Name :<input type="text" name="ln" className="border border-success m-2" onChange={doUpdate} />
          <span>{obj.ln}</span>
        </p>
        <p>
          <input type="button" value="Join Name" className="border border-black bg-orange-700"onClick={doJoin} />
          <input type="text" className="border border-success m-2"  value={obj.full} />
        </p>

        <p>
            {JSON.stringify(obj)}
        </p>
      </div>
    </>
  );
}

export default FullNameObj;
