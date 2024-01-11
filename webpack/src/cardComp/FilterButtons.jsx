import React, { useState } from "react";
import JsonArray from "./JSONarry";
// import CardShow from "./CardShow";
import FilterButtonCards from "./FilterButtonCards";

function FilterButtons() {
  const [AryF, setAryF] = useState(JsonArray);

  const set = new Set();
  JsonArray.map((obj) => {
    set.add(obj.company);
  });

  const ary = [...set, "all"];
  console.log(set);
  console.log(ary);

  function doFilter(e) {
    const opt = e.target.value;
    if (opt == "all") {
      setAryF(JsonArray);
    } else {
      setAryF(
        JsonArray.filter((obj) => {
          if (obj.company == opt) {
            return obj;
          }
        })
      );
    }
  }
  // function getBtn(obj) {
  //   return (
  //     <>
  //       {/* <div style={{backgroundColor:"green",border:"1px solid black",width:"50px",marginLeft:"2px"}}>{obj.company}</div> */}
  //       <input type="button" value={obj.company}></input>
  //     </>
  //   );
  // }

  // function fillCombo(obj) {
  //   return <option value={obj.company}>{obj.company}</option>;
  // }

  return (
    // <>
    //   <div style={{ display: "flex" }}>{JsonArray.map(getBtn)}</div>
    //   <br></br>
    //   <hr></hr>
    //   <div>
    //     <select>{JsonArray.map(fillCombo)}</select>
    //   </div>

    //   <br></br>
    //   <hr></hr>
    <>
      <center>
        <div>
          <CompanyCombo data={ary} filterFx={doFilter}></CompanyCombo>
          <FilterButtonCards data={AryF}></FilterButtonCards>
        </div>
      </center>
    </>
  );
}

function CompanyCombo(prop) {
  return (
    <>
      {/* onChange={(e)=>prop.filterFx(e.target.value)} */}
      <select onChange={prop.filterFx}>
        {prop.data.map((obj) => {
          return (
            <option key={obj} value={obj}>
              {obj}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FilterButtons;
