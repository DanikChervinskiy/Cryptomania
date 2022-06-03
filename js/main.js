// function userProgress(time){
//     var start = 0;
//     var time = Math.round(time*1000/100);
//     var progressElement = document.getElementById('user-progres');
//     var intervalId=setInterval(function(){
//         if (start>100) {
//             clearInterval(intervalId);
//             userProgressCallBack();
//         }
// else {
//     progressElement.value = start;
//     }
//     start++;
//     }, time);
// }

const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;



const time = 7000;
const step = 1;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
       n = n + step;
       if (n == num) {
           clearInterval(interval);
       } 
       l.innerHTML = n;
    }, 
    t);
}

outNum(100, 'out-1');