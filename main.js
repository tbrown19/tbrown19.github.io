startThinLines();


var expandedUp = false;

function startThinLines() {
    var mainContentRow = document.querySelector("#main-content-row");
    var lineWidth = 150;
    var thinLines = setInterval(function () {
        var distance = lineWidth - 50;
        var subtractVal = .01 + (distance - 0) * (1 - 0) / (25 - 0);
        lineWidth = lineWidth - subtractVal;
        if (lineWidth <= 50) {
            clearInterval(thinLines);
        }
        mainContentRow.style.background = 'repeating-linear-gradient(-45deg, black, black ' +
            lineWidth + 'px, #FDFFFC ' + lineWidth + 'px, #FDFFFC 100px)';
    }, 16.67);
}

function transitionToPage(page) {
    if (!expandedUp) expandUp();
    unselectAllNavLinks();
    var currentButton = document.querySelector(`#${page}Button`);
    currentButton.style.pointerEvents = 'none';
    currentButton.classList.add('selected-link');

}

function unselectAllNavLinks() {
    var otherButtons = document.querySelectorAll('.home-nav-link');
    otherButtons.forEach(function (button) {
        button.classList.remove('selected-link');
        button.style.pointerEvents = 'auto';
    }, this);
}

function expandUp() {
    setTimeout(function () {
        var navBox = document.querySelector("#home-primary-nav");
        navBox.style.minHeight = '70vh';
        navBox.style.maxHeight = '70vh';
    }, 500);
    var navLinks = document.querySelector("#home-nav-links");
    navLinks.classList.remove('fadeInUp');    
    navLinks.classList.add('fadeOutDown');

    setTimeout(function () {
        navLinks.classList.remove('align-items-end');
        navLinks.classList.remove('fadeOutDown');
        navLinks.classList.add('fadeInDown');
    }, 1000);
    expandedUp = true;
}

function returnToMain(){
    if (expandedUp) expandDown();
}


function expandDown() {
    setTimeout(function () {
        var navBox = document.querySelector("#home-primary-nav");
        navBox.style.maxHeight = '35vh';
        navBox.style.minHeight = '35vh';
    }, 500);

    var navLinks = document.querySelector("#home-nav-links");
    navLinks.classList.remove('fadeInDown');    
    navLinks.classList.add('fadeOut');
    unselectAllNavLinks();
    setTimeout(function () {
        navLinks.classList.remove('fadeOut');
        navLinks.classList.add('fadeInUp');
        navLinks.classList.add('align-items-end');        
    }, 1000);
    expandedUp = false;
}