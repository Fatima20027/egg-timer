//soft-boiled = 4min
//jammy = 6min
//hard-boiled = 8min
//extra hard  = 10min


const times = {
  soft: 240,
  jammy: 360,
  hard: 480,
  extra: 600
};

const counter = document.getElementById('counter');
const alert = document.getElementById('alert');
const imageDisplay = document.getElementById('display');
const sound = document.getElementById('sound-ding');
const countSound = document.getElementById('countsound');
let timerinterval;


function startTimer(value){
  let selectedTime = times[value];

  timerinterval = setInterval(() => {
    const minutes = Math.floor(selectedTime / 60);
    const seconds = Math.floor(selectedTime % 60);
    

    const displayTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    counter.textContent = displayTime;

    selectedTime--;


    if(selectedTime < 0){
      clearInterval(timerinterval)
      alert.textContent = 'Your egg is done!'
      imageDisplay.src = `images/${value}.png`;
      sound.play();
      



    }

  }, 1000);

  
  
}


const urlPara = new URLSearchParams(window.location.search);
const eggType = urlPara.get('egg');
startTimer(eggType);





const bottonSound = document.querySelectorAll('button');
const clickSound = document.querySelector('audio');

function clickBottonSound(e){
  const link = e.target.closest('a');
  if(e.target.tagName === 'BUTTON' && e.target.closest('a')){
    e.preventDefault();
    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() => {
      window.location.href = link.href;
    }, 150);


  }

  

}

bottonSound.forEach(element => {
    element.addEventListener('click', clickBottonSound);
    
  });


countSound.play();
countSound.currentTime = 2.5
