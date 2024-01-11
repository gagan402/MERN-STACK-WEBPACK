import React, { useEffect } from "react";

function UseEffectPP() {
  const [fn, setfn] = React.useState("");
  const [ln, setln] = React.useState("");

  /*
  useEffect(()=>{
    console.log("side Effect");
});//runs always when any state changes
*/
  /*
    useEffect(()=>{
        console.log("side Effect");
    },[]);//[] run only once ex data-fetching

    */

  /*
    useEffect(()=>{
        console.log("side Effect");
    },[fn]); //runs only when there is change in fn state
    */

  /*
    useEffect(()=>{
        console.log("side Effect");
    },[fn,ln]);//runs only when there is change in fnand ln  state
*/
 
  useEffect(() => {
    console.log("side Effect");
  }, [ln]);


useEffect(()=>{
    let ref=setInterval(()=>{
        console.log(fn);
    },1000);


    return (()=>{
        clearInterval(ref);
    })
},[fn]);


  console.log("comp re-rendered");

  return (
    <>
      <p>
        First Name:
        <input
          type="text"
          value={fn}
          onChange={(e) => {
            setfn(e.target.value);
          }}
        />
      </p>
      <p>
        Last Name:{" "}
        <input
          type="text"
          value={ln}
          onChange={(e) => {
            setln(e.target.value);
          }}
        />
      </p>
      <p> Full Name: {fn + " " + ln}</p>
    </>
  );
}

export default UseEffectPP;
