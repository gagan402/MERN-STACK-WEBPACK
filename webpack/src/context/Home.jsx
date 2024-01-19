import React from 'react'
import { createContext } from 'react';
import Dashboard from './Dashboard';
import JsonArray from "../cardComp/JSONarry";

var emailContext=createContext();
var aryContext=createContext();
function Home() {

    const activeUser="gagandeepg973@gmail.com";
   

  return (
    <>
       <emailContext.Provider value={activeUser}>
        <aryContext.Provider value={JsonArray}>
                   <Dashboard></Dashboard>
        </aryContext.Provider>
        </emailContext.Provider>
    </>
    )
}

export default Home;
export {emailContext,aryContext};