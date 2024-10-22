//Project 4 (Original)
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

}

// Project 5 v2
// Fetch weather data from the OpenWeatherMap API for a default city (e.g., Boston)

const searchButton = document.querySelector('#search-btn');
const cityInput = document.querySelector('#city-input');
const forecastUl = document.querySelector('#weather-cards');
const apiKey = "a6f4a4af866600cddf344e0c6d164029";

// Add an input field allowing users to change the city and update the forecast
const getCity = () => {
  const cityName = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&exclude=hourly,minutely,alert,current&units=imperial`;

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {

      // console.log(data.list)
      // console.log(data.list[0])
      // console.log(data.list[0].dt_txt)
      // console.log(data.list[0].main.temp_min)
      // console.log(data.list[0].main.temp_max)
      // console.log(data.list[0].weather[0].description)

      const myNewData = data.list.filter(function (item) {
        // console.log(item.dt_txt)
        // console.log(item.dt_txt.includes("15:00:00"))

        return item.dt_txt.includes("15:00:00")
      })
      console.log(data.list)
      console.log(myNewData)

      forecastUl.innerHTML = ""

      myNewData.forEach(function (item) {

        // console.log(data.list[0])
        // console.log(data.list[0].dt_txt)
        // console.log(data.list[0].main.temp_min)
        // console.log(data.list[0].main.temp_max)
        // console.log(data.list[0].weather[0].description)
        // console.log(data.list[0].weather[0].icon)

        //Display the weather forecast for the next 4 days, including: Date, Weather icon, Temperature (high and low),Brief description (e.g., "Partly cloudy")

        const li = document.createElement('li')
        li.innerHTML =
          `
        <p class="bg-sky-300 text-white p-4 rounded-t-lg">${item.dt_txt}</p>
        <p class=" bg-sky-300 text-white p-4">High: ${item.main.temp_max}</p>
        <p class=" bg-sky-300 text-white p-4">Low: ${item.main.temp_min}</p>
				<img class=" bg-sky-300 text-white p-4 " max-w-70 m-2" src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="weather-icon">
				<p class="bg-sky-300 text-white p-4 flex gap-10 rounded-b-lg">${item.weather[0].description}</p>
      `
        forecastUl.appendChild(li)

      })
    })
}

searchButton.addEventListener("click", getCity);

// Project 6 v3
// Add a form to input new travel plans (date, location, plan)

 const formEl = document.querySelector('#make-trip');
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
})

// const submitButton = document.querySelector('#submit-btn');
// const tripDate = document.querySelector('#trip-date');
// // const tripLocation = document.querySelector('#trip-location')
// const tripPlan = document.querySelector('#trip-notes')

const plansEl = document.querySelector('#plans')
const API_URL = 'https://eadbaafjveoawihuijpz.supabase.co/rest/v1'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZGJhYWZqdmVvYXdpaHVpanB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNzk4MTIsImV4cCI6MjA0MTc1NTgxMn0.wV7DUkg9vLbo1wumRMHhIY25ZYSaD6DXP4hZrbpal_g'

fetch(`${API_URL}/travel_plans?select=*&apikey=${API_KEY}`)
.then(response => response.json())
.then(data => {
console.log(data);

data.forEach(item => showTravelPlans(item))

})

function showTravelPlans(item) {

  // console.log("works")
  const div = document.createElement('div');
  div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">${item['date']}</h3>
            <p class="text-gray-600">Destination: ${item['location']}</p>
            <p>${item['plan']}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">View More</button>
            </div>
          </div>
        </div>
    `

  plansEl.appendChild(div);
}

