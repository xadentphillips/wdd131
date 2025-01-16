let selectElm = document.querySelector('select');
function light(){
    const lightpic = document.querySelector('img');
    lightpic.setAttribute('src', 'byuilogo.webp');
    lightpic.setAttribute('alt', 'BYUI Logo');
    const lclass = document.querySelector('body');
    lclass.setAttribute('class', 'light');
}
function dark(){
    const darkpic = document.querySelector('img');
    darkpic.setAttribute('src', 'darklogo.png');
    darkpic.setAttribute('alt', 'BYUI Dark Logo');
    const dclass = document.querySelector('body');
    dclass.setAttribute('class', 'dark');
}
selectElm.addEventListener('change', function(event) {
    const chosen = event.target.value;
    if (chosen === 'light') {
        light();
    }
    else if (chosen === 'dark') {
        dark();
    }
});