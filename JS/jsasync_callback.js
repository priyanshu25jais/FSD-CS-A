function register(callback) {
    setTimeout(() => {
        console.log('register end');
        callback();
    }, 8000);
}

function sendEmail(callback) {
    setTimeout(() => {
        console.log('send email end');
        callback();
    }, 3000);
}

function login(callback) {
    setTimeout(() => {
        console.log('login end');
        callback();
    }, 2000);
}

function getData(callback) {
    setTimeout(() => {
        console.log('get data end');
        callback();
    }, 1000);
}

function displayData(callback) {
    setTimeout(() => {
        console.log('display Data end');
        callback();
    }, 4000);
}

// Using callbacks (callback hell style 😅)
register(() => {
    sendEmail(() => {
        login(() => {
            getData(() => {
                displayData(() => {
                    console.log('call other application');
                });
            });
        });
    });
});
