const sov = (ms) => {
    return new Promise(dummyFunction => setTimeout(dummyFunction, ms))
}

async function doSomethingAsync(){
    //3. når funktionen er kaldt, bliver denne linje printet
    console.log("1111 før sov")
    //4. denne linje "await" er også inde i funktionen, men bliver først printet efter 10000 ms (10 sek)
    //hvilket betyder at den "slut 555" bliver printet før denne linje
    await sov(10000)
    console.log("222 færdig med at sove")
}

//1. først printer den denne linje
console.log("start 1")
//2. derefter kalder vi async "doSomethingAsync() funktionen.
doSomethingAsync();
//5. denne linje bliver printet før "222 færdig med at sove" da "await sov(10000)" er sat til 10 sekunder.
console.log("slut 555")
