var removePreloader = function() {
    var preloader = document.getElementById('preloader');
    preloader.parentNode.removeChild(preloader);
}

var attachSidelistAnimation = function() {
    var shyoutTimer;
    var shylist = document.getElementById('shylist');
    var shytitles = shylist.getElementsByTagName('div');
    var shyones = shylist.getElementsByTagName('li');
    var side = document.getElementById('side');
    side.addEventListener('mousemove', function(shytitles, shyones) {
        window.clearTimeout(shyoutTimer);
        for (var i = 0; i < shytitles.length; i++) {
            shytitles[i].style.visibility = 'visible';
            shytitles[i].style.opacity = 1;
        }
        for (var i = 0; i < shyones.length; i++) {
            shyones[i].style.visibility = 'visible';
            shyones[i].style.opacity = 1;
        }
        shyoutTimer = window.setTimeout(function(shytitles, shyones) {
            for (var i = 0; i < shytitles.length; i++) {
                shytitles[i].style.visibility = 'hidden';
                shytitles[i].style.opacity = 0;
            }
            for (var i = 0; i < shyones.length; i++) {
                shyones[i].style.visibility = 'hidden';
                shyones[i].style.opacity = 0;
            }
        }.bind(null, shytitles, shyones), 10000);
    }.bind(null, shytitles, shyones));
    var content = document.getElementById('content');
    content.addEventListener('mouseover', function(shytitles, shyones) {
        window.clearTimeout(shyoutTimer);
        for (var i = 0; i < shytitles.length; i++) {
            shytitles[i].style.visibility = 'hidden';
            shytitles[i].style.opacity = 0;
        }
        for (var i = 0; i < shyones.length; i++) {
            shyones[i].style.visibility = 'hidden';
            shyones[i].style.opacity = 0;
        }
    }.bind(null, shytitles, shyones));
};