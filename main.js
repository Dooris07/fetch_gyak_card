class Product {
    
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
        
    }
}

async function init() {
    const response = await fetch( "/products.json")


    const adatok = await response.json();
    const titel = document.getElementById("mainTitle")
    titel.textContent = adatok.shopName;

    /** @type Product[] */
    let products = adatok.products.map(a => new Product(a.name, a.img, a.price));

    console.log(products);

    for (let index = 0; index < products.length; index++) {
        let element = products[index];
        createCard(element);
    }

}
init();


/**@param {Product} product */

function createCard(product) {
    const col = document.createElement("div");
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const title =  document.createElement("h5");
    const image = document.createElement("img"); 
    const price = document.createElement("p");
    const btn = document.createElement("button");

    outerDiv.appendChild(image);
    outerDiv.appendChild(innerDiv);
    innerDiv.appendChild(title);
    innerDiv.appendChild(price);
    innerDiv.appendChild(btn);

    outerDiv.classList.add('card')
    image.classList.add('card-img-top')
    title.classList.add('card-title')
    price.classList.add('card-text')
    btn.classList.add('btn-primary', 'btn')
    innerDiv.classList.add('card-body')
    col.classList.add('col-12', 'col-md-6', 'col-lg-4')

    title.textContent = product.name
    image.src = product.img
    price.textContent = "Price:" + product.price + ",-Ft"
    btn.textContent = "Reservation"
    btn.onclick = btnClick;

    col.appendChild(outerDiv);
    document.getElementById("row").appendChild(col);
}


function btnClick() {
    const succ = document.getElementById("successful")
    succ.textContent = "Successful reservation!"
    succ.classList.add('bg-success', 'text-center');
    setTimeout(() => { 
        succ.textContent = ""
    }, 3000) 
}














