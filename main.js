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

}
;

// Project 5 v2
// Fetch weather data from the OpenWeatherMap API for a default city (e.g., Boston)


const searchButton = document.querySelector('#search-btn');
const cityInput = document.querySelector('#city-input');
const forecastUl = document.querySelector('#weather-cards');
const apiKey = "a6f4a4af866600cddf344e0c6d164029";


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

                const li = document.createElement('li')
                li.innerHTML =
                    `
                    <p class="bg-sky-300 text-white p-4 rounded-t-lg">${item.dt_txt}</p>
                    <p class=" bg-sky-300 text-white p-4">High: ${item.main.temp_max}</p>
                    <p class=" bg-sky-300 text-white p-4">Low: ${item.main.temp_min}</p>
                    <img class=" bg-sky-300 text-white p-4 " src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="weather-icon">
                    <p class="bg-sky-300 text-white p-4 flex gap-10 rounded-b-lg">${item.weather[0].description}</p>
                `
                forecastUl.appendChild(li)

            })
        })
}

searchButton.addEventListener("click", getCity);



