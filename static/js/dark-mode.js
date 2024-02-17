var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

// probe system default dark mode setting
var systemDefault = null
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    systemDefault = "dark";
} else {
    systemDefault = "light";
}

// use user preference if possible
var savedTheme = localStorage.getItem("dark-mode-storage") || systemDefault;
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.src.endsWith("/sok-blog/img/moon.svg") ) {
        setTheme("dark");
    } else if (toggle.src.endsWith("/sok-blog/img/sun.svg") ) {
        setTheme("light");
    }

});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.src = "/sok-blog/img/sun.svg";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.src = "/sok-blog/img/moon.svg";
    }
}