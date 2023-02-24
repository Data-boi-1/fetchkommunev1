console.log("jeg er i dropdown")

const fruits = []

fruits.push({"id": 1, "name": "apple", "style":"fruit"})
fruits.push({"id": 2, "name":"banana", "style" : "fruit"})
fruits.push({"id": 3, "name":"peanut", "style" :"notfruit"})
fruits.push({"id": 4, "name": "strawberry", "style" :"fruit"})

console.log(fruits)

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddFruits = document.getElementById("ddFruits")

function addFruitToDropDown(item){
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
    //el.value = item.id
    el.value = item //why not put object in value
    el.className = item.style

}

function fillDropDown(){
    fruits.forEach(addFruitToDropDown)
}

function selectFruit(){
    const selindex = ddFruits.selectedIndex
    const selectedFruit = ddFruits.options[selindex]
    console.log(selindex)
    console.log(selectedFruit)
    console.log(selectedFruit.value)
}

pbFillDropDown.addEventListener("click", fillDropDown)
ddFruits.addEventListener("change", selectFruit)

