function login(callback){
    setTimeout(()=>{
        console.log("Login Successfull");
        callback();
    },5000)
}

function getData(callback){
    setTimeout(()=>{
        console.log("Data fetching.....");
        callback();
    },5000)
}

function displayData(callback){
    setTimeout(()=>{
        console.log("Data shown");
        callback();
    },5000)
}

function attemptTest(callback){
    setTimeout(()=>{
        console.log("Test started");
        callback();
    },5000)
}

function logout(callback){
    setTimeout(()=>{
        console.log("Logout Successfull");
        callback();
    },5000)
}

login(() => {
    getData(() => {
        displayData(() => {
            attemptTest(() => {
                logout(() => {
                    console.log('call other application');
                });
            });
        });
    });
});
