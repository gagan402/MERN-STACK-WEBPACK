import React,{useState,useEffect} from 'react'

function Pusefeft() {
    const [fn,setfn]=useState("");
    const [ln,setln]=useState("");
    
/*
    useEffect(()=>{
        console.log("Side Effect");
    },[]);

    //it runs on every re-rendered
*/
/*
    useEffect(()=>{
        console.log("Side Effect");
    },[]);//[] it will run once
    console.log("comp re-rendered");
*/

    
    useEffect(()=>{
        console.log("Side Effect");
    },[fn]);

    //it runs on fn changes
    //ocassional side-effect or with filter





  return (
    <>
    <p>First Name:<input type="text" value={fn} onChange={(e)=>{
        setfn(e.target.value);
    }}/></p>
    <p>Last Name: <input type="text" value={ln} onChange={(e)=>{
        setln(e.target.value);
    }}/></p>
    <p> Full Name: {fn+" "+ln}</p>
    </>
  )
}

export default Pusefeft;