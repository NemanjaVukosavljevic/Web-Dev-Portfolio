document.addEventListener("DOMContentLoaded", function() {
    // Get the loading text elements
    var loadingText = document.getElementById('loading-text');
    var loadingSubtext = document.getElementById('loading-subtext');
    var loader = document.getElementById('loader');
    var header = document.querySelector('header');
    var heroDiv = document.querySelector('.hero-div');

    // Set up the animation using Anime.js
    var animation = anime.timeline({
        duration: 1500, // Adjust duration as needed
        easing: 'linear',
        complete: function() {
            console.log('Animation complete'); // Debugging statement
            // Add a class to the loader when animation completes
            loader.classList.add('hidden');
            // Remove the class to show the header and hero div
            header.classList.remove('hidden');
            heroDiv.classList.remove('hidden');
            setTimeout(function() {
                console.log('Redirecting...'); // Debugging statement
                
            }, 1000); // Adjust delay time as needed
        }
    });

    // Add animation to fill the text with purple color
    animation.add({
        targets: '#loading-text',
        value: ['Nemanja Vukosavljevic', 'Nemanja Vukosavljevic'],
        color: '#9D50BB', // Adjust color as needed
        easing: 'linear',
        delay: 500 // Delay before animation starts
    });

    // Add animation to fill the subtext with purple color
    animation.add({
        targets: '#loading-subtext',
        value: ['Web Developer', 'Web Developer'],
        color: '#9D50BB', // Adjust color as needed
        easing: 'linear',
        delay: 500 // Delay before animation starts
    });
});
