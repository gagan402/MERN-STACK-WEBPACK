import React,{useState}from 'react'
import withCounter from "./HOCwithCounter";


function HOCclickcounter(prop) {

  return (
    <>
      <button onClick={prop.increment}>{prop.name}</button>
    
    </>
  )
}

export default  withCounter(HOCclickcounter);