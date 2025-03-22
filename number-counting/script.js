let valueDisplays = document.querySelectorAll(".num")
let interval = 5000;

valueDisplays.forEach(valueDisplay => {
    let startval = 0;
    let endval = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endval)
    let counter = setInterval(function () {
        startval += 1;
        valueDisplay.textContent = startval;
        if(startval == endval) {
            clearInterval(counter)
        }
    }, duration)
})