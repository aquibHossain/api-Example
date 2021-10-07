const getFood=()=>{
  const searchText= document.getElementById("searchText")
  if(searchText.value=='')
  {

  }
  else{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.value}`
    fetch(url) 
    .then(response=>response.json())
    .then(data=>displayData(data))
    .catch(error=>console.log(error))
    searchText.value=""
  }
 
}

const displayData=data=>{
  
    const foodList=document.getElementById("foodList")
    foodList.textContent="";
    if (data.meals.length==0)
    {
      const div=document.createElement("div")
      div.innerHTML=`
        <h5 class="card-title">No matched Found</h5>
        `
      foodList.appendChild(div)
    }
    else{
      data.meals.forEach(element => {
        const div=document.createElement("div")
        div.innerHTML=`  <div onClick="load(${element.idMeal})" class="card h-100">
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">${element.strInstructions.slice(0,200)}</p>
        </div>
      </div>`
        div.classList.add("col")
        foodList.appendChild(div)
     });
    }
   
}

const load=data=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`)
  .then(response=>response.json())
  .then(dat=>loadinfo(dat.meals[0]))
  
}

const loadinfo=info=>{
  
   const div=document.getElementById("show")
   const div2=document.createElement("div")
   div.innerHTML="";
   div2.innerHTML=`
   <div class="card mx-auto w-50">
   <img src="${info.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${info.strMeal}</h5>
     <p class="card-text">Category:${info.strCategory}</p>
     <a href="${info.strYoutube}" class="btn btn-primary">Go To video</a>
   </div>
 </div>
   `
   div.appendChild(div2)
}
