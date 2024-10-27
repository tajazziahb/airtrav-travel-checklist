import './src/style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

// Create an interactive travel checklist web application that reproduces the provided design using TailwindCSS and DaisyUI,
// while implementing specific functionality using JavaScript.

// Add JavaScript functionality:
// Toggle visibility of the "Travel" and "Hotel" sections when their respective headers are clicked

const clickMeBtnEl = document.querySelector('#click-me');
const clickMeBtnElTwo = document.querySelector('#click-Two');
const travelSectionEl = document.querySelector('#travel-section');
const hotelSectionEl = document.querySelector('#hotel-section');

// Traveler Button
clickMeBtnEl.addEventListener('click', () => {

  travelSectionEl.classList.toggle('hidden');
});

// Hotel Button
clickMeBtnElTwo.addEventListener('click', () => {

  hotelSectionEl.classList.toggle('hidden');
});

// Populate the "Plan Ahead" section using an array of objects

const planAheadSection = [
  {
    featuredImage: 'https://i0.wp.com/guitarandlace.com/wp-content/uploads/2024/04/Google-docs-free-orange-app-icons.jpg?w=400&ssl=1',
    description: "Check visa requirements",
    buttonText: "Check visa",
    iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
  },
  {
    featuredImage: 'https://matthewcassinelli.com/wp-content/uploads/shortcut-add-a-custom-spreadsheet-icon.webp',
    description: "Check visa requirements",
    buttonText: "Check visa",
    iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
  },
  {
    featuredImage: 'https://www.giftsnode.com/assets/img/icons/gifts-for-colleague.svg',
    description: "Check visa requirements",
    buttonText: "Check Insurance",
    iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
  },
  {
    featuredImage: 'https://cdn.prod.website-files.com/629f58fef317062068fa4ccc/62c1fe9d54de259c6347f21e_calculate-payment-hero-p-500.jpeg',
    description: "Check visa requirements",
    buttonText: "Buy tickets",
    iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
  }

];

const RequirementOne = {
  featuredImage: 'https://i0.wp.com/guitarandlace.com/wp-content/uploads/2024/04/Google-docs-free-orange-app-icons.jpg?w=400&ssl=1',
  description: "Check visa requirements",
  buttonText: "Check visa",
  iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
};

const RequirementTwo = {
  featuredImage: 'https://matthewcassinelli.com/wp-content/uploads/shortcut-add-a-custom-spreadsheet-icon.webp',
  description: "Check visa requirements",
  buttonText: "Check visa",
  iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
};

const RequirementThree = {
  featuredImage: 'https://www.giftsnode.com/assets/img/icons/gifts-for-colleague.svg',
  description: "Check visa requirements",
  buttonText: "Check Insurance",
  iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
};

const RequirementFour = {
  featuredImage: 'https://cdn.prod.website-files.com/629f58fef317062068fa4ccc/62c1fe9d54de259c6347f21e_calculate-payment-hero-p-500.jpeg',
  description: "Check visa requirements",
  buttonText: "Buy tickets",
  iconImage: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-vertical-256.png',
};


console.log(planAheadSection);

for (const section of planAheadSection) {

  console.log("------");
  console.log(`Title: ${section['description']}`);
  console.log(`Title: ${section['buttonText']}`);
  console.log("------");

};
