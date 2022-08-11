// function random(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// };
//
// setTimeout(function() {
//     document.querySelector('progress').value = random(10, 100);
// }, 0);

// pb.style.background = 'rgb(109, 169, 51)';
// document.write(pb.style.background);
//
// let pp = document.getElementById('#progress').value;
// alert(pp)
let pb = document.querySelector('.progress-bar');
let p = document.querySelector('progress').value;

let e = document.querySelectorAll('.bar');

let progressBar = document.querySelectorAll(".circular-progress");
let valueContainer = document.querySelectorAll(".value-container");

let progressValue = 0;
let progressEndValue = 30;
let speed = 50;

let progress = setInterval(()=>{
    progressValue++;
    progressBar.style.background = `conic-gradient(
        rgba(165,72,35,0.5) ${progressValue * 3.6}deg,
        rgba(255,255,255,0.2) ${progressValue * 3.6}deg )`
    if (progressValue==progressEndValue){
        clearInterval(progress);}
}, speed);

const progText = document.querySelectorAll(".progText");
const progres = document.querySelectorAll(".prog");
const progContainer = document.querySelector(".container");
let bol = false;

window.addEventListener("scroll",function () {
    if (pageYOffset > progContainer.offsetTop - 600 && bol === false) {
        for (let i=0;i<progText.length;i++) {
            progText[i].innerText=0;
            count=0;
            progress[i].style.bottom="100%"
            progress[i].style.bottom=progText[i].dataset.count-100+"%"
            function updateCount(){
                target = parseInt(progText[i].dataset.count);
                if (count < target) {
                    count++;
                    progText[i].innerText=count;
                    setTimeout(updateCount,50)
                } else {
                    progText[i].innerText = target + "%"
                }
            }
            updateCount();
            bol=true;
        }
    }
})

// function colour() {
//     var p = document.querySelector('progress').value;
//     var pb = document.querySelector('.progress-bar');
//
//     if (p < 70) {
//         pb.style.background = 'orange';
//     } else if (p > 70) {
//         pb.style.background = 'red';
//     } else {
//         pb.style.background = 'green'
//     }
// }
// colour();

for (let pb of e) {
    if (p < 70) {
        document.querySelectorAll('progress').forEach[(document.querySelector('.progress-bar').style.background='orange')]
       // document.querySelector('.progress-bar').style.background='orange'
    } else if (p < 90) {
        document.querySelectorAll('progress').forEach[(document.querySelector('.progress-bar').style.background='yellow')]
        // document.querySelector('.progress-bar').style.background='yellow'
    } else {
        document.querySelectorAll('progress').forEach[(document.querySelector('.progress-bar').style.background='green')]
    }
}

// function progress() {
//     if (p < 70) {
//         pb.style.background = 'orange'
//     } else if (p < 85) {
//         pb.style.background = 'yellow'
//     } else {
//         pb.style.background = 'green'
//     }
// }
// progress()
    // if (p.value < 70) {
    //     pb.style.background = 'orange'
    // } else  {
    //     pb.style.background ='green';
    // }


