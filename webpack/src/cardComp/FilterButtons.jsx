import React from "react";
import JsonArray from "./JSONarry";

function FilterButtons() {
  const ary = JsonArray.map((obj) => obj.company);
  const Aset=new Set(ary);
  const A= new Array(Aset);
  console.log(A);



  function getBtn(obj) {
    return (
      <>
        {/* <div style={{backgroundColor:"green",border:"1px solid black",width:"50px",marginLeft:"2px"}}>{obj.company}</div> */}
        <input type="button" value={obj.company}></input>
      </>
    );
  }

  function fillCombo(obj) {
    return <option value={obj.company}>{obj.company}</option>;
  }

  return (
    <>
      <div style={{ display: "flex" }}>{JsonArray.map(getBtn)}</div>
      <br></br>
      <hr></hr>
      <div>
        <select>{JsonArray.map(fillCombo)}</select>
      </div>

      <br></br>
      <hr></hr>
      <div>
        <select>{Aset.forEach((obj)=>
        {
            return(
                <option value={obj}>{obj}</option>
            )
        })}</select>
      </div>
    </>
  );
}

export default FilterButtons;
