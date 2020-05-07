function jQueryMini(element) {
    let initializedElement = document.querySelector(element);

    // Use your imagination below :)
    return {
        css: /* ...some magic... */,
        addClass: /* ...some magic... */,
        removeClass: /* ...some magic... */,
        html: /* ...some magic... */,
    }
}


window.onload = function() { // will code after page loaded
    // Usage
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