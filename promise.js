var promise1 = new Promise((resolve, reject) =>{
    var a = 1 + 1;
    if(a == 2){
        resolve('success');
    }else{
        reject('failed');
    }
});

promise1.then((message) => {
    console.log(message);
}).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

//promise all

var record1 = new Promise((resolve, reject) => {
    resolve('record 1 success');
});

var record2 = new Promise((resolve, reject) => {
    resolve('record 2 success');
});

var record3 = new Promise((resolve, reject) => {
    resolve('record 3 success');
});

Promise.all([record1, record2, record3]).then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});