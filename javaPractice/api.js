// let url =" https://v2.jokeapi.dev/joke/Any";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Found ERR",err);
// });

let url = "https://catfact.ninja/fact";

async function getFacts(){
   try{
     let res = await fetch(url);
    let data  = await res.json();
    console.log(data.fact);
   }catch(err){
    console.log("Got error", err);

   }
};