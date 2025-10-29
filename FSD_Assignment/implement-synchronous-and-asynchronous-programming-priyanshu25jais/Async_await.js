function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Login Successful');
            resolve();
        }, 5000);
    });
}

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data fetching.....');
            resolve();
        }, 5000);
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
            console.log('Logout Successful');
            resolve();
        }, 5000);
    });
}

async function runApplication() {
    await login();
    await getData();
    await displayData();
    await attemptTest();
    await logout();
    console.log('call other application');
}

runApplication();
