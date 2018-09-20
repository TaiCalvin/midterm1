"use strict"

$(() => {
    let h1 = document.getElementsByTagName('h1')[1];
const start = document.getElementById('start');
// const   stop = document.getElementById('stop');
let seconds = 0;
let minutes = 0;
let t;

function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    };
    
  h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
};

/* Start button */
$('#start').on('click', add);

function timer() {
  t = setTimeout(add, 1000);
};

// clearTimeout(t);

/* Reset button */
$('#reset').on('click', () => {
  h1.textContent = "00:00";
  seconds = 0; minutes = 0;
  clearTimeout(t);
});

const booze = ['images/jack.jpg', 'images/hennessey.jpg', 'images/makers.jpg', 'images/grey-goose.jpg', 'images/jack.jpg', 'images/hennessey.jpg', 'images/makers.jpg', 'images/grey-goose.jpg']


let selectedCards = [];
$('.deck').on('click', '.card', function() {
    const index = $(this).index();
    $(this).attr("src", booze[index]).removeClass('card');
    selectedCards.push({el: this, src:booze[index]});

  
    if (selectedCards.length < 2) {
        return;
    }

    if (selectedCards[0].src === selectedCards[1].src) {
       for(const card of selectedCards) {
           $(card.el).attr('src', 'images/white.jpg').css("box-shadow", "none");
        }
        selectedCards = [];
    } else {
        setTimeout(() => {
            for(const card of selectedCards) {
                $(card.el).attr('src', 'images/card1.png').addClass('card');
            }
            selectedCards = [];
        }, 1000);
    }
    

});
});