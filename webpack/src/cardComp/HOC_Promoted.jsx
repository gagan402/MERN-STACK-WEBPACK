import React from 'react';
import { ProductCard } from './FilterButtonCards';
const HOC_Promoted=()=> {
 
  return (props)=>{
    const styl={
      position:"absolute",
      padding:"3px",
      backgroundColor:"black",
      color:"white"
    }
    return(
      <div style={{margin:"2px",border:"1px solid red"}}>
        <div style={styl}>
         Promoted
        </div>
        <ProductCard {...props}></ProductCard>
      </div>
    )
  }
}

export default HOC_Promoted;