
import React from 'react'
import { useEffect,useState } from 'react';

async function useGet(url, token){
    // const requrl= url+'?authorization='+ token;
    // console.log(requrl);
    // const response = await fetch(requrl);
    // const jsonData = await response.json();
    // return jsonData;
    const apiUrl = url; 
    const authToken = token; 

   const res = await fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json'
  }
})

    const resJson= await res.json();

    return resJson;

//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Handle the fetched data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   })

}



export default useGet;