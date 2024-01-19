import React from 'react'
import Products from './Products';
import {useContext} from 'react';
import {emailContext} from "./Home";
function Dashboard() {

    var em=useContext(emailContext);


  return (
    <>
      <div>
        <h1>DASHBOARD</h1>
        <h2>{em}</h2>
        <Products></Products>
      </div>
    </>
  )
}

export default Dashboard;