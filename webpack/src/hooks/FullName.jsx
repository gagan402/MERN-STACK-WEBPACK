import {useState} from 'react'

function FullName() {
    const [fname,dofname]=useState("");
    const [lname,dolname]=useState("");

    const doUpdateLast=(ggn)=>{
       dolname(ggn.target.value);
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
            <input type="button" value="JOIN NAME"/>
            <input type="text"/>
        </p>
        
    </div>
    </>
  )
}

export default FullName;