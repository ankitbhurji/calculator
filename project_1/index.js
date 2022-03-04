// document.querySelector('.container').addEventListener('mouseup', function(){
//     calculator.play();
// })

let calculator = anime({
    targets: '.button',
    translateX: 250,
    direction: 'reverse',
    easing: 'easeInOutSine'
  });

//   document.querySelector('.container').addEventListener('mouseup', function(){
//       calculator1.play();
//   })

  let calculator1 = anime({
     targets: '.form-control',
     translateX: 250,
     direction: 'alternate',
     easing: 'easeInOutSine'
  })


  anime({
    targets: '.image',
    translateX: 10,
    scale: 1,
    rotate: '1turn'
  });
  



function dis(res){
    document.getElementById("box").value+=res;
}

function solve(){
    let x = document.getElementById("box").value
    let y = eval(x);
    document.getElementById("box").value= y;
}

function clr(){
    document.getElementById("box").value="";
}


function hello(){
    document.getElementById("box").value = "hello";
}