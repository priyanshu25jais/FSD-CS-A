function register() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('register end');
            resolve();
        }, 8000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('send email end');
            resolve();
        }, 3000);
    });
}

function login() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('login end');

            // resolve();
            reject("login failed");
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('get data end');
            resolve();
        }, 1000);
    });
}

function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('display Data end');
            resolve();
        }, 4000);
    });
}

// Chaining with .then()
register()
    .then(sendEmail)
    .then(login)
    .then(getData)
    .then(displayData)
    .catch(()=>{
        console.log("Error: " +err);
    })
    .finally(()=>{
        console.log(`Inside finally`);
    })
    .then(() => {
        console.log('call other application');
    });
