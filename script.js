const mainContent = document.getElementById("main-container");

const createCard = (products) =>{
  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("h2");
  const priceProduct = document.createElement("p");
  const quantityProduct = document.createElement("p");
  const imageProduct = document.createElement("img");
  const btnProducto = document.createElement("button");
  const hrProducto = document.createElement("hr");

  nameProduct.textContent = products.name;
  priceProduct.textContent = products.price;
  quantityProduct.textContent = products.quantity;
  imageProduct.setAttribute("src", products.image);
  imageProduct.setAttribute("alt", products.name);
  btnProducto.textContent = "ADD";

  cardProduct.classList.add("card");

  cardProduct.appendChild(nameProduct);
  cardProduct.appendChild(hrProducto);
  cardProduct.appendChild(imageProduct);
  cardProduct.appendChild(priceProduct);
  cardProduct.appendChild(quantityProduct);
  cardProduct.appendChild(btnProducto);

  mainContent.appendChild(cardProduct);
}

const products = [
  {name:"Rice", price:"Precio : 5$",quantity:"Quantity: "+5,image:"./img/rice.jpeg"},
  {name:"Potato", price:"Precio : 5$",quantity:"Quantity: "+5,image:"./img/potato.jpeg"},
  {name:"Meat", price:"Precio : 5$",quantity:"Quantity: "+5,image:"./img/Meat.jpeg"},
  {name:"Milk", price:"Precio : 5$",quantity:"Quantity: "+5,image:"./img/milk.jpeg"},
];

function renderCards(){
  products.map(function(product){
    return createCard(product);
  });
}


window.addEventListener("DOMContentLoaded", renderCards)