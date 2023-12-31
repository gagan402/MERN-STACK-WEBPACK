import st2 from "./CardStyle2.module.css"
function MyImg()
{
    const path="https://realjavaonline.com/pic/real%20java.jpg";
    return(<img src={path} className={st2.pic}/>  );
}
export default MyImg;