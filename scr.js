// const circleSection = document.querySelector('.circles');
// const circles = document.querySelectorAll('.circle');
// const progressCircles = document.querySelectorAll('.pragress');
// const progressText = document.querySelectorAll('.text');
//
// let bol = false;

// window.addEventListener('mousemove',function (){
//     if (pageYOffset>circleSection.offsetTop-600&&bol==false) {
//         for (let i=0;i<circles.length;i++){
//             let radius = progressCircles[i].r.baseVal.value;
//             let circumference = radius * 2 * Math.PI;
//
//             progressCircles[i].style.strokeDasharray=circumference;
//             function setProgress(percent){
//                 progressCircles[i].style.strokeDashoffset=
//                     circumference-(percent/100)*circumference;
//             }
//             const progress = circles[i].dataset.prog;
//             // progressText[i].innerHTML=progress+"%";
//             setProgress(progress);
//             bol=true;
//         }
//     }
// })

window.addEventListener('mousemove',function (){
    const circleSection = document.querySelector('.circles');
    const circles = document.querySelectorAll('.circle');
    const progressCircles = document.querySelectorAll('.pragress');
    const progressText = document.querySelectorAll('.text');

    let bol = false;

    if (pageYOffset>circleSection.offsetTop-600&&bol==false) {
        for (let i=0;i<circles.length;i++){
            let radius = progressCircles[i].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;

            progressCircles[i].style.strokeDasharray=circumference;
            function setProgress(percent){
                progressCircles[i].style.strokeDashoffset=
                    circumference-(percent/100)*circumference;
            }
            const progress = circles[i].dataset.prog;
            // progressText[i].innerHTML=progress+"%";
            setProgress(progress);
            bol=true;
        }
    }
})
