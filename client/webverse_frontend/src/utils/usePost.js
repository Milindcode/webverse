import { useState } from "react";

async function usePost(url, data){
try{

    const res=  await fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })

  const resData= await res.json();

  return resData;
} catch(e) {
    console.log(e);
}
//   .then(function(response){ 
//   return response.json()})
//   .then(function(data){
//     console.log(data + " submitted successfully");
//     console.log(data);
//     return data;
// }).catch((error) => console.log('Error:', error)); 
}


export default usePost;