let menuselect = document.querySelector('#menu');
let gallerypics = document.querySelector('body');

menuselect.addEventListener('click', function () {
    let heads = document.querySelector('nav');
    heads.classList.toggle('hide');
});

function handleResize() {
    if (window.innerWidth >= 1000) {
        let remover = document.querySelector('nav');
        remover.classList.remove('hide');
    }
}
window.addEventListener('resize', handleResize);

function viewHandler(event) {
    let noDouble = document.querySelector(".viewer"); 
    if(event.target.classList.contains('pics') && !noDouble) {
        console.log('clicked');
        let clickpic = event.target;
        let source = event.target.src;
        console.log(source);
        let pieces = source.split("-");
        let bigsource = pieces[0] + '-full.jpeg';
        let alternate = "bigger picture";
        let htmltoinsert = viewerTemplate(bigsource, alternate);
        gallerypics.insertAdjacentHTML("afterbegin", htmltoinsert);
        let closebutton = document.querySelector('.close-viewer');
        closebutton.addEventListener('click', closeviewer);
    }

}
function closeviewer(){
    let checker = document.querySelector(".viewer");
    checker.remove();
}


document.addEventListener('click', viewHandler);

function viewerTemplate(pic, alt) {
    return `<div class="viewer" aria-modal="true" role="dialogue"><button class="close-viewer">X</button>
        <img id="bigimage" src="${pic}" alt="${alt}">
        </img></div>`;
}

window.addEventListener("click", function (event) {
    let modal = document.querySelector('.viewer');
    // close the modal when user clicks outside of the image
    if (event.target === modal) {
    modal.remove();
    }
    });
    
    // allow the escape key to close the modal as well
    window.addEventListener("keydown", function (event) {
    let modal = document.querySelector('.viewer');
    if (event.key === "Escape") {
    modal.remove();
    }
    });