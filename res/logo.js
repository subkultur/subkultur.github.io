document.addEventListener('theme-change', (e) => {
    const dark = e.detail === 'dark';
    document.querySelectorAll(".big, .small, .lcircle").forEach((e) => 
        e.classList.toggle('light', !dark)
    )
});

// function translate( elem, x, y ) {
//     var left = parseInt( css( elem, 'left' ), 10 ),
//         top = parseInt( css( elem, 'top' ), 10 ),
//         dx = left - x,
//         dy = top - y,
//         i = 1,
//         count = 20,
//         delay = 20;

//     function loop() {
//         if ( i >= count ) { return; }
//         i += 1;
//         elem.style.left = ( left - ( dx * i / count ) ).toFixed( 0 ) + 'px';
//         elem.style.top = ( top - ( dy * i / count ) ).toFixed( 0 ) + 'px';
//         setTimeout( loop, delay );
//     }

//     loop();
// }
//
// function translateD( elem, dx, dy ) {
//     var //left = parseInt( css( elem, 'left' ), 10 ),
//         //top = parseInt( css( elem, 'top' ), 10 ),
//         //dx = left - x,
//         //dy = top - y,
//         left = elem.cx.value,
//         top = elem.cy.value,
//         i = 1,
//         count = 20,
//         delay = 20;

//     function loop() {
//         if ( i >= count ) { return; }
//         i += 1;
//         //elem.style.left = ( left - ( dx * i / count ) ).toFixed( 0 ) + 'px';
//         //elem.style.top = ( top - ( dy * i / count ) ).toFixed( 0 ) + 'px';
//         elem.cx.
//         setTimeout( loop, delay );
//     }

//     loop();
// }

// function css( element, property ) {
//     return window.getComputedStyle( element, null ).getPropertyValue( property );
// }

// window.addEventListener('DOMContentLoaded', () => {
//     debugger;
//     document.querySelectorAll(".l2nd").forEach((e) => {
//         translate(e, css(e, 'left') + 120, css(e, 'top'));
//     });

// });

function pickRandomElement(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

const steps = [18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let intervalSet;
function startInterval() {
    if (document.querySelector(".logo_big")) {
        intervalSet = window.setInterval(function() {
            const els = [
                pickRandomElement(document.querySelectorAll(".logo_big .lcircle")),
                pickRandomElement(document.querySelectorAll(".logo_small .lcircle"))
            ];
            let stepCnt = 0;
            function loop() {
                if (stepCnt >= steps.length) { return; }
                els.forEach((e) => e.setAttribute('r', steps[stepCnt]))
                stepCnt = stepCnt + 1;
                window.setTimeout(loop, 100);
            }
            loop();
        }, 5000);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    startInterval();
});

document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
        if (intervalSet) { window.clearInterval(intervalSet); }
    } else {
        startInterval();
    }
});