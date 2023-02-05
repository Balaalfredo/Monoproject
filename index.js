const bar = document.querySelector('.bar');
const downdiv = document.querySelector('.downdiv');
console.log(downdiv);
bar.addEventListener('click', () => {
    if (downdiv.classList.contains('selectdown')) {
        downdiv.classList.remove('selectdown');
    }
    else { downdiv.classList.add('selectdown') }
})
