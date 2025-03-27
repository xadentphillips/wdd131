

const images = [
    {
        id: 1,
        source: 'images/Cat.webp',
        alter: 'Cat',
        clss: 'flipcard',
        clss1: 'cat',
    },
    {
        id: 2,
        source: 'images/Circle.webp',
        alter: 'Circle',
        clss: 'flipcard',
        clss1: 'circle',
    },
    {
        id: 3,
        source: 'images/Cow.webp',
        alter: 'Cow',
        clss: 'flipcard',
        clss1: 'cow',
    },
    {
        id: 4,
        source: 'images/House.webp',
        alter: 'House',
        clss: 'flipcard',
        clss1: 'house',
    },
    {
        id: 5,
        source: 'images/Horse.webp',
        alter: 'Horse',
        clss: 'flipcard',
        clss1: 'horse',
    },
    {
        id: 6,
        source: 'images/Oval.webp',
        alter: 'Oval',
        clss: 'flipcard',
        clss1: 'oval',
    },
    {
        id: 7,
        source: 'images/Sun.webp',
        alter: 'Sun',
        clss: 'flipcard',
        clss1: 'sun',
    },
    {
        id: 8,
        source: 'images/Triangle.webp',
        alter: 'Triangle',
        clss: 'flipcard',
        clss1: 'triangle',
    },
]
let doubledImages = images.map(obj => [obj, { ...obj }]).flat();
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Swap elements
    }
    return array;
}
let shuffled = shuffle(doubledImages);
let container = document.getElementById('memcontainer');


for (i = 0; i < 16; i++) {
    let newimg = document.createElement('img');

    newimg.src = 'images/Memoryback.webp';
    newimg.classList.add('memorycard');
    newimg.alt = 'Memory Card'
    container.appendChild(newimg);

    newimg.dataset.id = shuffled[i].id;
    newimg.dataset.source = shuffled[i].source;
    newimg.dataset.clss = shuffled[i].clss;
    newimg.dataset.clss1 = shuffled[i].clss1;
    newimg.dataset.alter = shuffled[i].alter;
}
let numcheck = 0;
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('memorycard')) {
        if (numcheck < 2) {
            if (event.target.classList.contains('memorycard')) {
                event.target.src = event.target.dataset.source;
                event.target.alt = event.target.dataset.alter;
                event.target.classList.remove('memorycard');
                event.target.classList.add(event.target.dataset.clss);
                event.target.classList.add(event.target.dataset.clss1);
                let newone = event.target;
                numcheck++;
            }
            if (numcheck == 2) {
                let checker = document.getElementsByClassName('flipcard')
                if (checker[1].dataset.id === checker[0].dataset.id) {
                    while (document.querySelectorAll('.flipcard').length > 0) {
                        let newchecker = document.getElementsByClassName('flipcard');
                        for(i=0; i<newchecker.length;i++){
                            newchecker[i].classList.add('hide');
                            newchecker[i].classList.remove('flipcard');
                        }
                    }
                }
            }
            if (document.querySelectorAll('.memorycard').length == 0){
                alert("You won the game!");
            }
        }
        else if (numcheck == 2) {
            while (document.querySelectorAll('.flipcard').length > 0) {
                let cardone = document.querySelector('.flipcard');
                cardone.src = 'images/Memoryback.webp';
                cardone.classList.add('memorycard');
                cardone.classList.remove(cardone.dataset.clss);
                cardone.classList.remove(cardone.dataset.clss1);
            }
            if (event.target.classList.contains('memorycard')) {

                event.target.src = event.target.dataset.source;
                event.target.alt = event.target.dataset.alter;
                event.target.classList.remove('memorycard');
                event.target.classList.add(event.target.dataset.clss);
                event.target.classList.add(event.target.dataset.clss1);
                numcheck = 1;
            }
        }
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
const restartbutton = document.getElementById('restartbutton');
restartbutton.addEventListener('click', function(){
    while (document.querySelectorAll('.hide').length > 0){
        remover = document.querySelector('.hide');
        remover.src = 'images/Memoryback.webp';
        remover.classList.add('memorycard');
        remover.classList.remove(remover.dataset.clss);
        remover.classList.remove(remover.dataset.clss1);
        remover.classList.remove('hide');
    }
})
