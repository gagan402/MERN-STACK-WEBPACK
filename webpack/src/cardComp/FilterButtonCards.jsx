import React from "react";

import Card from "./Card";
import st1 from "./CardStyle1.module.css";
import st2 from "./CardStyle2.module.css";
import JsonArray from "./JSONarry";
function ProductCard(props) {
    return (
      <>
        <div className={`${st1.crd} ${st1.crdfont}`}>
          <img src={props.path} className={st2.pic} />
          <p>Company:{props.company}</p>
          <p>Price :{props.price}</p>
          <p>Model: {props.model}</p>
          <p>Owner: {props.owner}</p>
          <p>
            <b>Details</b>
          </p>
          <p>{props.children}</p>
        </div>
      </>
    );
  }

function FilterButtonCards({data}) {


    function genCard(obj)
    {
        return (
            //    <ProductCard company={obj.company}  price={obj.price} model={obj.model}  owner={obj.owner}>{obj.path}</ProductCard>
            <ProductCard {...obj}  key={obj.owner}>
                {
                    obj.path
                }
            </ProductCard>
         )

    }

  
  
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* <ProductCard company="Dell"  price="50000" model="Inspiron"  owner="gagan">Its Perfect and speed y Model.Must buy it</ProductCard> */}
          {data.map(genCard)}
        </div>
      </>
    );
  


}

export default FilterButtonCards;
