import {useState} from "react";
function Counter() {
  const [hcount,doUpdateCount] = useState(100);//1 is inital value of hcount
  
  console.log("render-1");

  const doIncrement = () => {
     doUpdateCount(hcount+1);
       
  };

  const doDcrement=()=>{
    doUpdateCount(hcount-1);
  }

  const  doInc3=()=>{
    doUpdateCount((hcount)=>hcount+1);//updates actual hcount variable
    doUpdateCount((hcount)=>hcount+1);
    doUpdateCount((hcount)=>hcount+1);

    // doUpdateCount(hcount+1);
  }
  
  return (
    <>
      <div>
        <input type="button" onClick={doIncrement} value="INCREASE" />
        <input type="button" onClick={doDcrement} value="DECREASE"/>
        <input type="button" onClick={doInc3} value="Inc by 3"/>
        <div> {hcount}</div>
      </div>
    </>
  );
}

export default Counter;
