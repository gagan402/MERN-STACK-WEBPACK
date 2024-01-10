import React from "react";
import JsonArray from "./JSONarry";
import CardShow from "./CardShow";

function FilterButtons() {
  const set = new Set();
  JsonArray.map((obj) => {
    set.add(obj.company);
  });

  const ary = [...set];
  console.log(set);
  console.log(ary);

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
      <center>
        <div>
          <CompanyCombo data={ary}></CompanyCombo>
        </div>
      </center>
    </>
  );
}

function CompanyCombo({data}) {
  return (
    <>
      <select>
        {data.map((obj) => {
          return (
            <option key={obj} value={obj}>
              {obj}
            </option>
          );
        })}
      </select>
      <CardShow></CardShow>
    </>
  );
}

export default FilterButtons;
