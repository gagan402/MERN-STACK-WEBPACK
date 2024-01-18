import React,{useState,useEffect,useRef} from 'react'

function UseREF() {
    const [myData,setMyData]=useState("");
    // const [c,countData]=useState(0);

    // const c=useRef(10);
    // console.log(c);
    // useEffect(()=>
    // {
    //     // countData(c+1);

    //     c.current=c.current +1;
    // });

    const inp=useRef("");


    const ggn=()=>{
      console.log(inp.current);
      inp.current.style.backgroundColor="pink";
      inp.current.focus();
    }

  return (
    <>
     <center> 
        <input type="text"
        ref={inp}
        value={myData}
        onChange={
            (e)=>setMyData(e.target.value)
        }
        />
        <br></br>
        {/* <p>The number of times render: {c.current}</p> */}
        <button onClick={ggn}>Submit</button>
     </center>
    </>
  )
}

export default UseREF;