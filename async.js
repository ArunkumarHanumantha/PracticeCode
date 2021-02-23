async function f(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve('hello')
        },5000);
    })
    let result = await promise;

    console.log(result)
}

var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('waited 5secs')
    }, 10000);
})
var promise2 = new Promise(function(resolve, reject){
    resolve('second promise');
})

Promise.all([promise1, promise2]).then(function(res){
    console.log('all promise finished executing successfully = '+res);
}).catch(function(err){
    console.log(err);
})

console.log(f());


async function fetchPro(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
}

fetchPro().catch(function(err){
    console.log('fetch is not defined so not able to fetch anything')
});