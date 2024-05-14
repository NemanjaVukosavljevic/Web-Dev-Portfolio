import Projects from "./projects.js";
import observer from "./intersectionObserver.js";
import form from "./form.js";





gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );


  const openScene = document.querySelector('.reg');
  const loadingPage = document.querySelector('.loading-page');
  const leftie = document.querySelector('.leftie');

  setTimeout(() => {
    loadingPage.classList.add('hidden');
    openScene.classList.remove('hidden');
    leftie.classList.add('slut');
    
    
  }, 5000);

  


// ------------------- PROJECTS GENERATE ------------------ //

// Select the container where projects will be appended
const projectsContainer = document.querySelector('.projectsDiv');
const navLinks = document.querySelectorAll('.nav-indicator');
const navText = document.querySelectorAll('.nav-text');
let isEksAdded = false;
// Check if the projects container exists
if (projectsContainer) {

     // Intersection Observer options
     const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5 // Trigger when at least half of the target is visible
    };

    // Intersection Observer callback function
    const callback = (entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (!(navLinks[1].classList.contains('eks')) && !(navText[1].classList.contains('eks'))) {
                    navLinks[1].classList.add('eks');
                    navText[1].classList.add('eks');
                }
                // Add the 'eks' class when in view
                // console.log(`helper slider in view!`);
                // navLinks[1].classList.add('eks');
                // navText[1].classList.add('eks');
            } else {
                // Remove the 'eks' class when out of view
                console.log(`helper slider out of view!`);
                navLinks[1].classList.remove('eks');
                navText[1].classList.remove('eks');
            }
            // if (entry.target.classList.contains('helperSlider')) {
            //     // Add the 'eks' class to the 2nd element in the navLinks array
            //     console.log(`helper slider in view!`);
            //     console.log(navLinks[1]);
            //     navLinks[1].classList.add('eks');
            //     navText[1].classList.add('eks');
            // }
        });
    };

    // Create the Intersection Observer
    const projectObserver = new IntersectionObserver(callback, options);



    // Iterate over each project in the Projects array
    Projects.forEach(project => {
        // Create project container
        const projectDiv = document.createElement('div');
        projectDiv.className = `helperSlider flex my-2 h-full w-full text-white text-justify rounded-md group border-gray-500 hover:bg-gray-700 transition-all duration-150 cursor-pointer`;
        
        // Add click event listener to redirect to project URL in a new tab
        projectDiv.addEventListener('click', () => {
          window.open(project.projectUrl, '_blank');
        });

        // Create left side for project image
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('flex', 'h-full', 'w-1/3');

        // Create image element
        const img = document.createElement('img');
        img.src = project.img;
        img.alt = 'Project Image'
        img.className = `rounded border-2 mt-4 ml-2 w-full max-h-[8rem] border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1`

        // Append image to left side
        leftDiv.appendChild(img);

        // Create right side for project details
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('flex', 'flex-col', 'justify-between', 'p-4', 'w-2/3', 'md:ml-2');

        // Create heading container for project name and arrow
        const headingContainer = document.createElement('div');
        headingContainer.classList.add('flex', 'items-center', 'justify-between', 'mb-2');

        // Create heading for project name
        const projectNameHeading = document.createElement('h1');
        projectNameHeading.textContent = project.projectName;
        projectNameHeading.classList.add('text-xl', 'font-bold', 'group-hover:text-cyan-300', 'transition-colors', 'duration-150');

        // Create SVG arrow
        const arrowSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        arrowSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        arrowSVG.setAttribute("viewBox", "0 0 20 20");
        arrowSVG.setAttribute("fill", "currentColor");
        arrowSVG.setAttribute("class", "arrow mr-4 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px");
        arrowSVG.setAttribute("aria-hidden", "true");
        arrowSVG.innerHTML = `<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>`;

        // Append heading and arrow to heading container
        headingContainer.appendChild(projectNameHeading);
        headingContainer.appendChild(arrowSVG);

        // Add event listeners for hover
        projectDiv.addEventListener('mouseenter', () => {
            // Add the trip class to the arrow when the projects container is hovered
            arrowSVG.classList.add('trip');
        });

        projectDiv.addEventListener('mouseleave', () => {
            // Remove the trip class from the arrow when the mouse leaves the projects container
            arrowSVG.classList.remove('trip');
        });

        // Append heading container to right side
        rightDiv.appendChild(headingContainer);

        // Create paragraph for project description
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = project.description;
        descriptionParagraph.classList.add('mb-4');

        // Create skills container
        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('flex', 'flex-row', 'flex-wrap', 'text-black');

        // Iterate over each tech in the project
        project.tech.forEach(tech => {
            // Create skill element
            const skill = document.createElement('p');
            skill.textContent = tech;
            skill.classList.add('p-2', 'mr-2', 'mb-2', 'bg-cyan-200', 'rounded-md', 'text-sm');
            skill.className = `p-2 mr-2 mb-2 bg-cyan-200 hover:bg-cyan-500 hover:text-white transition-colors duration-150 rounded-md text-sm`;
            skillsDiv.appendChild(skill);
        });

        // Append description and skills to right side
        rightDiv.appendChild(descriptionParagraph);
        rightDiv.appendChild(skillsDiv);
        
        // Append left and right side to project container
        projectDiv.appendChild(leftDiv);
        projectDiv.appendChild(rightDiv);
        
        

        // Intersection observer to monitor each project
        projectObserver.observe(projectDiv);
        
        // Append project container to projects container

        projectsContainer.appendChild(projectDiv);
    });
} else {
    console.error('Projects container not found');
}



