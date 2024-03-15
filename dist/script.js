let hamburger = document.querySelector('#hamburger')
let navlinks = document.querySelector('#navlinks')

hamburger.addEventListener('click', function (){
    if (navlinks.classList.contains('hidden')){
        navlinks.classList.remove('hidden')
        line.classList.add('rotate-45', 'absolute')
        line2.classList.add('-rotate-45', 'absolute')
        line2.classList.remove('mt-1.5')
    } else{
        navlinks.classList.add('hidden')
        line.classList.remove('rotate-45', 'absolute')
        line2.classList.remove('-rotate-45', 'absolute')
        line2.classList.add('mt-1.5')
    }
})

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const isClickInsideNavlinks = navlinks.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);

    if (!isClickInsideNavlinks && !isClickInsideHamburger) {
        navlinks.classList.add('hidden');
        line.classList.remove('rotate-45', 'absolute');
        line2.classList.remove('-rotate-45', 'absolute');
        line2.classList.add('mt-1.5');
    }
});

let container = document.querySelector('.container');

// Define the number of rows and columns
const rows = 10;
const cols = 10;

// Loop to create dots
for (let i = 0; i < rows * cols; i++) {
    let dot = document.createElement('div');
    dot.className = `w-3 md:w-7 h-3 md:h-7 bg-white scale-75 mr-2 mb-2`
    container.appendChild(dot);
}

// Indices of dots forming the middle square
const middleIndices = [33, 34, 35, 36, 43, 46, 53, 56, 63, 64, 65, 66];

// Get all dots
let dotAll = document.querySelectorAll('.container > div');

// Apply colors
dotAll.forEach((dot, index) => {
    // Check if the current dot index is in the middleIndices array
    if (middleIndices.includes(index)) {
        dot.style.backgroundColor = '#8a2be2'; // Set purple color
    }
});

// Animation
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true,
    delay: anime.stagger(100, { grid: [rows, cols], from: 'center' })
});

animation.add({
    rotateZ: 180,
    translateY: anime.stagger(-5, { grid: [rows, cols], from: 'center', axis: 'y' }),
    translateX: anime.stagger(-5, { grid: [rows, cols], from: 'center', axis: 'x' }),
    opacity: 1,
})
    .add({
        borderRadius: '50%',
    })
    .add({
        scale: 0.2,
        opacity: 0.2,
    })
    .add({
        rotateZ: 180,
        translateY: anime.stagger(0, { grid: [rows, cols], from: 'center', axis: 'y' }),
        translateX: anime.stagger(0, { grid: [rows, cols], from: 'center', axis: 'x' }),
        opacity: 1,
    })
    .add({
        scale: 1,
        borderRadius: 0,
    })
    .add({
        rotateZ: -90,
    });


    // Array to hold text fragments
const textFragments = [
    "JUNIOR FRONTEND DEVELOPER",
];

// Delay between typing and erasing characters (in milliseconds)
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseSpeed = 1000;

// Get the target element
const targetElement = document.getElementById('typing-animation');

// Function to simulate typing
function typeText(fragment, callback) {
    let index = 0;
    const typingInterval = setInterval(() => {
        targetElement.textContent += fragment[index];
        index++;
        if (index >= fragment.length) {
            clearInterval(typingInterval);
            setTimeout(callback, pauseSpeed);
        }
    }, typingSpeed);
}

// Function to simulate erasing
function eraseText(callback) {
    const textLength = targetElement.textContent.length;
    const erasingInterval = setInterval(() => {
        targetElement.textContent = targetElement.textContent.slice(0, -1);
        if (targetElement.textContent.length === 0) {
            clearInterval(erasingInterval);
            setTimeout(callback, pauseSpeed);
        }
    }, erasingSpeed);
}

// Function to perform typing and erasing animation
function performAnimation() {
    let currentFragmentIndex = 0;
    typeText(textFragments[currentFragmentIndex], () => {
        eraseText(() => {
            currentFragmentIndex = (currentFragmentIndex + 1) % textFragments.length;
            performAnimation();
        });
    });
}

// Start the animation
performAnimation();



// DRUGA SEKCIJA, INTERSECTION OBSERVER

const observer = new IntersectionObserver((entries) => {
    console.log('Intersection Observer Callback:', entries);
    entries.forEach((entry) => {
        console.log('Entry:', entry);
        if (entry.isIntersecting) {
            console.log('Intersecting:', entry.target);
            entry.target.classList.remove('real-show');
            void entry.target.offsetWidth; // Trigger reflow to reset the animation
            entry.target.classList.add('real-show');
        } else {
            console.log('Not intersecting:', entry.target);
            entry.target.classList.remove('real-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.no-show');
console.log('Hidden Elements:', hiddenElements);

hiddenElements.forEach((el) => observer.observe(el));


