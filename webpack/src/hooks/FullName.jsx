import {useState} from 'react'

function FullName() {
    const [fname,dofname]=useState("");
    const [lname,dolname]=useState("");
    const [fullName,setName]=useState("what's your name?");
    const doUpdateLast=(ggn)=>{
       dolname(ggn.target.value);
    }


    const doJoin=()=>
    {
        const n=fname+" "+lname;
        setName(n);
    }

  return (
    <>
    <div>
        <h1>FULL NAME APP</h1>
        <p>
            First Name :<input type="text" onChange={(event)=>{dofname(event.target.value)}}/>
            <span>{fname}</span>
        </p>
        <p>
            Last Name :<input type="text"  onChange={doUpdateLast}/>
            <span>{lname}</span>
        </p>
        <p>
        <input type="button" value="Join Name" onClick={doJoin}/>
        <input type="text" value={fullName}/>
        </p>

    </div>

    </>
  )
}

export default FullName;