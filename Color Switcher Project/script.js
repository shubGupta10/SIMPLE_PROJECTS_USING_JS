const buttons = document.querySelectorAll('.boxes');
const body = document.querySelector('body');


buttons.forEach(function (boxes){
    boxes.addEventListener('click' , function(e){
       if(e.target.id === 'red'){
        body.style.backgroundColor =  e.target.id;
       }

       if( e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id;
       }

       if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
       }

       if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
       }
    })
})
