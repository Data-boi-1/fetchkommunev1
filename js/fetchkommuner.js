console.log("vi er i fetchkommuner")
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommune(){
    console.log("2222 fetch kommune")
    return fetch(urlKommuner).then((response ) => {
        console.log("444444 start på json")
        response.json()
    })
}

function actionFetch(){
    console.log("11111 action fetch")
    const kommuner = fetchKommune()
    console.log("3333 done fetch kommune")
    console.log(kommuner)
}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener("click", actionFetch)