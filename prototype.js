let animal = {
    eat : true,
    walk : function(){
        console.log('animal walks')
    }
}

let tiger = {
    bite : true,
    _proto_ : animal
}

console.log(tiger.walk);