// let p1 = document.getElementsByClassName('world')

// console.log(p1);

// let h3 = document.getElementsByTagName("h3")

// console.log(h3);

// let div1 = document.getElementById("one")
// console.log(div1);

// div1.innerHTML = `
// <h2> Hello h2</h2>
// <h3> Hello h3</h3>
// `
let body = document.getElementById('body')

body.style.backgroundColor = '#f3d9bd'
body.style.fontFamily = 'Montserrat Alternates', 'sans-serif';
body.style.width = '60%'
body.style.margin = 'auto'
body.style.marginTop = '50px'
body.style.border = '4px solid #583101'
body.style.lineHeight = '1.5'




/////////////HEADER///////////////////////
let heading = document.getElementById('heading')
heading.style.textAlign = 'center'
heading.style.color = 'red'


let par = document.getElementById('p1')
par.style.textAlign = 'center'
par.style.color = 'green'
par.style.fontWeight = 'bold'
par.style.fontSize = '30px'



////////BUTTON//////////
let buttons = document.getElementById('buttons')
buttons.style.textAlign = 'center';

let btn = document.querySelectorAll('[class^="button"]')
console.log(btn);
for(let a = 0; a < btn.length; a++) {
    btn[a].style.padding = '10px 30px'
    btn[a].style.backgroundColor = 'transparent'
    btn[a].style.color = '#583101'
    btn[a].style.borderRadius = '10px'   
    btn[a].style.border = '2px solid #402400'   
    btn[a].style.cursor = 'pointer' 
    btn[a].style.fontFamily = 'Montserrat Alternates', 'sans-serif' 
    btn[a].style.fontWeight = '500' 
}
btn[1].style.marginLeft = '20px'
btn[0].style.backgroundColor = '#583101'
    btn[0].style.color = '#f3d9bd'



///////////PARAGRAPH////////////////
let text = document.querySelectorAll('[class^="ptext"]')

for(let i = 1; i < text.length; i++) {
    text[i].style.textAlign = 'center'
    text[i].style.fontWeight = '600'
};
text[2].style.color = 'red'

