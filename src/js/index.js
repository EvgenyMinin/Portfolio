import '../sass/style.sass';

var arrowElem = document.getElementById("arrow");
var pageYLabel = 0;

arrowElem.onclick = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    switch (this.className) {
        case "arrow__up":
            pageYLabel = pageY;
            window.scrollTo(0, 0);
            this.className = "arrow__down";
            break;
        case "arrow__down":
            window.scrollTo(0, pageYLabel);
            this.className = "arrow__up";
    }
};

window.onscroll = function() {
    var pageY = window.pageYOffset || document.scrollingElement.scrollTop;
    var innerHeight = document.documentElement.clientHeight;

    switch (arrowElem.className) {
        case "":
            if (pageY > innerHeight) {
                arrowElem.className = "arrow__up";
            }
            break;
        case "arrow__up":
            if (pageY < innerHeight) {
                arrowElem.className = "";
            }
            break;
        case "arrow__down":
            if (pageY > innerHeight) {
                arrowElem.className = "arrow__up";
            }
            break;
    }
}