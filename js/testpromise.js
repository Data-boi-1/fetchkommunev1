console.log("start på test promise")

function returnPromise(){
    return new Promise(function(resolve, reject){
        resolve("start of new Promise")
    })
}

function test(){
    return returnPromise().then((value) => {
        console.log("1st then, inside test():" + value)
        return "Hello"
    }).then((value) => {
        console.log("2nd then, inside test():" + value)
        return "World"
    })
}

test().then((value) => {
    console.log("i then Test er færdig vi forsætter" + value)
})

console.log("slut med test")