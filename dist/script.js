import Projects from "./projects.js";



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

  const proba = document.querySelector('.proba');

  document.body.addEventListener('click', () => {
    proba.classList.toggle('w-16');
    proba.classList.toggle('bg-slate-200');
  });


//   // Select the target elements to observe
// const sections = document.querySelectorAll('.firstSlider, .secondSlider, .thirdSlider');
// const navLinks = document.querySelectorAll('.nav-indicator');

// // Options for the IntersectionObserver
// const options = {
//   threshold: 0.5 // 50% of the target element is visible
// };

// // Callback function to execute when the observed elements intersect with the viewport
// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Get the index of the intersecting section
//       const index = [...sections].indexOf(entry.target);

//       // Remove the 'active' class from all navigation links
//       navLinks.forEach(link => link.classList.remove('w-16', 'bg-slate-200'));

//       // Add the 'active' class to the corresponding navigation link
//       navLinks[index].classList.add('w-16', 'bg-slate-200');
//     }
//   });
// };




// Select the target elements to observe
const sections = document.querySelectorAll('.firstSlider, .secondSlider, .thirdSlider');
const navLinks = document.querySelectorAll('.nav-indicator');
const navText = document.querySelectorAll('.nav-text');
const navbar = document.querySelector('.leftie');

// Options for the IntersectionObserver
const options = {
  threshold: 0.5 // 50% of the target element is visible
};

// Callback function to execute when the observed elements intersect with the viewport
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
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

// Observe each section
sections.forEach(section => observer.observe(section));



// ------------------- PROJECTS GENERATE ------------------ //

// Select the container where projects will be appended
const projectsContainer = document.querySelector('.projectsDiv');

// Check if the projects container exists
if (projectsContainer) {
    // Iterate over each project in the Projects array
    Projects.forEach(project => {
        // Create project container
        const projectDiv = document.createElement('div');
        projectDiv.className = `flex my-2 h-full w-full text-white rounded-md group border-gray-500 hover:bg-gray-700 transition-all duration-150 cursor-pointer`;
        
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

        // Append project container to projects container
        projectsContainer.appendChild(projectDiv);
    });
} else {
    console.error('Projects container not found');
}


// ------------------------------------- FORM ---------------------------------------------


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

console.log(Projects.length);