const postDa=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>dData(data))
}
postDa();

const dData=data=>{
    const article=document.getElementById("article")
    data.forEach(element => {
    const div=document.createElement("div");
    div.innerHTML=`<h2>Name:${element.name.common}</h2>
                    <p>Population:${element.population}</p>
                    <button onclick="detail('${element.name.common}')">Details</button>
                `
    div.classList.add("country")
    article.appendChild(div);
   
})
}

const detail=name=>{
    const url=`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>displatDetail(data))
}

const displatDetail=data=>{
    const descrip=document.getElementById("descrip")
    data.forEach(element=>{
        descrip.innerHTML=` <h3>Capital:${element.capital}</h3>
        <img width="200px" src="${element.flags.png}" alt="">    
        `
    })
}