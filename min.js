form.addEventListener('submit', (e) => {
    e.preventDefault();
    ul.innerHTML += `<li>${input.value}<button class="dele" onClick="remove(event)">Delete</button></li>`
    form.reset();
})

let remove = e =>e.target.parentElement.remove()



































// let form = document.querySelector('form');
// let ul = document.querySelector('ul');
// let input = document.querySelector('input');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     ul.innerHTML += `<li>${input.value}<button class="dele" onClick="remove(event)">Delete</button></li>`
//     form.reset();
// })



// ul.addEventListener('click',(e)=>{
//   if(e.target.className === "dele"){
//      e.target.parentElement.remove()
//   }
// })