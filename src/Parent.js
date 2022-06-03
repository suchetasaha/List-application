import React from "react";
import Demo from './Demo';
import { useState } from 'react';

export default function Parent() {
  const [data, setData] = useState('Michale Jackson');
  
  const parentToChild = () => {
    setData("Sucheta Saha");
  }

    return (
      <div>
         <Demo parentToChild={data}/>
      
      <div>
        <button onClick={() => parentToChild()}>Click Parent</button>
      </div>
      </div>
    );
  }