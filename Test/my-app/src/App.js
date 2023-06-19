import React, { useEffect, useState } from 'react';

function App() {

  const [data,setData] = useState([]);

  // useEffect(()=>{
  //   fetch("https://api.github.com/users/hadley/orgs").then((apiData)=>{
  //     apiData.json().then((result)=>{
  //       console.log(result);
  //       setData(result);
  //     }); 
  //   });
  // },[]);


  return (
    <div className="App">
      {
        //  data.map((item,id)=>
        //   <div key={id}>
        //   <h1>{item.id}</h1>
        //   <h1>{item.name}</h1>
        //   </div>
        //   )
      }

    </div>
  );
}

export default App;
