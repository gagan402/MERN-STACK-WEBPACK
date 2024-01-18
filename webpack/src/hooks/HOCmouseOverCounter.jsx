import React,{useState} from 'react'
import withCounter from "./HOCwithCounter";

function HOCmouseOverCounter(prop) {
  
  return (
    <>
       <button onMouseOver={prop.increment}>{prop.name}</button>
    </>
  )
}

export default withCounter(HOCmouseOverCounter);