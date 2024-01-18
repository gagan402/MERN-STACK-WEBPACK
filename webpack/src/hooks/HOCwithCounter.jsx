import {useState} from "react";

const  withCounter=(OriginalComponent)=>{

//perform some logic on original component and return a new component
      const NewComponent=(prop)=>{
        const  [count,setCount]=useState(0);
        const inc=()=>{
           setCount((count)=>count+1);
        }
        
        return(
            <div>
                {count}
                <OriginalComponent increment={inc} {...prop}>  </OriginalComponent>
            </div>
        )
      }



      return NewComponent;
}



export default withCounter;