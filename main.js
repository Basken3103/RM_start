const url = "https://rickandmortyapi.com/api/character"
const wrapper = document.querySelector("#wrapper")

fetch(url)
    .then((result) => result.json())
    .then((data) => {
        handleData(data)
    })


function handleData(data) {
    let li = data.results.map((elementet) => {
        console.log(elementet.name);
        return `<li>Name${elementet.name} <img src= ${elementet.image} /></li>`

    }).join("")
    const myList = `<ul>${li}</ul>`
    console.log(myList);



    //console.log(data.results);
    wrapper.insertAdjacentHTML("beforeEnd", myList)
}