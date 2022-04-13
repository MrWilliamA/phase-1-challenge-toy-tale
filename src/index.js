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
    <h2>${{name}}</h2>
    <img src="${{imgUrl}}" class="toy-avatar" />
    <p>${{likes}} Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>`;
 
    return htmlString;
  };

  
  const createToyCard = async () => {
    // const toyName = toys.name;
     console.log(toys);
    let htmlString = '';

    for (const toy in toys) {
      console.log(toy.name)
      htmlString = createCardHtml(toy.name, toy.image, toy.likes);
      
      container.innerHTML = htmlString;
    }


    // toys.map(function(toy) {
    //   htmlString = createCardHtml(toy.name, toy.image, toy.likes);
    //   console.log(htmlString)
    //   container.innerHTML = htmlString;
    // })


  };

  createToyCard();

});
});




  // let div = document.createElement('div');
  // let name = document.createElement('h2');
  // let img = document.createElement('img');
  // let paragraph = document.createElement('p');
  // let btn = document.createElement('button');

//   toys.map(function(toy) {
  
//     container.append(toyCard);
//     //div.innerHTML = `${toy.div}`;
//    // name.innerHTML = `${toy.name}`;
//     container.innerHTML = div;
//   });

// } )

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


