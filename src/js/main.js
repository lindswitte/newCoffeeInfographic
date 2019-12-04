console.log(`BLAH`)


const cup1Animation = new TweenLite();

let cup1 = document.querySelector('.cup1');

TweenLite.set(cup1, {y:0, yPercent:-100});

$('#open').on('click',
  function() {
    TweenMax.to(overlay, 0.8, {
      yPercent: 0
    });
  });

$('#close').on('click',
  function() {
    TweenMax.to(overlay, 0.8, {
      yPercent: -100
    });
  });