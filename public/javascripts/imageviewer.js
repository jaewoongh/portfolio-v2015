var attachImageViewer = function() {
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.left = 0;
    overlay.style.top = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(255,255,255,0.9)';
    overlay.style.opacity = 0;
    overlay.style.webkitTransition = 'opacity 0.2s ease-out';
    overlay.style.transition = 'opacity 0.2s ease-out';
    overlay.style.textAlign = 'center';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    var images = document.querySelectorAll('figure img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(overlay) {
            overlay.style.display = 'block';
            window.setTimeout(function() {
                overlay.style.opacity = 1;
            }.bind(overlay), 300);
            var bigImage = this.cloneNode();
            bigImage.style.display = 'inline-block';
            bigImage.style.maxWidth = '80%';
            bigImage.style.maxHeight = '80%';
            bigImage.style.margin = '5% 0';
            overlay.appendChild(bigImage);
            overlay.addEventListener('click', function() {
                window.setTimeout(function() {
                    this.style.display = 'none';
                    while (this.hasChildNodes()) {
                        this.removeChild(this.firstChild);
                    }
                }.bind(this), 300);
                this.style.opacity = 0;
            }.bind(overlay));
        }.bind(images[i], overlay));
    }
};