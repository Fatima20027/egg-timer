//soft-boiled = 4min
//jammy = 6min
//hard-boiled = 8min
//extra hard  = 10min


const times = {
  soft: 1,
  jammy: 360,
  hard: 480,
  extra: 600
};

const counter = document.getElementById('counter');
const alert = document.getElementById('alert');
const imageDisplay = document.getElementById('display');
const sound = document.getElementById('sound-ding');
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




