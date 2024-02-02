const btn=document.querySelectorAll('.button')
const bdy=document.querySelector('body')

btn.forEach(function(button){
console.log(button)
button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
    bdy.style.backgroundColor=e.target.id
    }else if(e.target.id=='yellow'){
        bdy.style.backgroundColor=e.target.id
    }else if(e.target.id=='blue'){
        bdy.style.backgroundColor=e.target.id
    }else if(e.target.id=='purple'){
        bdy.style.backgroundColor=e.target.id
    }
    else{
        bdy.style.backgroundColor=e.target.id
    }
})
})