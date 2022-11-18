const openEl = document.getElementById('opennav');
const closeEl = document.getElementById('closenav');
const navEl =  document.getElementById('navigator');

openEl.addEventListener('click', () => {
    navEl.style.width = '70%'
})
closeEl.addEventListener('click', () => {
   navEl.style.width = '0%'
})
