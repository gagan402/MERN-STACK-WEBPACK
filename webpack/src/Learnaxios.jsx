import React,{useState} from 'react';
import axios from "axios";

function Learnaxios() {

    const [obj,setObj]=useState({
        item:"",
        category:"",
        price:0,
        dop:"",
        pic:null
    });

    function doUpdate(event)
    {
        const {name,value}=event.target;
        setObj({...obj,[name]:value});
    }
   


    function doUpdatePic(event)
    {
        setObj({...obj,["pic"]:event.target.files[0]})
    }


    async function doSave()
    {
        // const gj=JSON.stringify(obj);
        // console.log(gj);
        // const url=`http://localhost:2005/product/add-product?item=${obj.item}&category=${obj.category}&price=${obj.price}&dop=${obj.dop}`;
        const url=`http://localhost:2005/product/add-product?obj=${JSON.stringify(obj)}`;

        const result=await axios.get(url);
        // alert(JSON.stringify(result));

        if(result.data.status=="true")
        {
            alert("Data Saved Successfully!");
        }
        else{
            alert(result.data.status+" there is some error");
        }


    }



    async function  doSavePost()
    {
        var formdata= new FormData();
        for(var x in obj)
        {
            formdata.append(x,obj[x]);
        }
        // without pic 
        // const url=`http://localhost:2005/aproduct/aadd-product`;
        // const result=await axios.post(url,obj);

        //with pic
        const url=`http://localhost:2005/aproduct/aadd-product`;
        const result=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});

        alert(JSON.stringify(result));


    }

    async function doDelete()
    {
        const url=`http://localhost:2005/d-product/delete-product?item=${obj.item}`;
        const results=await axios.get(url);
        alert(JSON.stringify(results));
    }




  return (
      <>
      <div className="border border-black w-[450px] mx-auto">
        <form action="http://localhost:2005/pproduct/add-pproduct" method="post">
        <center><p >CURD APP</p></center>
        <p>Item : <input type="text" name="item" className="border border-black p-1 m-2"  onChange={doUpdate}/></p>
        <p>Category : <input type="text" name="category" className="border border-black p-1 m-2"   onChange={doUpdate}/></p>
        <p>Price : <input type="text" name="price" className="border border-black p-1 m-2"   onChange={doUpdate}/></p>
        <p>Date Of Purchase: <input type="date" name="dop" className="border border-black p-1 m-2"  onChange={doUpdate}/></p>
        <p>Profile Pic :<input type="file" name="pic" onChange={doUpdatePic}/></p>
        <p>
            <input type="button" value="Do Save" className="border border-black p-1 m-2 bg-success" onClick={doSave}/>
            <input type="button" value="Do Save Post" className="border border-black p-1 m-2 bg-success" onClick={doSavePost}/>
            <input type="button" value="Do Delete" className="border border-black p-1 m-2 bg-success" onClick={doDelete}/>


            <input type="submit" value="Do Save with submit" className="border border-black p-1 m-2 bg-success" />

        </p>
         
         <p>{JSON.stringify(obj)}</p>

         </form>

      </div>
      </>
  )
}

export default Learnaxios;