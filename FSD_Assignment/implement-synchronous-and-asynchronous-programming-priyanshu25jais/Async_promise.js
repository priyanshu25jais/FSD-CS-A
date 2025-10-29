function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Login Succesful');
            resolve();
        }, 5000);
    });
}

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data fetching.....');
            resolve();
        }, 2000);
    });
}

function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data shown');
            resolve();
        }, 5000);
    });
}

function attemptTest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Test started');
            resolve();
        }, 5000);
    });
}

function logout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Logout Succesful');
            resolve();
        }, 5000);
    });
}
    login()
    .then(getData)
    .then(displayData)
    .then(attemptTest)
    .then(logout)
    .then(() => {
        console.log('call other application');
    });
