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
  console.log(response);
  return response.json();

})
.then( (json) => { 

  let toys = json;
  const container = document.getElementById('toy-collection');

  toys.map(function(toy) {
    container.innerHTML = "test";

    let div = document.createElement('div');
    let name = document.createElement('h2');
    let img = document.createElement('img');
    let paragraph = document.createElement('p');
    let btn = document.createElement('button');
   
    div.innerHTML = `${toy.div}`;
    name.innerHTML = `${toy.name}`;

  });

} )

// function getToys(json) {
// 
  // const container = document.getElementById('toy-collection');
// 
  // json.forEach(showToys);
// 
  // for(const card in json) {
    // 
    // container.innerHTML = "test";
    // 
  // }
  
  //}


// function showToys(json) {
  // const container = document.getElementById('toy-collection');

  // container.innerHTML = "test";
// }



});
