let input = document.querySelector('#input')
let btn = document.querySelectorAll('button')

let arr = Array.from(btn)

let equal = ''

arr.forEach(btn =>{

    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
             equal = eval(equal)
             input.value = equal
        }else if(e.target.innerHTML == 'AC'){
             equal = ''
             input.value = equal
        }else if(e.target.innerHTML == 'DEL'){
            equal = equal.substring(0,equal.length-1)
            input.value = equal
        }else{
            equal += e.target.innerHTML
            input.value = equal
        }
    })
})
