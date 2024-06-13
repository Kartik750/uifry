const nav=document.getElementById('resNav');
const navBttn=document.getElementById('resBttn');
nav.style.display='none';
navBttn.addEventListener('click', function(){
    console.log(nav.style.display);
    if(nav.style.display=='none'){
        nav.style.display='flex';
    }else{
        nav.style.display='none';
    }
});