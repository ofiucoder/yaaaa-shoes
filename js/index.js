const requestURL = '../json/api.json';

async function fetchApiJson() {
    const response = await fetch(requestURL);
    const shoes = response.json();
    return shoes;
}

fetchApiJson().then(shoe =>{
    for(let index = 0; index < shoe.shoes.length; index ++){
        let id = shoe.shoes[index]["id"];
        let image = shoe.shoes[index]["image"];
        let price = shoe.shoes[index]["price"];
        let color = shoe.shoes[index]["color"];
        let model = shoe.shoes[index]["model"];
        let material = shoe.shoes[index]["material"];
        let description = shoe.shoes[index]["description"];
        let category = shoe.shoes[index]["category"];
        console.log(id,image,price,model,description,category);
   

        shoesSection.innerHTML += `
        <div class="card design card-width">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Precio: ${price}€</h5>
                    <p class="card-text">Color: ${color}</p>
                    <p class="card-text">Modelo: ${model}</p>
                    <p class="card-text">Material: ${material}</p>
                    <p class="card-text">${description}</p>
                    <p class="card-text">Categoría: ${category}</p>
                </div>                
                <div class="card-body">
                    <a href="#" class="card-link">Añadir al Carrito</a>
                </div>
        </div>
        `
    }

});