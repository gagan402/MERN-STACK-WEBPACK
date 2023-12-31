import  st1 from "./CardStyle1.module.css";
import  st2 from "./CardStyle2.module.css";
import Details from "./Details";
import MyImg from "./MyImg";
/*

function Card(){
    return(
        <>
            <div style={{backgroundColor:"red",width:"200px",border:"1px solid black",height:"300px"}}>
                    <h3>Product Details</h3>
            </div>
        </>
    )
}

*/



/*
function Card()
{

    const cardcss={
        width:"200px",
        height:"300px",
        backgroundColor:"pink",
        border:"1px solid black"

    }
    return(
        <>
        <div style={cardcss}>
            <h3>Product Details</h3>
        </div>
        </>
    )
}*/


function Card()
{
    return(
        <>
        <div className={`${st1.crd} ${st1.crdfont}`}>
            <center><h3> Details</h3>
            <MyImg></MyImg>
            <Details></Details>
            <div className={st2.btn}>
                Details
            </div>
            </center> 
        </div>
        </>
    )
}

export default Card;