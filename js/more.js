(function () {

var textArea = document.querySelectorAll('[data-js=content]'),
    maxText = 200;

[].forEach.call( textArea, function( el ) {

    var textAreaLength = el.innerHTML.length,
        teaserText = el.innerHTML.substr(0, maxText),
        fullText = el.innerHTML,
        showTeaser = false;

    // Check to see if this text length is more
    // than the max
    if (textAreaLength >= maxText) {
        // Set flag
        showTeaser = true;

        // Set teaser text
        el.innerHTML = teaserText;
        el.innerHTML = el.innerHTML + '...';

        // Create button

        let btnWrap =  document.createElement('span');
        btnWrap.classList.add('spanwrap');

        var button = document.createElement('button');
        button.innerHTML = 'Show More';
        button.classList.add('button');


        btnWrap.appendChild(button);
        el.appendChild(btnWrap);

        // Button click event
        button.onclick = function () {
            if (showTeaser === true) {
                // Update flag
                showTeaser = false;

                // Update button text
                this.innerHTML = 'Show Less';

                // Show full text
                el.innerHTML = fullText;

                btnWrap.classList.remove('spanwrap');

                // Re-append the button
                el.appendChild(btnWrap);
            } else {
                // Update flag
                showTeaser = true;

                // Update button text
                this.innerHTML = 'Show More';

                // Show teaser text
                el.innerHTML = teaserText;
                el.innerHTML = el.innerHTML + '...';

                btnWrap.classList.add('spanwrap');

                // Re-append the button
                el.appendChild(btnWrap);
            }
            return false;
        };
    } else {
        // Show full text
        el.innerHTML = fullText;
    }

});

})()
