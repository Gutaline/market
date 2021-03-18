let basketPrice1 = Number(basket.textContent); 

class Shopping {

	closeShoppingPage () {
		ROOT_SHOPPING.innerHTML = '';
	}

	deleteEl(idi,price) {


	   let needPrice =  localStorageUtil.getPrice();
	   needPrice -= price;
	   localStorageUtil.setPrice(needPrice);
	   localStorageUtil.putProduscts(idi);
	   basket.textContent ='$' + needPrice;

	   let index = idi.split('el');
       let nomer = Number(index[1] - 1);
	   
	   
	   let elementId = 'element' + nomer;

	   
	   let element = document.getElementById(elementId);

	   let elementInner = element.querySelector(".product-element__button_active")
	   
	   elementInner.classList.remove("product-element__button_active");
	   elementInner.textContent = 'Добавить в корзину';
	    basketPrice=needPrice;
	   shoppingPage.render();
	   


	}

	openShoppingPage() {
		shoppingPage.render();
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
  		let htmlLi = '';
  		let htmlSum = 0;


  	CATALOG.forEach(({id,name,price,img}) => { 

  		if (productsStore.indexOf(id) !== -1) {
  			htmlLi += `

  				<tr>
  					<td><div class = "fff" style = "background-image: url('${img}');"> </div></td>
  					<td class = "name-product">${name}</td>
  					<td class = "price-product">${"$" + price.toLocaleString()}</td>
  					<td class = "delete-product" onclick="shoppingPage.deleteEl('${id}','${price}');"></td>
  				</tr>

  			`;

  			htmlSum += price;
  		}
  	});


		const html = `
		<div class= "blackGround"> </div>
		<div class = "container-openShop"


			<div>
				<div class = "title-cartProducts">Моя корзина</div>
				<div class = "exit-openCart" onclick = "shoppingPage.closeShoppingPage();"></div>
				<table class = "cartProducts">
					${htmlLi}
				</table

			</div >

			<div class = "summa">

				Итого:${' ' + htmlSum + '$'}
			</div>
		</div>
		
		`;
		ROOT_SHOPPING.innerHTML = html ;
	}
}

const shoppingPage = new Shopping();


 