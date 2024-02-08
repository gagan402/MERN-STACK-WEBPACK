import React,{useState} from "react";
import axios from "axios";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function ProfileForm() {
  const [obj,setObj]=useState({
    name:"",
    email:"",
    pic:null
  });



function doUpdate(event)
{
    const {name,value}=event.target;
    setObj({...obj,[name]:value});

}

function doUpdatePic(event)
{
    setObj({...obj,["pic"]:event.target.files[0]});
    const ggn=event.target.files[0];
    console.log(ggn);
}

async function doSave()
{
    
    var formdata =new FormData();
    for(var x in obj)
    {
        formdata.append(x,obj[x]);
    }


    const url=`http://localhost:2005/p-from/add-profile`;
    const ans=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});
    alert(JSON.stringify(ans));
}

async function doSearch()
{
    const url=`http://localhost:2005/se-profile/search-profile`;
    const ans=await axios.post(url,obj);
    console.log(JSON.stringify(ans));
    setObj({...ans.data});

    // alert("Searched Data : "+ans.data.name+" "+ans.data.picpath);
}


async function doUpdateData()
{
  var formdata =new FormData();
    for(var x in obj)
    {
        formdata.append(x,obj[x]);
    }
  const  url="http://localhost:2005/up-profile/update-profile";
  const ans=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});

  console.log(JSON.stringify(ans));
  setObj({...ans.data});
  
}
  return (
    <>
      <form className="container border border-black  mx-auto mb-2">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 ">
            Profile
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  onChange={doUpdate}
                  value={obj.name}
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  onChange={doUpdate}
                  value={obj.email}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 ">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="pic"
                        onChange={doUpdatePic}
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
                {/* <div className="w-[100px] border border-black h-[100px]">
                  <img src={pp.photo}/>

                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">



          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={doSave}
          >
            Save
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2"
            onClick={doSearch}
          >
            Search
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2"
            onClick={doUpdateData}
          >
            Update
          </button>
        </div>
        <p>{JSON.stringify(obj)}</p>
      </form>
    </>
  );
}

export default ProfileForm;
