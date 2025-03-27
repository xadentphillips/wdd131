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

but.addEventListener('change', function(event){
    const chosen = event.target.value;
    if (chosen == 'all'){
        if (mem.classList.contains('hide')){
            mem.classList.toggle('hide')
        }
        if (tic.classList.contains('hide')){
            tic.classList.toggle('hide')
        }
        if (cfour.classList.contains('hide')){
            cfour.classList.toggle('hide')
        }
        if (brick.classList.contains('hide')){
            brick.classList.toggle('hide')
        }
    }
    else if (chosen == 'one') {
        for (let i=0; i < filterlist.length; i++) {
            if (filterlist[i].playernum == 1){
                if (filterlist[i].elm.classList.contains('hide')){
                    filterlist[i].elm.classList.toggle('hide');
                }
            }
            else if (filterlist[i].playernum == 2){
                if (!filterlist[i].elm.classList.contains('hide')){
                    filterlist[i].elm.classList.toggle('hide');
                }
            }
        }
    }
    else if (chosen == 'two') {
        for (let i=0; i < filterlist.length; i++) {
            if (filterlist[i].playernum == 2){
                if (filterlist[i].elm.classList.contains('hide')){
                    filterlist[i].elm.classList.toggle('hide');
                }
            }
            else if (filterlist[i].playernum == 1){
                if (!filterlist[i].elm.classList.contains('hide')){
                    filterlist[i].elm.classList.toggle('hide');
                }
            }
        }
    }
})



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