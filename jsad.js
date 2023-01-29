let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

let select1 = document.querySelector('.down1');
let block1 = document.querySelector('nav')

    select1.addEventListener('click' , function(){
    body.classList.toggle('block1')
})


let select2 = document.querySelector('.down2');
let block2 = document.querySelector('nav')

    select2.addEventListener('click' , function(){
    body.classList.toggle('block2')
})


let select3 = document.querySelector('.down3');
let block3= document.querySelector('block3')

select3.addEventListener('click' , function(){
    body.classList.toggle('block3')
})


let select4 = document.querySelector('.down4');
let block4= document.querySelector('body')

select4.addEventListener('click' , function(){
    body.classList.toggle('block4')
})
