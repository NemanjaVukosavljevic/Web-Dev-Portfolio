// ------------- intersection observer -------------



// Select the target elements to observe
const sections = document.querySelectorAll('.firstSlider, .secondSlider, .thirdSlider');
const navLinks = document.querySelectorAll('.nav-indicator');
const navText = document.querySelectorAll('.nav-text');
const navbar = document.querySelector('.leftie');
const trazim = document.querySelector('.thirdSlider');

// Options for the IntersectionObserver
const options = {
  threshold: 0.5 // 50% of the target element is visible
};

// Callback function to execute when the observed elements intersect with the viewport
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
      // Get the index of the intersecting section
      const index = [...sections].indexOf(entry.target);

      // Log the section that has come into view
      console.log(`Section ${index + 1} is now in view`);

      // Check if the corresponding navigation link already has the active classes
      const isAlreadyActive = navLinks[index].classList.contains('eks');
      const textIsAlreadyActive = navText[index].classList.contains('eks');

      // Remove the 'active' class from all navigation links
      navLinks.forEach(link => link.classList.remove('eks'));
      navText.forEach(link => link.classList.remove('eks'));

      

      if (!isAlreadyActive) {
        // Add the 'active' class to the corresponding navigation link if not already active
        navLinks[index].classList.add('eks');
      }

      if (!textIsAlreadyActive){
        navText[index].classList.add('eks');
      }

      // Check if the intersecting element is helperSlider
      if (entry.target.classList.contains('helperSlider')) {
        // Add the 'eks' class to the 2nd element in the navLinks array
        console.log(`helper slider in view!`);
        navLinks[1].classList.add('eks');
      }

      // Make navbar text white
      navbar.classList.add('text-white');
    } else {
      // Remove classes if not in view
      navbar.classList.remove('text-white');
    }
  });
}


// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(callback, options);

// Observe each section individually
sections.forEach(section => observer.observe(section));



export default observer;