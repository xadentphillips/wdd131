let but = document.getElementById("filter");
let mem = document.getElementById("memorycard");
let tic = document.getElementById("ticcard");
let cfour = document.getElementById("cfourcard");
let brick = document.getElementById("brickcard");
const filterlist = [
	{
		id: 1,
		game: 'Memory',
		playernum: 1,
        elm: mem,
	},
	{
		id: 2,
		game: 'Tic-Tac-Toe',
		playernum: 2,
        elm: tic,
	},
	{
		id: 3,
		game: 'Connect 4',
		playernum: 2,
        elm: cfour,
	},
    {
		id: 4,
		game: 'Brick Breaker',
		playernum: 1,
        elm: brick,
	}
]

function filterShift(event) {
    const chosen = event.target.value;

    if (chosen === 'all') {
        [mem, tic, cfour, brick].forEach(el => {
            if (el.classList.contains('hide')) {
                el.classList.toggle('hide');
            }
        });
    } else {
        filterlist.forEach(item => {
            if (item.playernum == (chosen === 'one' ? 1 : 2)) {
                if (item.elm.classList.contains('hide')) {
                    item.elm.classList.toggle('hide');
                }
            } else {
                if (!item.elm.classList.contains('hide')) {
                    item.elm.classList.toggle('hide');
                }
            }
        });
    }
}

but.addEventListener('change', filterShift);




/*Accordion Javascript*/
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