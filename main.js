const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')


const burguerMenu = document.querySelector('.menu')
const sideMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

const cardContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleSideMenu)
menuCarritoIcon.addEventListener('click', toggleMenuCarritoAside)



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleSideMenu(){
    sideMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
}
function toggleMenuCarritoAside(){
    aside.classList.toggle('inactive')
    sideMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

const productList = [];
productList.push({
    name:'bike',
    price:120,
    image:'./bike.jpeg',
});
productList.push({
    name:'skateboard',
    price:90,
    image:'./skateboard.jpeg',
});
productList.push({
    name:'surfboard',
    price:220,
    image:'./surfboard.jpeg',
});

function renderProducts(arr){
    for (product of arr){
        const productcard = document.createElement('div')
        productcard.classList.add('product-card');
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg' );
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv,productInfoFigure)
        productcard.append(img,productInfo)
    
        cardContainer.append(productcard)
    }
    console.log('funciona?');
}

renderProducts(productList)