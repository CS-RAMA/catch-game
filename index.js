const lapain = document.querySelectorAll('.lapin');
const score = document.getElementById('score');
const myTimeInterval = setInterval(compter, 1500);
function compter() {
    let x = Math.floor(Math.random() * 6);
    lapain[x].style.visibility = 'visible';
    const myTimeOut = setTimeout(cacher, 1000);
    function cacher() {
        lapain[x].style.visibility = 'hidden';
    }
    const tricherie = setTimeout(fTricherie, 10500);
    function fTricherie() {
        for (let i = 0; i< lapain.length; i++){
            lapain[i].style.visibility = 'hidden';
        }
    }
}
let y =0;
for (let i = 0; i < lapain.length; i++) {
   lapain[i].addEventListener('click', yes);
    function yes() {
        y++;
        score.textContent = y;
        console.log(y);
    
    } 
}