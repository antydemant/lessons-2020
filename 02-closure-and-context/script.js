function jQueryMini(element) {
    let initializedElement = document.querySelector(element);

    return {
        css: function(property, value) {
            initializedElement.style[property] = value;
            return this;
        },
        addClass: function(className) {
            initializedElement.classList.add(className);
            return this;
        },
        removeClass: function(className) {
            initializedElement.classList.remove(className);
            return this;
        },
        html: function(data) {
            if(data) {
                initializedElement.innerHTML = data;
                return this;
            } else {
                return initializedElement.outerHTML;
            }
        },
        find: function(elem) {
            if(elem) {
                initializedElement = initializedElement.querySelector(elem);
                return this;
            }
        },
    }

}

window.onload = function() {
    const myElement = jQueryMini('#my-element')
    .css('padding', '150px')
    .css('margin', '150px')
    .css('border', '2px')
    .css('border-color', 'black')
    .css('border-style', 'solid')
    .removeClass('redundant-custom-class')
    .addClass('custom-class')
    .css('text-align', 'center');

    console.log(myElement.html()); /* Output:   <div id="my-element" class="custom-class" style="padding: 150px; margin: 150px; border: 2px solid black; text-align: center;">
                                                    <img src="cat.jpg">
                                                </div>
                                    */
}