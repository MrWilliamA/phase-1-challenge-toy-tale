let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  
fetch('http://localhost:3000/toys')
.then(function(response) {
  return response.json();

})
.then( (json) => { 

  let toys = json;

  let container = document.getElementById('toy-collection');

  const createCardHtml = (name, imgUrl, likes) => {
    
    let htmlString = `<div class="card">
    <h2>${name}</h2>
    <img src="${imgUrl}" class="toy-avatar" />
    <p>${likes} Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>`;
 
    return htmlString;
  };

  
  const createToyCard = async (name, imgUrl) => {
    let htmlString = '';

    for (const toy of toys) {
      
      htmlString = createCardHtml(toy.name, toy.image, toy.likes);
      container.innerHTML += htmlString;
    }

  };

  createToyCard();



  
   const createToy = document.querySelector('.add-toy-form input.submit');
   createToy.addEventListener("click", (e) => {
    e.preventDefault();

    const newToyName = document.querySelectorAll('.input-text')[0].value;
    const newToyImg = document.querySelectorAll('.input-text')[1].value;
    
    let configObj = {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body: JSON.stringify({
        name: newToyName,
        image: newToyImg
      })
    
     }
    
   
    console.log("name is " + newToyName);
    console.log("Img is " + newToyImg);
  
    return fetch(`http://localhost:3000/toys`, configObj)
    .then( response => response.json() ) //change on this line
    .then( data => {    
      
      data.name = newToyName;
      data.image = newToyImg;
      console.log(data.name);
      
      createToyCard(newToyName, newToyImg);
    })
    .catch(error => {     
      console.error('Error:', error);
  
      });    
  
  
  
  
  });





});




});



