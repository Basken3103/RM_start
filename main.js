const url = "https://rickandmortyapi.com/api/character"
const wrapper = document.querySelector("#wrapper")

async function renderPage(url) {
    try {
        const respons = await fetch(url)
    }
    catch { error } {

    }
}

fetch(url)
    .then((result) => result.json())
    .then((data) => {
        handleData(data)
    })


function handleData(data) {


    nextPrev(data.info)

    let li = data.results.map((elementet) => {
        console.log(elementet.name);
        return `<li>Name${elementet.name} <img src= ${elementet.image} /></li>`

    }).join("")
    const myList = `<ul>${li}</ul>`

    //console.log(data.results);
    wrapper.insertAdjacentHTML("beforeEnd", myList)
}

function nextPrev(data) {

    const next = data.next
    const prev = data.prev


    let nextLink = ""
    let prevLink = ""



    if (data.next) {
        nextLink = `<li><a href=${data.next}>NEXT</a></li>`
    }
    else {
        nextLink = `<li><a class="notactive">NEXT</a></li>`
    }


    //
    if (data.prev) {
        prevLink = `<li><a href=${data.prev}>PREV</a></li>`
    }
    else {
        prevLink = `<li><a class="notactive">PREV</a></li>`
    }

    let ul = `<ul id>"nextprev">${nextLink}${prevLink} </ul>`
    wrapper.insertAdjacentHTML("afterbegin", ul)
    const nextprev = document.querySelector("#nextprev li a")
    console.log(nextprev);

    nextprev.addEventListener("click", handleClick)




    // Nået til 27:51 i Steens 07-RM-fetchAsync--2025-08-19




}

function handleClick(event) {
    event.preventDefault()

}