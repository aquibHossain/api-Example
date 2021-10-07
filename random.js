function getData() {
    fetch('https://randomuser.me/api/?results=5')
    .then(response=>response.json())
    .then(data=>display(data))
    console.log(5);
}

function display(data) {
    const div=document.getElementById("article")
    for (const person of data.results)
    {
        console.log(person);
        const p=document.createElement("p")
        p.innerText=`Name:${person.name.first}
                      Email:${person.email}`
        div.appendChild(p);
    }
}