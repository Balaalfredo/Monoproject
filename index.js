const bar = document.querySelector('.bar');
const downdiv = document.querySelector('.downdiv');
const navbar = document.querySelector('.navbar');
console.log(downdiv);
bar.addEventListener('click', () => {
    if (downdiv.classList.contains('selectdown')) {
        downdiv.classList.remove('selectdown');
    }
    else { downdiv.classList.add('selectdown') }
})

window.addEventListener('scroll', () => {

    const scrollvalue = window.scrollY;
    console.log(scrollvalue)
    if (scrollvalue >= 100) {
        navbar.style.boxShadow = '2px 2px 1px 1px  #009DFF,4px 2px 1px 1px  #009DFF';
    }
    else { navbar.style.boxShadow = '0px 0px 0px 0px'; }
})