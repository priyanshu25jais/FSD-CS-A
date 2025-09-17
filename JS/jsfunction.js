function hello(user){
    console.log(`Hello ${user}`);
}
function sum(a,b){
    console.log("before return");
    return a+b;
    // console.log("after return");
}
const add=(a=5,b=6)=>{
    return a+b}
hello("Priyanshu");
const z=sum(9,10);
console.log(z);
console.log(add());
(function(){
    console.log("Inside IIFE");
})();

function f1(user,callback){
    console.log(`hello ${user}`);
    callback();
}
f1('admin',()=>{
    console.log(add(3,5));
});
