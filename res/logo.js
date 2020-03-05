document.addEventListener('theme-change', (e) => {
    const dark = e.detail === 'dark';
    document.querySelectorAll(".big, .small, .lcircle").forEach((e) => 
        dark ? e.classList.remove('light') : e.classList.add('light')
    )
});


