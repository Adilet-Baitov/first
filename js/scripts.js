'use strict';

// function pillsUse(buttons, pills) {

//     const togglers = document.querySelectorAll(buttons);
//     const tarrgets = document.querySelectorAll(pills);

//     function clear() {
//         [...togglers, ...tarrgets].map(item => {
//             item.classList.contains('active')? item.classList.remove('active') : false;
//         });
//     }

//     togglers.forEach((toggler, index) => {
//         toggler.addEventListener('click', () => {
//             clear();
//             toggler.classList.add('active');
//             tarrgets[index].classList.add('active');
//         });
//     });

// }

// const buttons = '.btn-card--desc', pills = '.card-product__content--item';
// pillsUse(buttons, pills);


window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.btn-card--desc'),
    pills = document.querySelectorAll('.card-product__content--item');


    function tabsToggler(tabs, pills) {

        function clear(arr) {
            arr.forEach(elem => {
                if (elem.classList.contains('active')) {
                    elem.classList.remove('active');
                }
             }); 
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                clear([...tabs, ...pills]);
                tab.classList.add('active');
                pills[index].classList.add('active');
            });
        });
    };
    tabsToggler(tabs, pills);
    
    // let myModal = document.getElementById('myModal')
    // let myInput = document.getElementById('myInput')
    
    // myModal.addEventListener('shown.bs.modal', function () {
    //   myInput.focus()
    //   console.log(myInput);
    // })

    // console.log(myInput);

});
