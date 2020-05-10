window.onload = function() {
    var elem = document.querySelector('.grid');
    elem.style.display = 'block';
    var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        isFitWidth: true,
        columnWidth: 200,
        gutter: 5,
    });
}