function login(){
    waitForFiveSeconds();
    console.log("Login Succesful");
}

function getData(){
    waitForFiveSeconds();
    console.log("Data fetching.....");
}

function displayData(){
    waitForFiveSeconds();
    console.log("Data shown");
}

function attemptTest(){
    waitForFiveSeconds();
    console.log("Test started");
}

function logout(){
    waitForFiveSeconds();
    console.log("Logout Succesful");
}

function waitForFiveSeconds(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms){
    }
}

login();
getData();
displayData();
attemptTest();
logout();
console.log("Call other Application");