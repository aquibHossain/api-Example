

const getData=()=>{
    fetch("https://api.kanye.rest/")
    .then(response=>response.json())
    .then(data=>displayData(data))
}
const displayData=data=>{
    const quotes=document.getElementById("quotes")
    const p =document.createElement("p")
    p.innerText=data.quote
    quotes.appendChild(p)

}
