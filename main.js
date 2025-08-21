const url = "https://rickandmortyapi.com/api/character"
const wrapper = document.querySelector("#wrapper")

async function renderPage(url) {
    try {
        const respons = await fetch(url)
        const data = await respons.json()
        //console.log(data);
        handleData(data)

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

    wrapper.innerHTML = ""


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

    let ul = `<ul id = "nextprev">${nextLink}${prevLink} </ul>`
    wrapper.insertAdjacentHTML("afterbegin", ul)
    const nextprev = document.querySelectorAll("#nextprev li a")
    console.log(nextprev);
    nextprev.forEach((link) => {
        link.addEventListener("click", handleClick)

    })

}

function handleClick(event) {
    event.preventDefault()
    let link = event.target.href

    renderPage(link)

}