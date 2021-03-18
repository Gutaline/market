let basket = document.querySelector('.text__basket');
basket.textContent = localStorageUtil.getPrice();
let basketPrice = Number(basket.textContent); 

class Products {

  constructor() {
    this.classNameActive = 'product-element__button_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';

  }

  handleSetLocationStorage(element, id ,price) {
    const { pushProduct, products } = localStorageUtil.putProduscts(id);
    

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;

      price = Number(price);

    

      basketPrice += price;

      basket.textContent ='$' + basketPrice;

      localStorageUtil.setPrice(basketPrice);
      console.log(basketPrice );
      

   
    } else{
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;

      price = Number(price);
     
      basketPrice -= price;
      
      basket.textContent ='$' + basketPrice;
      localStorageUtil.setPrice(basketPrice);
      console.log(basketPrice );

    }
  }
 
  render() {
    const productsStore = localStorageUtil.getProducts();
  	let htmlLi = '';



  	CATALOG.forEach(({id,name,price,img}) => {
     let index = id.split('el');
     let nomer = Number(index[1] - 1);

     let activeClass = '';
     let activeText = '';

     if (productsStore.indexOf(id) === -1) {
       activeText = 'Добавить в корзину';
     }
     else {
       activeClass = ' product-element__button_active';
       activeText = 'Удалить из корзины';
     }

     htmlLi += `
     <li class="product-element" id = "element${nomer}" >
       <img src="${img}" class = "product-element__img" />
       <div class = "product-element__name" >${name}</div>
       <div class = "product-element__price">${price.toLocaleString()} $</div>
       <button class = "product-element__button${activeClass}" onclick = "productsPage.handleSetLocationStorage(this,'${id}','${price}')"> 
       ${activeText} 
       </button>
     </li>
     `;  
  	});

   const htmlUl = `
     
   <ul class="products-container">
   ${htmlLi}
   </ul>
   `;
  
   
   ROOT_PRODUCTS.innerHTML = htmlUl ;

  }

}


const productsPage = new Products();
productsPage.render();



