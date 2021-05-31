function localStorageSupported() {
    try {
     return "localStorage" in window && window["localStorage"] !== null;
    } catch (e) {
     return false;
    }
   }

// dark mode
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark'),
        localStorage.setItem('theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light'),
        localStorage.setItem('theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
console.log('which theme am I...' + localStorage.getItem('theme'))
// store user preference
var data = localStorage.getItem('theme');
