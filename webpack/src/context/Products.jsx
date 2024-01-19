import React from 'react'
import {useContext} from 'react';

import { aryContext } from './Home';
function Products() {

  var ary=useContext(aryContext);
  return (
    <>
    {
      ary.map((obj)=>{
        return (
            <>
            {JSON.stringify(obj)}
            </>
        )
      })
     }
    </>
  )
}

export default Products;