let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ol');


btn.addEventListener('click', (e) => {
    if (input.value.trim() === "") {
        alert('you didnot enter any text');
        }
    else {

        newli();
        }
    })





function newli() {
    let li = document.createElement('li');
    let remvbtn = document.createElement('button');
    remvbtn.innerText='Remove'
    remvbtn.style.marginLeft = '10px';
    remvbtn.style.display = 'inline-block';
    li.innerText = input.value;
    li.style.paddingBottom = '10px';
    li.style.fontFamily='Manrope,sans-serif';
    console.dir(input);
    ul.appendChild(li);
    li.appendChild(remvbtn);
    input.value=""
    remvbtn.addEventListener('click', function () {
        ul.removeChild(li);
    })
}