import React from 'react'
//WaY1
/*
function Item({carry,importance,name})
{
    let ans=name;
    if(importance>0)
    {
        ans=ans+"✅";
    }
    else{
        ans=ans+"❌";
    }
    return (<li>{ans}</li>);

}
*/







//way2
/*
function Item({carry,importance,name})
{
    if(importance>0)
    {
        return (<li>{name} ✔</li>)
    }
    else{
        return (<li>{name} ❌</li>)
    }

}

*/ 







//way3
/*
function Item({carry,importance,name})
{
    return(<li>{name} {importance>0 ?"✔ " :"❌"}</li>)
}

*/ 







//way4
/*
function Item({carry,importance,name})
{
        return (<li>
            {name}
            {importance>0 && "✔"}
            {importance==0  && "❌"}
        </li>)
}

*/ 





//way5
/*
function Item({carry,importance,name})
{
    return (
        <li>
            {name}
            {importance>0 &&(<input type="button" value="Accept"/>)}
            {importance==0 && (<input type="button" value="Reject"/>)}
        </li>
    )
}

*/ 



//way6

/*
function Item({carry,importance,name})
{
    return(
        <>
        {carry==true && (<li> {name} imp {importance}</li>)}
        </>
    )
}
*/ 



//way7

function Item({carry,importance,name})
{
    return (
        <li>
            {importance>0?
              <p>{name+" "+carry} </p>
              :
              (
                <strike>{name+" "+carry}</strike>
              )

            }
        </li>
    )
}





function ConditionalRendering() {
  return (
    <>
        <h1> Gagan's Packing List</h1>

        <ul>
            <Item carry={true} importance={9} name="Books"></Item>
            <Item carry={false} importance={0} name="Laptop"></Item>
            <Item carry={true} importance={6} name="Pen"></Item>
        </ul>
    </>
  )
}

export default ConditionalRendering; 