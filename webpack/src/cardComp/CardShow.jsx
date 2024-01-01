import React from 'react';
import Card from "./Card";
// import MyImg from "./MyImg";
// import Details from "./Details";
import st1 from "./CardStyle1.module.css";
import st2 from "./CardStyle2.module.css";
import  JsonArray from "./JSONarry";


/*

function ProductCard(props)
{
    return(
        <>
        <div className={`${st1.crd} ${st1.crdfont}`}>
            <p>Company:{props.company}</p>
            <p>Price :{props.price}</p>
            <p>Model: {props.model}</p>
            <p>Owner: {props.owner}</p>
            <p>
                <b>Details</b>
            </p>
            <p>
               { props.children}
            </p>
        </div>
        </>
    )
}
*/

/*
function ProductCard({company,price,model,owner,children,design})
{
    console.log(design);
    return(
        <>
        <div className={`${st1.crd} ${st1.crdfont}`}>
            <p style={design}>Company:{company}</p>
            <p>Price :{price}</p>
            <p>Model: {model}</p>
            <p>Owner: {owner}</p>
            <p style={{backgroundColor:design.bgc,border:design.bod}}>
                <b>Details</b>
            </p> 
            <p>
               {children}
            </p>
        </div>
        </>
    )
}

function CardShow() {
  return (
        <div style={{display:"flex"}  }>
         <ProductCard company="Dell" design={{color:"red",bgc:"yellow",bod:"1px solid black"}} price="50000" model="Inspiron"  owner="gagan">Its Perfect and speed y Model.Must buy it</ProductCard>
         <ProductCard company="Dell" design={{color:"red",bgc:"yellow",bod:"1px solid black"}} price="50000" model="Inspiron"  owner="gagan">Its Perfect and speed y Model.Must buy it</ProductCard>
         <ProductCard company="Dell" design={{color:"red",bgc:"yellow",bod:"1px solid black"}} price="50000" model="Inspiron"  owner="gagan">Its Perfect and speed y Model.Must buy it</ProductCard>
         
         </div>
        
  )
}*/




function ProductCard(props)
{ 
   
    return(
        <>
       
        <div className={`${st1.crd} ${st1.crdfont}`}>
            <img src={props.path} className={st2.pic}/>
            <p>Company:{props.company}</p>
            <p>Price :{props.price}</p>
            <p>Model: {props.model}</p>
            <p>Owner: {props.owner}</p>
            <p>
                <b>Details</b>
            </p> 
            <p>
               {props.children}
            </p>
        </div>
        </>
    )
}

function CardShow() {
    // console.log(JsonArray);
  return (
     
        <div style={{display:"flex","flex-wrap":"wrap"}  }>
         {/* <ProductCard company="Dell"  price="50000" model="Inspiron"  owner="gagan">Its Perfect and speed y Model.Must buy it</ProductCard> */}
         {
            JsonArray.map((obj)=>
            {
                 return (
                    //    <ProductCard company={obj.company}  price={obj.price} model={obj.model}  owner={obj.owner}>{obj.path}</ProductCard>
                    <ProductCard {...obj}  key={obj.owner}>
                        {
                            obj.path
                        }
                    </ProductCard>
                 )
            })
         }
         </div> 
  )
}

export default CardShow; 