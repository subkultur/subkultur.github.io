document.addEventListener('theme-change', (e) => {
    const dark = e.detail === 'dark';
    document.querySelectorAll(".big, .small, .lcircle").forEach((e) => 
        dark ? e.classList.remove('light') : e.classList.add('light')
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
