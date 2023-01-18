let navbarr = document.getElementById("navbar");
const url = "https://639b3492d5141501974eaf28.mockapi.io/nykaa";
let mainSection = document.getElementById("main");

//--------------------------------------------//
//navbar
navbarr.innerHTML = `
<div>
    <button id="removeProducts">Remove Product</button>
    <button id="addProducts">Add Product</button>
</div>
`;
let removeProductsButton = document.getElementById("removeProducts");

//--------------------------------------------//
//GET
removeProductsButton.addEventListener("click", () => {
  fetchAndRenderAll();
});

function fetchAndRenderAll() {
  try {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        renderList(data);
      });
  } catch (error) {
    console.log(error);
  }
}

function renderList(data) {
  let CardList = `
    ${data
      .map((ele) =>
        card(
          ele.category,
          ele.details,
          ele.id,
          ele.image,
          ele.name,
          ele.price,
          ele.quantity,
          ele.ratings
        )
      )
      .join("")}    
    `;
  mainSection.innerHTML = CardList;
}

function card(cat, details, id, image, name, price, quantity, ratings) {
  let card = `
        <div class="card" data-id=${id}>
            <div class="card-img">
                <img src=${image} alt='image'>
            </div>
            <div class="card-body">
                <h3 class="name">${name.substring(0, 25)}</h3>
                <div class="description">${details.substring(0,33)}</div>
                <h3 class="rating">Rating: ${ratings}</h3>
                <h3 class='price'>Price: ${price}</h3>
                <h3 class="quantity">Quantity: ${quantity}</h3>
                </div>
                <div class="removeDiv">
                <button class="removeButton">Remove</button>
                </div>
        </div>
    `;
  return card;
}

//--------------------------------------------------//
//addProducts
addProducts.addEventListener("click", () => {
  addProductForm();
});

function addProductForm() {
  mainSection.innerHTML = `
    <form id="addForm" >
    <label for="name" >Product Name : </label><br>
    <input type="text" id="name"><br>
    <label for="category">Product Category : </label><br>
    <input type="text" id="category"><br>
    <label for="price">Product Price : </label><br>
    <input type="text" id="price"><br>
    <label for="details">Product Details : </label><br>
    <input type="text" id="details"><br>
    <label for="ratings">Product Ratings: </label><br>
    <input type="number" id="ratings" min="1" max="5"><br>
    <label for="quantity">Product Quantity : </label><br>
    <input type="number" id="quantity" min="1"><br>
    <label for="image">Product Image : </label><br>
    <input type="text" id="image"><br>
    <hr>
    <input type="submit" value="Submit">
    </form>    
    `; 

    const myform = document.getElementById("addForm");
    const addName = document.getElementById("name");
    const addCategory = document.getElementById("category");
    const addPrice = document.getElementById("price");
    const addDetails = document.getElementById("details");
    const addRatings = document.getElementById("ratings");
    const addQuantity=document.getElementById('quantity');
    const addImage = document.getElementById("image");
   
    myform.addEventListener("submit", (e) => {
        e.preventDefault();
        var productObject = {
        name:addName.value,
        category:addCategory.value,
        price:addPrice.value,
        details:addDetails.value,
        ratings:addRatings.value,
        quantity:addQuantity.value,
        image:addImage.value
      };
      addProductToAPI(productObject)
      
    });
}

function addProductToAPI(obj) {
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>alert('error'))
}


//-------------------------------------------------------//