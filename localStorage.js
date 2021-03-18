class LocalStorageUtil {
  
     constructor() {
         this.keyName = 'products';
         this.keyPrice = 'price';
     }  

     getProducts() {
         
        const productsLocalStorage = localStorage.getItem(this.keyName);

        if(productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
     }

     putProduscts(id) {
         let products = this.getProducts();
         let pushProduct = false;
         const index = products.indexOf(id);

         if (index === -1) {
            products.push(id);
            pushProduct = true;
         }
         else {
             products.splice(index,1);
         }
        
         localStorage.setItem(this.keyName,JSON.stringify(products));

         return { pushProduct, products }
     }

    getPrice() {
        const priceLocalStorage = localStorage.getItem(this.keyPrice);

        if(priceLocalStorage !== null) {
            return JSON.parse(priceLocalStorage);
        }
        return 0;
    }

   setPrice(tt) {
    
    localStorage.setItem(this.keyPrice,JSON.stringify(tt));
   }

   getPrice() {
     const cena = localStorage.getItem(this.keyPrice);
    

      if(cena !== null) {
            return JSON.parse(cena);
        }
        return 0;
   }

}

const localStorageUtil = new LocalStorageUtil() ;





 
