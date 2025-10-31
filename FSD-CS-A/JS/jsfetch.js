// const username="ashishvirgo";
const url=https://dummyjson.com/users?limit=35;
const pr=fetch(url);
      pr.then((res)=>{
              return res.json();
      })
      .then((data)=>{
        console.log("Data=",data);
      })
      .catch((err)=>{
       console.error("Error=",err.message);
      })
      .finally(()=>{
        console.log("Inside Finally")
      })