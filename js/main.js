"use strict";
let productsQty = document.querySelector('#products-qty');
let productsSumm = document.querySelector('#products-summ');
const addButtons = document.querySelectorAll('.product-box__btn');
const products = document.querySelectorAll('.product-box__item');
const filters = document.querySelectorAll('.select-control');
let priceFilter = document.querySelector('#price-filter');
let categoryFilter = document.querySelector('#category-filter');
let checkoutButton = document.querySelector('#btn-checkout');
let popupWindow = document.querySelector('#popup');
let submitButton = document.querySelector('#btn-form-submit');


console.log(products);



addButtons.forEach( el =>{
    el.onclick = function(){
        let product = el.closest('.product-box__item');
        let productQty = product.querySelector('.qty__item').value;
        let productPrice = product.querySelector('.product-box__meta > p').innerHTML;

        productsQty.innerHTML = parseInt(productsQty.innerHTML)  + parseInt(productQty);
        productsSumm.innerHTML = parseInt(productsSumm.innerHTML) + parseInt(productPrice) * productQty;
    }

} )


filters.forEach( el =>{

    el.onchange = function(){
        let priceFilterValue = parseInt(priceFilter.options[priceFilter.selectedIndex].value);
        let categoryFilterValue = categoryFilter.options[categoryFilter.selectedIndex].value;
        console.log(priceFilterValue,categoryFilterValue);

        products.forEach( product =>{

                let productPrice = parseInt(product.querySelector('.product-box__meta > p').innerHTML);
                let productCategory = product.dataset.productCategory;

                 if ((priceFilterValue === 0  || productPrice <= priceFilterValue) && (categoryFilterValue === 'all' || productCategory === categoryFilterValue) ){
                    product.style.display = 'flex';
                }

                else{
                    product.style.display = 'none';

                }

            })


    }

})

checkoutButton.onclick = function(){
    popupWindow.style.transform = 'translate(-50%,100%)';

}
submitButton.onclick = function(e){
    console.log(this);
    e.preventDefault();
    let popUp = this.closest('#popup');
    let nameField = popUp.querySelector('#name').value;
    let emailField = popUp.querySelector('#email').value;

    if (nameField.trim() == '' || emailField.trim() =='' ){
        alert('Пожалуйста заполните все поля');
    }
    else{
        productsQty.innerHTML = '0';
        productsSumm.innerHTML = '0';
        alert('Спасибо за покупку');
        popupWindow.style.transform = 'translate(-50%,-100%)';

    }


}
