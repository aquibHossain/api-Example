const spinner=(id,dis)=>{
  document.getElementById(id).style.display=dis;
}

const getFood=()=>{
    const searchText= document.getElementById("searchText")
    if(searchText.value=='')
    {
      const div=document.getElementById("foodList")
      div.innerHTML=`
      <p class="fs-4 fw-bold text-danger mx-auto">Please Enter your Food</p>`
    }
    else{
      const foodList=document.getElementById("foodList")
      foodList.textContent="";
      spinner("spinner","block")
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.value}`
      fetch(url) 
      .then(response=>response.json())
      .then(data=>displayData(data))
      searchText.value=""
    }
   
  }
  
  

  const displayData=data=>{
    
      const foodList=document.getElementById("foodList")
      foodList.textContent="";
      console.log(data.meals.length);
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
      spinner("spinner","none")
      
     
  }
  
  const load=async data=>{
      const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`

     try{
        const response=await fetch(url)
        const dat= await response.json()
        loadinfo(dat.meals[0])
     }
     catch(error){
         console.log(error);
     }

    // fetch(url)
    // .then(response=>response.json())
    // .then(dat=>loadinfo(dat.meals[0]))
    
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
  