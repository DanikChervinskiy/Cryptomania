window.onload = function () {

    const out1 = document.getElementById('out-1');

    if (out1) {
        const time = 6000;
        const step = 1;

        function outNum(num, elem) {
            let l = document.querySelector('#' + elem);
            n = 0;
            let t = Math.round(time / (num / step));
            let interval = setInterval(() => {
                n = n + step;
                if (n == num) {
                    clearInterval(interval);
                    window.location.href = 'koleso.html';
                }
                l.innerHTML = n;
            }, t);
        }
        outNum(100, 'out-1');
    }


    const spinBtn = document.querySelector('.spin-btn');
    const kolesoItem = document.querySelector('.koleso-item');

    if (kolesoItem) {
        spinBtn.addEventListener('click', () => {

            const popupSory = document.getElementById('popup-sory');
            const popupWin = document.getElementById('popup-win');
            const popupAgain = document.getElementById('popup-again');

            kolesoItem.classList.add('spin');

            function popupSoryActive() {
                popupSory.classList.add('active');
            }
            setTimeout(popupSoryActive, 5500);

            let tryAgain = document.querySelector('.try-again');
            let tryAgainPlease = document.querySelector('.try-again-2');

            if (tryAgain) {
                tryAgain.addEventListener('click', () => {


                    popupSory.classList.remove('active');
                    kolesoItem.classList.add('spin2');

                    function popupAgainActive() {
                        popupAgain.classList.add('active');
                    }
                    setTimeout(popupAgainActive, 5500);


                    let spinPlus = document.querySelector('.spin-plus');
                    // let tryAgainPlease = document.querySelector('.try-again-2');

                    if (spinPlus) {
                        spinPlus.addEventListener('click', () => {

                            console.log('123');

                            popupAgain.classList.remove('active');
                            kolesoItem.classList.add('spin3');


                            function popupWinActive() {
                                popupWin.classList.add('active');
                            }
                            setTimeout(popupWinActive, 5500);

                        });
                    }












                });
            }
        });
    }


}