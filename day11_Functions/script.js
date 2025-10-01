const section = document.getElementById('display-section');


const square = function(x) {
    return x * x;
};

section.innerHTML = square(13);
section.innerHTML += " "+ Date.now();