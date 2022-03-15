
console.log("Hallooo xixixixi");

const a = document.querySelectorAll('a');
for (let i=0; i<a.length; i++){
    a[i].style.color='lightblue';
    a[i].style.fontFamily='times new roman';
    a[i].style.fontSize='35px';
}

var judul = document.querySelector('.hi');
judul.innerHTML='Welcome To My Blog';
judul.style.fontSize='100px';
judul.style.fontFamily='Times New Roman';

const p1 = document.getElementsByClassName('hai');
p1[0].style.color='#ffdab9';
p1[0].style.padding='30px';

const kolom = document.getElementsByClassName('kolom');
kolom[0].style.backgroundColor='lightBLue';

const h1 = document.getElementById('sosmed');
h1.style.color='hotpink';

const h2 = document.getElementById('hobi');
h2.style.color='darkgreen';


const p2 = document.getElementsByTagName('p')
p2[1].style.color='black';
p2[2].style.color='black';


const btn = document.getElementsByClassName('button');
btn[0].style.backgroundColor='black';
btn[1].style.backgroundColor='black';









